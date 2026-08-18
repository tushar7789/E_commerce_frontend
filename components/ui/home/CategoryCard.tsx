'use client'

import React from 'react';
import { Card } from 'antd';
import { useRouter } from 'next/navigation'

type CategoryCardInterface = {
    src: string;
    price: string;
    index: number;
    productVisible: number;
    id: number;
}

const CategoryCard = (prop: CategoryCardInterface) => {
    const router = useRouter();

    return (
        <div className='h-full w-3/12 mx-5 transition-transform duration-300' style={{ transform: `translateX(-${(prop.index * 450) / prop.productVisible}%)` }}>
            <Card
                hoverable
                variant="borderless"
                style={{
                    width: 260,
                    height: 260,
                }}
                cover={
                    <img
                        draggable={false}
                        alt="example"
                        src={prop.src}
                        style={{
                            height: 200,
                            width: 260
                        }}
                    />
                }
                onClick={() => { router.push(`/products/${prop.id}`) }}
            >
                {`Rs. ${prop.price}`}
            </Card>
        </div>
    );
}

export default CategoryCard;