import React from 'react'

function NavigationBar() {
    return (
        <div className="h-12 w-full flex items-center">
            <LogoComp />
            <SearchComp />
            <ProfileComp />
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
        <div className='h-full w-9/12 bg-red-500'>
            SearchBar
        </div>
    );
}

function ProfileComp() {
    return (
        <div className='h-full w-3/12 bg-yellow-500'>
            Profile
        </div>
    );
}


export default NavigationBar;
