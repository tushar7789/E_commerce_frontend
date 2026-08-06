import React from 'react';
import { Card } from 'antd';

interface CategoryCardInterface {
    src: string;
    price: string;
}

const CategoryCard = (prop: CategoryCardInterface) => {
    return (
        <div className='h-full w-3/12 mx-5'>
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
            >
                {`Rs. ${prop.price}`}
            </Card>
        </div>
    );
}

export default CategoryCard;