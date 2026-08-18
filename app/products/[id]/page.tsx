'use client'

import { usePathname } from 'next/navigation';

import ProductCloseUpComp from '@/components/ui/products/ProductCloseUpComp'
import ProductsDetailsComp from '@/components/ui/products/ProductsDetailsComp'


function ProductsPage() {
    const pathname = usePathname();
    const index = pathname.split("/")[2];

    return (
        <div className='w-full h-140 flex justify-center items-center'>
            <ProductCloseUpComp id={parseInt(index)} />
            <ProductsDetailsComp />
        </div>
    );
}

export default ProductsPage;