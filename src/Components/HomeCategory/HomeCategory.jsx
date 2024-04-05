import React from 'react'
import Style from './HomeCategory.module.css'
import BaptismPNG  from '../../assets/png/BaptismPNG.png'

const data = [
{ name : 'Baptism', image : BaptismPNG},
{ name : 'Holi Communal', image : BaptismPNG},
{ name : 'Boys', image : BaptismPNG},
{ name : 'Girls', image : BaptismPNG},]

function HomeCategory() {
  return (
    <div className={Style.categoryContainer}>
        <p className={Style.categoryText}>Categories</p>
        <div className={Style.categorySubContainer}>

            {
                data.map((val) => {
                    return(
                        <div className={Style.cardContainer}>
              <img src={val.image} alt=""  style={{width:'80px', height:'80px'}}/>
              <p className={Style.categoryName}>
                {val.name}
              </p>

            </div>  
                    )
                })

            }

        </div>
    </div>
  )
}

export default HomeCategory