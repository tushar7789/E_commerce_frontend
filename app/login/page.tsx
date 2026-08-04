'use client'

import { useForm } from 'react-hook-form';

type A = {
    children: React.ReactNode
}

const inpStyle = 'h-[45px] w-[100px] bg-white';

const divStyle = 'w-[500px] h-[90px] flex justify-start items-center';

const msgDivStyle = 'w-[500px] h-[25px] flex justify-end'

const submitButStyle = 'w-[100px] h-[40px] relative left-[200px] flex justify-center items-center text-[20px] bg-white cursor-pointer';


const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit((data) => { console.log(data) })}
            className='w-80 h-100 mx-auto flex flex-col justify-center items-center bg-red-500'
        >
            <div className={divStyle}>
                <InputAttributeComp>Full Name</InputAttributeComp>
                <input type="text" {...register('fullname', { required: true })} className={inpStyle} />
            </div>
            <div className={msgDivStyle}>
                &nbsp;
                {errors.fullname && <ErrorMessageComp>Full Name is Required</ErrorMessageComp>}
            </div>
            <div className={divStyle}>
                <InputAttributeComp>Password</InputAttributeComp>
                <input type="text" {...register('password', { required: true })} className={inpStyle} />
            </div>
            <div className={msgDivStyle}>
                &nbsp;
                {errors.password && <ErrorMessageComp>Password is Required</ErrorMessageComp>}
            </div>
            <div className={divStyle}>
                <button type="submit" className={submitButStyle}>Login</button>
            </div>
        </form >
    );
}

const InputAttributeComp = ({ children }: A) => {
    return (
        <span
            className='
                text-[white]
                text-[25px]    
        '>
            {children}
        </span>
    )
}

const ErrorMessageComp = ({ children }: A) => {
    return (
        <span className='
                h-[20px]
                w-[170px]
                text-[14px]
                flex
                justify-start
                items-center
                pl-[5px]
                text-red-500
                bg-red-300
        '>
            {children}
        </span>
    )
}


export default Page;