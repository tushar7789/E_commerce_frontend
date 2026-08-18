import React from 'react'
import Image from 'next/image'

import ProductImageURL from '@/utils/Images/Products'

type ProductCloseUpCompTypes = {
    id: number;
}

function ProductCloseUpComp({ id }: ProductCloseUpCompTypes) {
    return (
        <div className='w-160 h-120 flex justify-center items-center'>
            <Image src={ProductImageURL[id - 1].url} height={550} width={450} alt={""} unoptimized />
        </div>
    )
}

export default ProductCloseUpComp
