'use client'

import Image from 'next/image'
import calendarInputStyles from './calendarInput.module.css'
const calendarInput = ({icon}:{ icon?: string }) => {
  return (
    <div className={calendarInputStyles.calendarContainer}>
         <input  type="datetime-local" />
        {icon && <Image className={calendarInputStyles.startIcon} src={icon} width={10} height={10} alt='Calendar-icon'/>}
    </div>
  )
}

export default calendarInput
