"use server";

import { cookies } from "next/headers";
import { userSchema, UserFormValues } from "./schema";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'


export async function operateOnUser(data: UserFormValues, operation: string) {
    const result = userSchema.safeParse(data);

    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }

    try {
        const username = result.data.username;
        const password = result.data.password;
        let API = "";
        let tokens = {};

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
            // secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
        });

        if(operation === "SignUp"){
            revalidatePath("/auth/signup");
            return { success: true, message: `Sign up for ${username} was successful!`};
        }
        else {
            revalidatePath("/auth/login");
            return { success: true, message: `${username} is now logged in!`};  
        } 
    }
    catch (error) {
        return { success: false, error: {error} };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session_token');
    redirect("/");
}