'use client'

import Image from 'next/image';
import { useState } from 'react'

import CheckMark from '@/public/static_images/check_mark.png'

const styleString = 'h-10 w-35 mr-5 flex justify-center items-center border-0 rounded-[5px] bg-amber-300 cursor-pointer ';

function AddToCartComp() {
    const [isAdded, setIsAdded] = useState<boolean>(false);

    function handleAddToCart() {
        setIsAdded(s => !s);
    }

    return (
        <button
            className={styleString + `${!isAdded ? 'hover:bg-amber-500' : ''}`}
            onClick={handleAddToCart}
        >
            {
                !isAdded ?
                    "Add to Cart" :
                    <>
                        <span className='mr-2'>Added</span>
                        <Image src={CheckMark.src} height={20} width={20} alt={""} />
                    </>
            }
        </button>
    )
}

export default AddToCartComp
