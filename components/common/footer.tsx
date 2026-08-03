import React from 'react'

function Footer() {
    return (
        <div className='h-10 w-full flex items-center bg-gray-100'>
            <LeftFooterComp />
            <RightFooterComp />
        </div>
    )
}

function LeftFooterComp() {
    return (
        <div className='h-full w-6/12'>
            Left
        </div>
    );
}

function RightFooterComp() {
    return (
        <div className='h-full w-6/12'>
            Right
        </div>
    );
}

export default Footer
