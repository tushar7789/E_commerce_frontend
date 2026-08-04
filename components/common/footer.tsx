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
        <div className='h-full w-full px-10 py-20 flex flex-col justify-start items-start text-white'>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>X</div>
        </div>
    );
}

function RightFooterComp() {
    return (
        <div className='h-full w-full px-10 py-20 flex flex-col justify-start items-start text-white'>
            <div className=''>
                Facebook
            </div>
            <div>
                Instagram
            </div>
            <div>
                X
            </div>
        </div>
    );
}

export default Footer
