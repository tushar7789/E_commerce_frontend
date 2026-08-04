"use server";

import { userSchema, UserFormValues } from "./schema";

export async function createUser(data: UserFormValues) {
  // 1. Re-validate data on the server
  const result = userSchema.safeParse(data);
  console.log("hehe data : ", result);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    const username = result.data.username;
    const password = result.data.password;

  // Securely call your external or internal API endpoint
    const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${process.env.API_SECRET_TOKEN}`
        },
        body: JSON.stringify({ "username" : username, "password": password }),
    });

    const resData = await response.json();
    
    if (!response.ok) {
        throw new Error('Failed to create product via API');
    }

    return { success: true, message: `User ${resData.username} sign up successfull!`, data: resData };
  } catch (error) {
    return { success: false, error: {error} };
  }
}