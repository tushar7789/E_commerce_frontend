import './styles.css'

import React from 'react'
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '450px',
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
}

export default AdBanner;
