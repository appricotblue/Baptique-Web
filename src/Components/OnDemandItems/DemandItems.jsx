import React from 'react'
import Style from './DemandItems.module.css'
import BaptismPNG1  from '../../assets/png/BaptismPNG1.png'
import BaptismPNG2  from '../../assets/png/BaptismPNG2.png'





const data = [
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG1},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG2},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG1},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG2},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG1},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG2},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG1},
    { name : 'Princess Bow Dress',rate: '₹1200', image : BaptismPNG2},]


function DemandItems() {
  return (
    <div className={Style.baptismContainer}>
        <div className={Style.row}>
        <p className={Style.categoryText}>Accessories on Demand</p>
        <p className={Style.viewAllText}>View All</p>
        </div>
        <div className={Style.categorySubContainer}>

            {
                data.map((val) => {
                    return(
                        <div className={Style.cardContainer}>
              <img src={val.image} alt=""  style={{width:'247px', height:'249px'}}/>
              <p className={Style.categoryName}>
                {val.name}
              </p>
              <p className={Style.categoryRate}>
                {val.rate}
              </p>

            </div>  
                    )
                })

            }

        </div>

    </div>
  )
}

export default DemandItems