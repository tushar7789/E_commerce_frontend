import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/static_images/logo.png'
// import ProfileImage from '@/public/static_images/profile.png'
import CartImage from '@/public/static_images/cart.png'

import ButtonComp from './button';
import SearchBar from '../ui/search/SearchBar';

function NavigationBar() {
    return (
        <div className="h-14 w-full px-6 flex items-center bg-gray-700">
            <LogoComp />
            <SearchComp />
            <ProfileComp />
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

function ProfileComp() {
    return (
        <div className='h-full w-3/12 py-[10px] flex justify-around items-center'>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-4/12 flex justify-center items-center border-0 rounded-[5px] bg-white hover:bg-amber-300'>
                <span className='h-full flex justify-center items-center'>Login</span>
            </ButtonComp>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-4/10 flex justify-center items-center border-0 rounded-[5px] bg-white hover:bg-amber-300'>
                <span className='h-full flex justify-center items-center'>More</span>
            </ButtonComp>
            <ButtonComp to={"/"} tailwindStyleString='h-full w-2/12 flex justify-center items-center border-0 rounded-[5px] bg-white'>
                <Image src={CartImage.src} height={20} width={20} alt="" />
            </ButtonComp>
        </div>
    );
}


export default NavigationBar;
