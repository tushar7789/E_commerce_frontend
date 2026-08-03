import React from 'react'
import CategoryCard from "@/components/ui/home/CategoryCard"
import ImageDir from '@/utils/Images/Home';

const Categories = () => {
    return (
        <>
            {Array.from({ length: 2 }, (_, index) => (
                <CategoriesSection key={index} />
            ))}
        </>
    );
}

const CategoriesSection = () => {
    return (
        <div className="h-min-50 w-full py-15 px-10  flex justify-around items-center bg-gray-100">
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
