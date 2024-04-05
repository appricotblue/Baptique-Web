import React from 'react'
import Style from './HomeCarousal.module.css'
import HomeHeader from './HomeHeader'


const HomeCarousal = () => {
  return (
    <div className={Style.carousalContainer}>
      <HomeHeader/>

      {/* <div className= {Style.headerRow}>
        <div className={Style.logoContainer}>
          <img src={IconSvg} alt="" />
        </div>

        <div className={Style.textContainer}>
          <p className={Style.headerText}>Collections</p>
          <p className={Style.headerText}>About</p>
          <p className={Style.headerText}>Contact</p>
          <p className={Style.headerText}>My orders</p>


        </div>
        <div className={Style.iconContainer}>
        <img src={ZoomSVG} alt="" />

          <img src={HeartSVG} alt="" />

        </div>


      </div> */}
        <div className={Style.offerContainer}>
        <p className={Style.baptismText}>Baptism Collections</p>
        <div className={Style.line}/>
          <p className={Style.offerText}>20% OFF</p>

        </div>
        
    </div>
  )
}

export default HomeCarousal