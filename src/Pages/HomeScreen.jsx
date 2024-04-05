import React from 'react'
import HomeCarousal from '../Components/HomeCarousal/HomeCarousal'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import BaptismItems from '../Components/InBaptismItems/BaptismItems'
import DemandItems from '../Components/OnDemandItems/DemandItems'
import HomeFooter from '../Components/HomeFooter/HomeFooter'

const HomeScreen = () => {
  return (
    <div>
        <HomeCarousal/>
        <HomeCategory/>
        <BaptismItems/>
        <DemandItems/>
        <HomeFooter/>

    </div>
  )
}

export default HomeScreen