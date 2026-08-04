import './styles.css'

import React from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';

import HomeDecorBanner from '@/public/static_images/decor_sale_banner.png';
import ShoesSaleBanner from '@/public/static_images/shoes_sale_banner.png';
import IndependenceSaleBanner from '@/public/static_images/ind_sale_banner.png';
import ElectronicsSaleBanner from '@/public/static_images/electronics_sale_banner.png';


const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: 'white',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#87847b',
    fontSize: '100px',
    fontWeight: 'bolder'
};


const AdBanner: React.FC = () => {
    return (
        <Carousel className='px-10 my-6' autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
            <div style={{ backgroundColor: 'red' }}>
                <h3 style={contentStyle}>
                    <Image src={ElectronicsSaleBanner.src} width={1180} height={700} alt='' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <Image src={HomeDecorBanner.src} width={1180} height={700} alt='' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <Image src={ShoesSaleBanner.src} width={1180} height={700} alt='' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <Image src={IndependenceSaleBanner.src} width={1180} height={700} alt='' />
                </h3>
            </div>
        </Carousel>
    );
}

export default AdBanner;
