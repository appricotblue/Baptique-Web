import React, { useEffect, useState } from "react";
import Style from "./HomeCarousal.module.css";
import HomeHeader from "./HomeHeader";
import { getBanner } from "../../Service/Index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../assets/png/HomeBaground.png'


const HomeCarousal = ({ banner }) => {

  const [bannerDetails, setBannerDetails] = useState([])

  useEffect(() => {
    setBannerDetails(banner)
  }, [banner])

  return (
    <div className={Style.carousalContainer}>

      {/* <HomeHeader /> */}

      {/* <div className={Style.offerContainer}>
        <p className={Style.baptismText}>Baptism Collections</p>
        <div className={Style.line} />
, background:'background: linear-gradient(0deg, rgba(217, 217, 217, 0) 0%, #F4F4F4 87.14%);'        <p className={Style.offerText}>20% OFF</p>
      </div> */}

      <div>
        <div style={{ position: 'absolute', zIndex: '999', width: '100%', }}>
          <HomeHeader />
        </div>

        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} stopOnHover={false}>

          {bannerDetails?.map((item, ind) => (
            <div key={ind}>
              <img src={item.image} />
              <p className='legend'>{item.description}</p>
            </div>
          ))}

        </Carousel>
      </div>
    </div>

  );
};

export default HomeCarousal;
