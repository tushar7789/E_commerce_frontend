import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from "next/headers";


import LogoImage from '@/public/static_images/logo.png'
import CartImage from '@/public/static_images/cart.png'

import ButtonComp from './button';
import SearchBar from '@/components/ui/search/SearchBar';
import ProfileComp from '@/components/common/ProfileComp';



function NavigationBar() {
    return (
        <div className="h-14 w-full px-6 flex items-center bg-gray-700">
            <LogoComp />
            <SearchComp />
            <OptionsComp />
        </div>
    )
}

function LogoComp() {
    return (
        <Link className='h-full w-2/12 flex items-center justify-start' href={"/"}>
            <Image src={LogoImage.src} height={45} width={45} alt="" />
        </Link>
    );
}

function SearchComp() {
    return (
        <div className='h-full w-8/12 flex justify-center items-center'>
            <SearchBar />
        </div>
    );
}

async function OptionsComp() {
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has('session_token');

    return (
        <div className='h-full w-3/12 py-2.5 flex justify-around items-center'>
            <MoreComp />
            <CartComp />
            {
                isLoggedIn ? <ProfileComp /> : <LoginComp />
            }
        </div>
    );
}

const MoreComp = () => {
    return (
        <div className='h-full w-4/12'>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-full flex justify-center items-center border-0 rounded-[5px] bg-white hover:bg-amber-300'>
                <span className='h-full flex justify-center items-center'>More</span>
            </ButtonComp>
        </div>
    );
}

const LoginComp = () => {
    return (
        <div className='h-full w-4/10'>
            <ButtonComp to={"/auth/login"} tailwindStyleString='h-full w-full flex justify-center items-center border-0 rounded-[5px] bg-white hover:bg-amber-300'>
                <span className='h-full flex justify-center items-center'>Login</span>
            </ButtonComp>
        </div>
    );
}


const CartComp = () => {
    return (
        <div className='h-full w-2/12'>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-full flex justify-center items-center border-0 rounded-[5px] bg-white'>
                <Image src={CartImage.src} height={20} width={20} alt="" />
            </ButtonComp>
        </div>
    );
}



export default NavigationBar;
