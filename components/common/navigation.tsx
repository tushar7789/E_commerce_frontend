import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/static_images/logo.png'
// import ProfileImage from '@/public/static_images/profile.png'
import CartImage from '@/public/static_images/cart.png'

import ButtonComp from './button';

function NavigationBar() {
    return (
        <div className="h-12 w-full px-6 flex items-center">
            <LogoComp />
            <SearchComp />
            <ProfileComp />
        </div>
    )
}

function LogoComp() {
    return (
        <div className='h-full w-2/12'>
            <Link href={"/"}>
                <Image src={LogoImage.src} height={45} width={45} alt="" />
            </Link>
        </div>
    );
}

function SearchComp() {
    return (
        <div className='h-full w-8/12 flex justify-center items-center bg-red-500'>
            SearchBar
        </div>
    );
}

function ProfileComp() {
    return (
        <div className='h-full w-3/12 flex items-end'>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-3/8 flex justify-center items-center bg-amber-700'>
                <span className='h-full pr-3 flex justify-center items-center'>Login</span>
            </ButtonComp>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-3/8 flex justify-center items-center bg-amber-700'>
                <span className='h-full pr-3 flex justify-center items-center'>More</span>
            </ButtonComp>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-2/8 flex justify-center items-center bg-amber-700'>
                <Image src={CartImage.src} height={20} width={20} alt="" />
            </ButtonComp>
        </div>
    );
}


export default NavigationBar;
