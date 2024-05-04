import React from 'react'
import Style from './HomeCategory.module.css'
import BaptismPNG from '../../assets/png/BaptismPNG.png'

const data = [
  { name: 'Baptism', image: BaptismPNG },
  { name: 'Holi Communal', image: BaptismPNG },
  { name: 'Boys', image: BaptismPNG },
  { name: 'Girls', image: BaptismPNG },]

function HomeCategory({ category }) {

  return (

    <div className={Style.categoryContainer}>
      <p className={Style.categoryText}>Categories</p>
      <div className={Style.categorySubContainer}>

        {
          category?.map((val) => {
            return (
              <div key={val.id} className={Style.cardContainer}>
                {val.image ?
                  <img src={val.image} alt="" style={{ width: '135px', height: '130px', borderRadius: '10px' }} />
                  :
                  <img src={BaptismPNG} alt="" style={{ width: '80px', height: '80px' }} />
                }
                <p className={Style.categoryName}>
                  {val.categoriesName}
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