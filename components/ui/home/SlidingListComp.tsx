'use client'

import { useState } from 'react';
import CategoryCard from "@/components/ui/home/CategoryCard"
import ProductImageURL from "@/utils/Images/Products";
import Image from 'next/image';

import LeftArrow from '@/public/static_images/left-arrow.png';
import RightArrow from '@/public/static_images/right-arrow.png';

const leftArrowStyle = "inline-block h-12 w-12 relative top-35 z-10 cursor-pointer";
const rightArrowStyle = "inline-block h-12 w-12 z-10 relative top-35 cursor-pointer";

const SlidingListComp = () => {
    const productVisible = 4;
    const maxIndex = ProductImageURL?.length - productVisible;
    const [index, setIndex] = useState<number>(0);

    const handlePrev = () => {
        if (index != 0) {
            setIndex(s => s - 1);
        }
    }

    const handleNext = () => {
        if (index != maxIndex) {
            setIndex(s => s + 1);
        }
    }

    return (
        <>
            <div className='w-full flex justify-between items-center'>
                {
                    index != 0 ?
                        <Image className={leftArrowStyle} src={LeftArrow.src} height={0} width={0} alt="" onClick={handlePrev} />
                        :
                        <EmptyComp />
                }
                {
                    index != maxIndex ?
                        <Image className={rightArrowStyle} src={RightArrow.src} height={0} width={0} alt="" onClick={handleNext} />
                        :
                        <EmptyComp />
                }

            </div>
            <div className="h-full w-full flex items-center  overflow-clip">
                {ProductImageURL.map((ele) => {
                    return (
                        <CategoryCard key={ele.id} src={ele.url} price={ele.price} id={ele.id} index={index} productVisible={productVisible} />
                    )
                })}
            </div>
        </>
    );
}

const EmptyComp = () => {
    return (
        <span className='inline-block h-8 w-8'>
            &nbsp;
        </span>
    )
}

export default SlidingListComp;