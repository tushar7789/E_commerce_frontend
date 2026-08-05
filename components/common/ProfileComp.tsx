'use client'

import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import ButtonComp from './button';

import ProfileImg from '@/public/static_images/profile.png'

import { logout } from '@/app/auth/actions'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Profile',
    },
    {
        key: '2',
        label: 'Settings',
        icon: <SettingOutlined />,
    },
    {
        type: 'divider',
    },
    {
        key: '3',
        label: <span onClick={async () => {
            await logout();
        }}>Logout</span>,
        icon: <LogoutOutlined />,
        danger: true,
    },
]

const ProfileComp = () => {
    return (
        <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
            <div className='h-full w-4/10'>
                <ButtonComp to={""} tailwindStyleString='h-full w-full flex justify-evenly items-center border-0 rounded-[5px] bg-white hover:bg-amber-300'>
                    <span className='h-full flex justify-center items-center'>Profile</span>
                    <Image src={ProfileImg.src} height={25} width={25} alt="" />
                </ButtonComp>
            </div>
        </Dropdown>
    );
}

export default ProfileComp;