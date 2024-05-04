import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img from './assets/png/HomeBaground.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Test = () => {
    return (
        <div>
            <Carousel autoPlay interval={1000} infiniteLoop showThumbs={false}>
                <div>
                    <img src={img} alt="" />
                    <p className='legend'>test</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <p className='legend'>test</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <p className='legend'>test</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Test