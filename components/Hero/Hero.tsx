'use client'
import { useState } from "react";

import Section from "@/components/ui/section";
import CustomButton from "../ui/customButton";
import DropDown from "../ui/dropDown";
import CalendarInput from "../ui/calendarInput";
import IconButton from "../ui/iconButton";
import Seperation from "../ui/seperation";

import heroStyles from './Hero.module.css'
import Link from "next/link";

const Hero = () => {

   const[selectedButton,setSelectedButton]=useState('samePick');

   const handleButtonClick=(bookOption:string)=>{
    setSelectedButton(bookOption)
   }

  return (
       <Section className={heroStyles.bookingDownloadSection}>
        {/* Button for Bookings */}
               <div className={heroStyles.bookingTypeContainer}>

               <CustomButton className={`${heroStyles.bookingOptionButton} ${heroStyles['border-0']}`} isSelected={selectedButton==='samePick'} selectedButton={selectedButton} onClick={()=>handleButtonClick('samePick')}>Same as Pick-Up</CustomButton>

               <CustomButton   className={`${heroStyles.bookingOptionButton} ${heroStyles['border-0']}`} isSelected={selectedButton==='differentPick'} onClick={()=>handleButtonClick('differentPick')}>Different Drop-Off</CustomButton>

               <DropDown variantType="semi-transparent"  optionValues={[{optionLabel:"Select vehicle Type",optionValue:"default"},{optionLabel:"Seltos",optionValue:"Seltos"},{optionLabel:"Innova",optionValue:"innova"}]}/>
               </div>

                {/* Second Column */}

                <div className={heroStyles.bookingTypeContainer}>
                    {/* Drop Down Containers */}
                <DropDown className={heroStyles.whitebackground} icon="/icons/DropDownLocation.svg" optionValues={[{optionLabel:"Al Quoz",optionValue:"Al Quoz"}]}/>

                {/* Calendars */}
                     <CalendarInput icon="/icons/calender.svg" >Pick-Up Date & Time </CalendarInput>
                     <CalendarInput icon="/icons/calender.svg" >Drop Off Date & Time</CalendarInput>

                     {/* Search Button */}

                      <IconButton iconButton="/icons/search-glass.svg"/>


                        <Seperation/>

                        <CustomButton  className={`${heroStyles.bookingOptionButton} ${heroStyles.buttonPadding}  border-white`}>Quick Book</CustomButton>
                </div>
                {/* Third Column  */}

                <div className={heroStyles['app-download-section']}>
                <p>Download our App for easy accessibility anytime, anywhere!</p>
                <div className={heroStyles['store-links-container']}>
            <Link className={heroStyles["appStore"]} href="https://play.google.com/store/games?hl=en&pli=1" target="_blank"></Link>
            <Link className={heroStyles["playStore"]} href="https://play.google.com/store/games?hl=en&pli=1" target="_blank"></Link>
          </div>
                </div>
            </Section> 
  )
}

export default Hero
