'use client'

import { useForm } from 'react-hook-form';


interface A {
    children: React.ReactNode;
    label?: string;
}

export interface FormCompInterface {
    label: string
}


const inpStyle = 'h-8 w-80 px-2 rounded-[4px] bg-white focus:outline-0';

const divStyle = 'h-20 flex flex-col justify-center items-start';

const submitButStyle = 'w-30 h-10 flex justify-center items-center rounded-[4px] bg-white cursor-pointer';


const FormComp = (prop: FormCompInterface) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit((data) => { console.log(data) })}
            className='w-80 h-80 mx-auto flex flex-col justify-center items-center'
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
            <div className={divStyle}>
                <button type="submit" className={submitButStyle}>{prop.label}</button>
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