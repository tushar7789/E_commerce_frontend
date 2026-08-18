import React from 'react'
import SlidingListComp from './SlidingListComp';

const Categories = () => {
    return (
        <div className='h-min-0 w-full px-8 pb-15 bg-gray-200'>
            {Array.from({ length: 4 }, (_, index) => (
                <React.Fragment key={index}>
                    <div className='h-10 px-7 mt-5 w-full relative top-5 flex items-center text-3xl font-bold'>
                        Electronics
                    </div>
                    <SlidingListComp />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Categories
