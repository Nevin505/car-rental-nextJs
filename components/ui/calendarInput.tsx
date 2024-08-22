'use client'

import Image from 'next/image'
import calendarInputStyles from './calendarInput.module.css'
import { useState } from 'react'
const calendarInput = ({icon,className,children}:{ icon?: string ,className?:string,children:string}) => {

  
   const[datetime,setDateTime]=useState<string>('');
   console.log(datetime);

   const[showDateTimeInput,setShowDateTimeInput]=useState(false);

  const showTimeHandler=()=>{
    setShowDateTimeInput(prev=>!prev);
  }   

   const handleDateTimeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
    setShowDateTimeInput(false)
  };
  return (
    <div className={calendarInputStyles.calendarContainer}>
          <button  onClick={showTimeHandler}  className={`${className} ' ' ${calendarInputStyles.buttonStyles}`} >{datetime?datetime:children}</button>
        { showDateTimeInput && <input  type="datetime-local"  className={calendarInputStyles.calendarStyles}    onChange={handleDateTimeChange}/>}
        {icon && <Image className={calendarInputStyles.startIcon} src={icon} width={10} height={10} alt='Calendar-icon'/>}
    </div>
  )
}

export default calendarInput
