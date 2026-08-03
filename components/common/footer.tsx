import React from 'react'

function Footer() {
    return (
        <div className='h-80 w-full flex items-center bg-gray-700'>
            <LeftFooterComp />
            <RightFooterComp />
        </div>
    )
}

function LeftFooterComp() {
    return (
        <div className='h-full flex flex-col justify-start items-start w-6/12 p-10'>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>X</div>
        </div>
    );
}

function RightFooterComp() {
    return (
        <div className='h-full w-6/12'>
            <div className='h-full flex flex-col justify-start items-end w-6/12 p-10'>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>X</div>
            </div>
        </div>
    );
}

export default Footer
