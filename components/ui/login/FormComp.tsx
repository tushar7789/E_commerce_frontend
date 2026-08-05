'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { operateOnUser } from "@/app/auth/actions";
import { userSchema, UserFormValues } from "@/app/auth/schema";
import { useTransition } from 'react';
import { useRouter } from 'next/navigation'


interface A {
    children: React.ReactNode;
    label?: string;
}

export interface FormCompInterface {
    label: string
}


const inpStyle = 'h-8 w-80 px-3 rounded-[4px] bg-white border-b border-blue-600 focus:outline-0';
const divStyle = 'h-20 flex flex-col justify-center items-start';
const submitButStyle = 'w-25 h-10 flex justify-center items-center rounded-[4px] text-white bg-blue-600 cursor-pointer';


const FormComp = (prop: FormCompInterface) => {
    const route = useRouter();
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<UserFormValues>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: UserFormValues) => {
        // Wrap the Server Action in startTransition to manage loading states
        startTransition(async () => {
            const response = await operateOnUser(data, prop.label);

            if (!response.success) {
                // Map server-side validation errors back into React Hook Form
                if (response.errors) {
                    Object.entries(response.errors).forEach(([field, messages]) => {
                        setError(field as keyof UserFormValues, {
                            type: "server",
                            message: messages?.[0],
                        });
                    });
                } else {
                    alert(response.message || "An unexpected error occurred.");
                }
                reset();
                return;
            }

            route.push("/");
            alert(response.message);
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-80 h-80 pt-5 mx-auto flex flex-col justify-start items-center'
        >
            <div className={divStyle}>
                <InputAttributeComp label='Username'>
                    {errors.username && <ErrorMessageComp>(Username is Required)</ErrorMessageComp>}
                </InputAttributeComp>
                <input type="text" {...register('username', { required: true })} className={inpStyle} />
            </div>
            <div className={divStyle}>
                <InputAttributeComp label='Password'>
                    {errors.password && <ErrorMessageComp>(Password is Required)</ErrorMessageComp>}
                </InputAttributeComp>
                <input type="text" {...register('password', { required: true })} className={inpStyle} />
            </div>
            <div className={divStyle + " mt-6"}>
                <button type="submit" disabled={isPending} className={submitButStyle}>
                    {!isPending ?
                        prop.label :
                        prop.label === "login" ?
                            "Logging In" :
                            "Signing Up"
                    }
                </button>
            </div>
        </form >
    );
}

const InputAttributeComp = ({ children, label }: A) => {
    return (
        <span className='mb-1 flex'>
            <span className='text-red-600'>*&nbsp;</span>
            {
                label ? <span className='h-5 flex justify-center items-center text-[16px]'>
                    {label}
                </span>
                    : null
            }
            {children}
        </span>
    )
}

const ErrorMessageComp = ({ children }: A) => {
    return (
        <span className='h-5 pl-1.25 flex justify-start items-center text-[12px] text-red-500'>
            {children}
        </span>
    )
}


export default FormComp;