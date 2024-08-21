'use client'
import { useRef } from 'react'
import calendarInputStyles from './calendarInput.module.css'
const calendarInput = () => {

    const calendarRef=useRef();

    const getInPutValue=()=>{
        calendarRef.current.focus();
    }

  return (
    <div>
          <input type="text"  onClick={getInPutValue}/>
         <input  ref={calendarRef} type="datetime-local" className={calendarInputStyles.inputCalendar} />
    </div>
  )
}

export default calendarInput
