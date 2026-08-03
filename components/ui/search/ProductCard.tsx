import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import 'next/image';
import ChargerImage from "@/public/static_images/charger.jpg"

const { Meta } = Card;

const ProductCard: React.FC = () => {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src={ChargerImage.src}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=8" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    );
}

export default ProductCard;