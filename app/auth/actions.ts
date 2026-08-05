"use server";

import { cookies } from "next/headers";
import { userSchema, UserFormValues } from "./schema";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export async function checkData(data: UserFormValues) {
    const result = userSchema.safeParse(data);

    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }
} 


export async function operateOnUser(data: UserFormValues, operation: string) {
    const result = userSchema.safeParse(data);

    try {
        const username = result?.data?.username;
        const password = result?.data?.password;
        let API = "";
        let tokens = {};
        let msgString = "";

        if(operation === "SignUp")
            API = "http://localhost:8080/users";
        else
            API = "http://localhost:8080/login";

        const response = await fetch(API, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${process.env.API_SECRET_TOKEN}`
            },
            body: JSON.stringify({ "username" : username, "password": password }),
        });

        if (!response.ok) {
            throw new Error('Failed to create product via API');
        }

        const resData = await response.json();

        if(operation === "SignUp")
            tokens = resData.tokens;
        else {
            tokens = resData;
        }

        const cookieStore = await cookies();
        cookieStore.set('session_token', JSON.stringify(tokens), {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
        });

        if(operation === "SignUp"){
            msgString = `Sign up for ${username} was successful!`;
        }
        else {
            msgString = `${username} is now logged in!`;
        } 

        cookieStore.set('one_time_msg', msgString , {
            httpOnly: false,
            sameSite: 'lax',
            path: '/',
        });
        revalidatePath("/");
        redirect("/");
    }
    catch (error) {
        throw error;
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session_token');
    cookieStore.set('one_time_msg', `You hav logged out!`, {
        httpOnly: false,
        sameSite: 'lax',
        path: '/',
    });
    revalidatePath("/");
    redirect("/");
}