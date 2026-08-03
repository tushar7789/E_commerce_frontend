import React from 'react'
import CategoryCard from "@/components/ui/home/CategoryCard"
import { ImageDir } from '@/utils/Images/Home';

const Categories = () => {
    return (
        <div className='h-min-0 w-full px-10 pb-15 bg-gray-100'>
            {Array.from({ length: 2 }, (_, index) => (
                <CategoriesSection key={index} />
            ))}
        </div>
    );
}

const CategoriesSection = () => {
    return (
        <div className="h-min-50 w-full pt-15 flex justify-around items-center">
            {Array.from({ length: 4 }, (_, index) => {
                const i = index % 2;
                return (
                    <CategoryCard key={index} src={ImageDir[i].src} />
                )
            })}
        </div>
    );
}

export default Categories
