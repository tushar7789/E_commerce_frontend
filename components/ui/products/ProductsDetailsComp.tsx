import React from 'react'
import AddToCartComp from '@/components/ui/products/AddToCartComp'


function ProductsDetailsComp() {

    return (
        <div className='w-140 h-120'>
            <div className='w-full h-20 flex justify-start items-center text-[20px]'>
                Name of the product!!!
            </div>
            <div className='w-full h-80 flex justify-start items-center bg-purple-400'>
                Other details
            </div>
            <div className='w-full h-20 flex justify-end items-center'>
                <AddToCartComp />
                <button className='h-10 w-35 mr-5 flex justify-center items-center border-0 rounded-[5px] bg-amber-300 cursor-pointer hover:bg-amber-500'>
                    Buy Now
                </button>
            </div>
        </div >
    )
}

export default ProductsDetailsComp
