'use client'

import Image from 'next/image'
import calendarInputStyles from './calendarInput.module.css'
const calendarInput = ({icon,className}:{ icon?: string ,className?:string}) => {

  


  return (
    <div className={calendarInputStyles.calendarContainer}>
         <input  type="datetime-local"  className={className} />
        {icon && <Image className={calendarInputStyles.startIcon} src={icon} width={10} height={10} alt='Calendar-icon'/>}
    </div>
  )
}

export default calendarInput
