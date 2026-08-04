import React from 'react';
import { Card } from 'antd';

interface CategoryCardInterface {
    key: number;
    src: string;
}

const CategoryCard = (prop: CategoryCardInterface) => {
    return (
        <Card
            hoverable
            variant="borderless"
            style={{
                width: 260,
                height: 260
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
            Price 14,230.0
        </Card>
    );
}

export default CategoryCard;