'use client'
import Section from "@/components/ui/section";
import heroStyles from './Hero.module.css'
import CustomButton from "./ui/customButton";
import { useState } from "react";
const Hero = () => {

   const[selectedButton,setSelectedButton]=useState('Same as Pick-Up');

   const handleButtonClick=(bookOption:string)=>{
    setSelectedButton(bookOption)
   }

  return (
       <Section className={heroStyles.bookingDownloadSection}>
               <div className={heroStyles.bookingTypeContainer}>
               <CustomButton isSelected={selectedButton==='samePick'} selectedButton={selectedButton} onClick={()=>handleButtonClick('samePick')}>Same as Pick-Up</CustomButton>
               <CustomButton isSelected={selectedButton==='differentPick'} onClick={()=>handleButtonClick('differentPick')}>Different Drop-Off</CustomButton>
               </div>

            </Section> 
  )
}

export default Hero
