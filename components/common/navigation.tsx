import React from 'react'

function NavigationBar() {
    return (
        <div className="h-15 w-full flex items-center">

            <div className='h-full w-6/12 bg-blue-500'>
                Search Bar
            </div>
            <div className='h-full w-4/12 bg-red-500'>
                Profile
            </div>
        </div>
    )
}

function LogoComp() {
    return (
        <div className='h-full w-2/12 bg-purple-500'>
            Logo
        </div>
    );
}

function SearchComp() {
    return (
        <div className='h-full w-2/12 bg-purple-500'>
            Logo
        </div>
    );
}

function ProfileComp() {
    return (
        <div className='h-full w-2/12 bg-purple-500'>
            Logo
        </div>
    );
}


export default NavigationBar;
