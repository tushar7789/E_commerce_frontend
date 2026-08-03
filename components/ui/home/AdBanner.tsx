import React from 'react'
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '450px',
    color: 'white',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#e3e32d',
    fontSize: '100px',
    fontWeight: 'bolder'
};

function AdBanner() {
    return (
        <div className="h-100 w-full flex justify-center items-center ">
            <AdCarousel />
        </div>
    )
}

const AdCarousel: React.FC = () => (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);

export default AdCarousel;
