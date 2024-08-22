'use client'
import carouselStyles from './carousel.module.css'
import CustomButton from '../ui/customButton'
import { useEffect, useState } from 'react'

const backGroundImages=["/images/2018-Mitsubishi-backgroungImage.png","/images/2018-Mitsubishi-backgroungImage.png","/images/2018-Mitsubishi-backgroungImage.png"]

const indicators=[0,1,2];

const carousel = () => {
   const[backGroundImageIndex,setBackGroundImageIndex]= useState(0);

   useEffect(()=>{
    const interval=setInterval(() => {
      setBackGroundImageIndex((prevIndex)=>{
        const nextIndex= prevIndex+1%backGroundImages.length
        return nextIndex===backGroundImages.length?0:nextIndex
      })
    }, 8000);

    return ()=>{clearInterval(interval)}
   },[])

  return (
    <div className={carouselStyles.bannerWrapper} style={{ backgroundImage: `url(${backGroundImages[backGroundImageIndex]})` }}>
                      <div className={carouselStyles.offerContentWrapper}>
                          <div className={carouselStyles.offerContent}>
                          Recieve guarnteed
                          <CustomButton className={`border-0 ${carouselStyles['bannerButton']}`}>GIFT VOUCHER</CustomButton>
                          </div>
                          <div>
                          on a monthly hire or lease
                          </div>
        </div>
        {/* Visual Indicator for the Carousel */}
        <div className={carouselStyles["carousel-navigator"]}>
            {indicators.map(indicator=>{
              return  <div   key={indicator} className={`${carouselStyles["circle-1"]} ${backGroundImageIndex==indicator?`${carouselStyles.active}`:''}`} ></div>
            })}
                   </div>
    </div>
  )
}

export default carousel
