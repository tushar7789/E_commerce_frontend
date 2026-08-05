"use server";

import { cookies } from "next/headers";
import { userSchema, UserFormValues } from "./schema";
import { revalidatePath } from "next/cache";


export async function operateOnUser(data: UserFormValues, label: string) {
    const result = userSchema.safeParse(data);
    // console.log("hehe data : ", result);

    if (!result.success) {
        console.log("------------- failed in 1");
        return { success: false, errors: result.error.flatten().fieldErrors };
    }

    try {
        console.log("------------- entered in try");
        const username = result.data.username;
        const password = result.data.password;
        let API = "";
        let tokens = {};

        console.log("------------- failed in 2", username, " ", password);

        if(label === "SignUp")
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
            console.log("------------- failed in 3");
            throw new Error('Failed to create product via API');
        }

        const resData = await response.json();

        if(label === "SignUp")
            tokens = resData.tokens;
        else {
            tokens = resData;
            console.log("------------- failed in a4", tokens, " ", resData);
        }

        const cookieStore = await cookies();
        cookieStore.set('session_token', JSON.stringify(tokens), {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
        });

        if(label === "SignUp"){
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

// async function createUser(data: UserFormValues) {
//   // 1. Re-validate data on the server
// //   const result = userSchema.safeParse(data);
// //   console.log("hehe data : ", result);
// //   if (!result.success) {
// //     return { success: false, errors: result.error.flatten().fieldErrors };
// //   }

//   try {
//     // const username = result.data.username;
//     // const password = result.data.password;

//     // const response = await fetch('http://localhost:8080/users', {
//     //     method: 'POST',
//     //     headers: {
//     //     'Content-Type': 'application/json',
//     //     // 'Authorization': `Bearer ${process.env.API_SECRET_TOKEN}`
//     //     },
//     //     body: JSON.stringify({ "username" : username, "password": password }),
//     // });

//     // if (!response.ok) {
//     //     throw new Error('Failed to create product via API');
//     // }

//     // const resData = await response.json();
    
//     // const cookieStore = await cookies();
//     // cookieStore.set('session_token', JSON.stringify(resData.tokens), {
//     //     httpOnly: true,
//     //     // secure: process.env.NODE_ENV === 'production',
//     //     sameSite: 'lax',
//     //     path: '/',
//     // });
//     // revalidatePath("/auth/")
//     return { success: true, message: `Sign up for ${resData.user.username} was successful!`};
//   } 
//   catch (error) {
//     return { success: false, error: {error} };
//   }
// }