import { Children } from 'react';
import customButtonStyles from './customButton.module.css';

const customButton = ({children,className,onClick,isSelected,type='button'}:any) => {

  let customCssStyles=className

  if(isSelected){
    customCssStyles+=` ${customButtonStyles.clicked}` 
  }
  return (
    <button className={`${customButtonStyles.regular}  ${customCssStyles}`} type={type}  onClick={onClick}>
      {children}  
    </button>
  )
}

export default customButton
