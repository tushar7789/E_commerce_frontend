import React, { ReactNode } from 'react'
import Link from 'next/link'

import { FooterLogoList } from '@/utils/Images/Home'
import Image from 'next/image'

interface FooterSectionCompInterface {
    children: ReactNode,
    tailwindStyleString?: string
}

const itemsArr = [
    "Company",
    "Jobs",
    "Press",
    "Investor Relations",
    "Mobile App - search quicker",
    "Other Services"
]

const Footer = () => {
    return (
        <div className='h-100 w-full px-15 flex justify-between items-center bg-gray-900'>
            <FooterSectionComp>
                <p className='h-20 w-full flex items-center text-[20px] font-extrabold'>
                    <i>ShopOnTheGo</i>
                </p>
                <ul className='h-80 w-full text-[14px]'>
                    {
                        itemsArr.map((ele) => {
                            return (
                                <li className='text-[14px] py-1.25' key={ele}>
                                    <Link href="/villas">{ele}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </FooterSectionComp>
            <FooterSectionComp tailwindStyleString='h-full w-4/12 text-white'>
                <p className='h-20 w-full flex items-center text-[20px] font-extrabold'>
                    <i>ShopOnTheGo</i>
                </p>
                <ul className='h-80 w-full text-[14px]'>
                    {
                        itemsArr.map((ele) => {
                            return (
                                <li className='text-[14px] py-1.25' key={ele}>
                                    <Link href="/villas">{ele}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </FooterSectionComp >
            <FooterSectionComp>
                <div className='h-25 w-full flex justify-end items-center'>
                    <FooterLogos />
                </div>
                <p className='h-[calc(15%)] w-full flex flex-col jsustify-between items-end text-[10px]'>
                    <span>Building 213, Ruddington Street, Arvolia Zone C</span>
                    <span>Gazette State, URE</span>
                    <span>Pin: 65XX09</span>
                </p>
            </FooterSectionComp >
        </div >
    )
}

const FooterSectionComp = ({ children, tailwindStyleString }: FooterSectionCompInterface) => {
    const fallbackStyleString = 'h-full w-4/12 flex flex-col text-white';
    return (
        <div className={tailwindStyleString ? tailwindStyleString : fallbackStyleString}>
            {children}
        </div>
    );
}

const FooterLogos = () => {
    return (
        <>
            {
                FooterLogoList.map((ele, ind) => {
                    return (
                        <span className='h-10 w-10 flex justify-center items-center' key={ind}>
                            <Image src={ele.src} height={25} width={25} alt="" style={{ cursor: 'pointer' }} />
                        </span>
                    )
                })
            }
        </>
    )
}

export default Footer;
