import React, { useEffect, useState } from 'react'
import HomeCarousal from '../Components/HomeCarousal/HomeCarousal'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import BaptismItems from '../Components/InBaptismItems/BaptismItems'
import DemandItems from '../Components/OnDemandItems/DemandItems'
import HomeFooter from '../Components/HomeFooter/HomeFooter'
import { getAll } from '../Service/Index'

const HomeScreen = () => {
  const [allItem, setAllItem] = useState()

  const getAllDetails = async () => {
    const response = await getAll()
    setAllItem(response.data)
    console.log(response, 'resp------>>>>>')
  }


  useEffect(() => {
    getAllDetails()
  }, [])
  return (
    <div>
      <HomeCarousal banner={allItem?.banner} />
      <HomeCategory category={allItem?.categories} />
      <BaptismItems product={allItem?.products} />
      <DemandItems demand={allItem?.demands} />
      <HomeFooter />

    </div>
  )
}

export default HomeScreen