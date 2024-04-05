import React from 'react'
import Style from './HomeCarousal.module.css'
import IconSvg from '../../assets/svg/IconSVG.svg'
import HeartSVG from '../../assets/svg/HeartSVG.svg'
import ZoomSVG from '../../assets/svg/ZoomSVG.svg'


function HomeHeader() {
  return (
    <div className= {Style.headerRow}>
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


  </div>
  )
}

export default HomeHeader