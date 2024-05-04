import React from 'react'
import Style from './BaptismItems.module.css'
import BaptismPNG1 from '../../assets/png/BaptismPNG1.png'
import BaptismPNG2 from '../../assets/png/BaptismPNG2.png'
import { useNavigate } from 'react-router-dom'





const data = [
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG1 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG2 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG1 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG2 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG1 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG2 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG1 },
  { name: 'Princess Bow Dress', rate: '₹1200', image: BaptismPNG2 },]


function BaptismItems({ product }) {

  const navigate = useNavigate()

  return (
    <div className={Style.baptismContainer}>
      <div className={Style.row}>
        <p className={Style.categoryText}>Popular in Baptism</p>
        <p className={Style.viewAllText}>View All</p>
      </div>
      <div className={Style.categorySubContainer}>

        {
          product?.map((val) => {
            return (
              <div className={Style.cardContainer} onClick={() => navigate('/details')}>
                <img src={val.img} alt="" style={{ width: '240px', height: '243px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />
                <p className={Style.categoryName}>
                  {val.name}
                </p>
                <p className={Style.categoryRate}>
                  {val.price}
                </p>
              </div>
            )
          })

        }

      </div>

    </div>
  )
}

export default BaptismItems