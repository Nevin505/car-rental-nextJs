'use client'
import CustomButton from "../ui/customButton"
import mobileBookingStyles from './mobileBooking.module.css';
import DropDown from "../ui/dropDown";
import CalendarInput from "../ui/calendarInput";
import { useState } from "react";

const mobileBooking = () => {

    const[selectedButton,setIsSelected]=useState<string>('samePick');


    const handleBookingOption=(pickUptions:string)=>{
        setIsSelected(pickUptions)  
    }

  return (
    <div className={mobileBookingStyles['booking-options-container']}>
        {/* Buttons for bookings */}
        <div className={mobileBookingStyles['booking-buttons-container']}>
               <CustomButton className={`${mobileBookingStyles.buttonDesigin} ${mobileBookingStyles.redButton}`}>Book a Car</CustomButton>
               <CustomButton className={`${mobileBookingStyles.buttonDesigin} ${mobileBookingStyles.whiteButton}`}>Quick Book</CustomButton>
        </div>
        {/* To show the  different pick up Options */}
        <div className={mobileBookingStyles.bookingOptionConatiner}>
            <CustomButton  isSelected={selectedButton==='samePick'}  className={mobileBookingStyles.buttonfontSize} onClick={()=>handleBookingOption('samePick')} >Same as Pick-Up</CustomButton>

            <CustomButton isSelected={selectedButton==='differentPick'} className={mobileBookingStyles.buttonfontSize}  onClick={()=>handleBookingOption('differentPick')}>Different Drop-Off</CustomButton>

            <DropDown className={mobileBookingStyles.padding0}  optionValues={[{optionLabel:"vehicle Type",optionValue:"default"},{optionLabel:"Seltos",optionValue:"Seltos"},{optionLabel:"Innova",optionValue:"innova"}]}/>
        </div>
        {/* Options For Different Pick Up */}
        <div>
        {/* className={heroStyles.whitebackground}  */}
        {    (selectedButton !=='samePick')  &&  <DropDown icon="/icons/DropDownLocation.svg" optionValues={[{optionLabel:"Pick Up Location",optionValue:"default"}]}/>}

        <DropDown icon="/icons/DropDownLocation.svg" optionValues={[{optionLabel:"Drop Off Location",optionValue:"default"}]}/>

        <CalendarInput icon="/icons/calender.svg"/>
        <CalendarInput icon="/icons/calender.svg"/>
        
        </div>
    </div>
  )
}

export default mobileBooking
