'use client'

import { useState } from 'react';
import CategoryCard from "@/components/ui/home/CategoryCard"
import ProductImageURL from "@/utils/Images/Products";

interface A {
    arrowDirection: string;
    callbackSetter?: React.Dispatch<React.SetStateAction<number>>;
    index?: number;
    maxIndex?: number;
}

const SlidingListComp = () => {
    const productVisible = 4;
    const maxIndex = ProductImageURL?.length - productVisible;
    const [index, setIndex] = useState<number>(0);

    return (
        <div className="h-65 w-full grid grid-cols-1 grid-rows-1">
            <div className="h-full w-full pl-1 pb-15 flex justify-between items-center col-start-1 row-start-1 z-10 bg-transparent">
                <Arrow arrowDirection="left" index={index} maxIndex={maxIndex} callbackSetter={setIndex} />
                <Arrow arrowDirection="right" index={index} maxIndex={maxIndex} callbackSetter={setIndex} />
            </div>
            <div className="h-full w-full flex items-center col-start-1 row-start-1 z-0 overflow-clip">
                {Array.from({ length: 4 }, (_, i) => {
                    // const i = times != undefined ? times * 4 + index : 0;
                    return (
                        <CategoryCard key={i + index} src={ProductImageURL[i + index].url} price={ProductImageURL[i + index].price} />
                    )
                })}
            </div>
        </div>
    );
}

const Arrow = ({ arrowDirection, callbackSetter, index, maxIndex }: A) => {
    const normalStyle = "h-10 w-10 flex justify-center items-center rounded-full text-2xl bg-blue-600/70 hover:cursor-pointer hover: hover:bg-blue-600";
    const disabledStyle = "h-10 w-10 bg-transparent";
    const leftDisabled = index === 0;
    const rightDisabled = index === maxIndex;
    const style = (arrowDirection === "left" && !leftDisabled) || (arrowDirection === "right" && !rightDisabled) ? normalStyle : disabledStyle;

    const handleClick = () => {
        if (callbackSetter != undefined) {
            if (arrowDirection === "left") {
                callbackSetter(s => s == 0 ? 0 : s - 1);
            } else if (arrowDirection === "right") {
                callbackSetter(s => s == maxIndex ? maxIndex : s + 1);
            }
        }
    }

    return (
        <span className={style} onClick={handleClick}>
            {
                arrowDirection === "left" ? leftDisabled ? " " : "<" : null
            }
            {
                arrowDirection === "right" ? rightDisabled ? " " : ">" : null
            }
        </span>
    )
}

export default SlidingListComp;