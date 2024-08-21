'use client'
import carouselStyles from './carousel.module.css'
import CustomButton from '../ui/customButton'
import { useEffect, useState } from 'react'

const backGroundImages=["../../public/images/2018-Mitsubishi-backgroungImage.png","../../public/images/2018-Mitsubishi-backgroungImage.png","../../public/images/2018-Mitsubishi-backgroungImage.png"]
const carousel = () => {
   const[backGroundImageIndex,setBackGroundImageIndex]= useState(0);

    setInterval(() => {
        
    }, 4000);
  return (
    <div className={carouselStyles['banner-container']}>
       <div className={carouselStyles["offer-details-container"]}>
                      <div>
                          <div>
                          Recieve guarnteed
                          <CustomButton className={`border-0 ${carouselStyles['banner-container-button']}`}>GIFT VOUCHER</CustomButton>
                          </div>
                          <div>
                          on a monthly hire or lease
                          </div>
                      </div>
                  
        </div>
        <div className={carouselStyles["carousel-navigator"]}>
                    <div className={carouselStyles["circle-1"]}></div>
                    <div className={carouselStyles["circle-1"]}></div>
                    <div className={carouselStyles["circle-1"]}></div>              
                   </div>
    </div>
  )
}

export default carousel
