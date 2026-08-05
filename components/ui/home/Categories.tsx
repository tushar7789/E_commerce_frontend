import React from 'react'
import SlidingListComp from './SlidingListComp';

const Categories = () => {
    return (
        <div className='h-min-0 w-full px-10 pb-15 bg-gray-100'>
            {Array.from({ length: 2 }, (_, index) => (
                <React.Fragment key={index}>
                    <div className='h-20 px-5 mt-5 w-full flex items-center text-3xl font-bold'>
                        Electronics
                    </div>
                    <SlidingListComp times={index} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Categories
