import React, { useEffect, useState } from "react";
import Style from "./HomeCarousal.module.css";
import HomeHeader from "./HomeHeader";
import { getBanner } from "../../Service/Index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../assets/png/HomeBaground.png'


const HomeCarousal = () => {

  const [banner, setBanner] = useState('')

  const getBannerDetails = async () => {
    const response = await getBanner()
    setBanner(response)
    console.log(response, 'resp------')
  }


  useEffect(() => {
    getBannerDetails()
  }, [])

  return (
    <div className={Style.carousalContainer}>

      <HomeHeader />

      {/* <div className={Style.offerContainer}>
        <p className={Style.baptismText}>Baptism Collections</p>
        <div className={Style.line} />
        <p className={Style.offerText}>20% OFF</p>
      </div> */}

      <div>
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} stopOnHover={false}>

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
    </div>

  );
};

export default HomeCarousal;
