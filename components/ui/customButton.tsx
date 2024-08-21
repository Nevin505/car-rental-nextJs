import customButtonStyles from './customButton.module.css';

const customButton = ({children,className,onClick,isSelected,type='button'}:any) => {

  let customCssStyles=`${className} ${customButtonStyles.regular}`;

  // To highlight if the button is selected
  if(isSelected){
    customCssStyles+=` ${customButtonStyles.clicked}` 
  }
  return (
    <button className={`${customCssStyles}`} type={type}  onClick={onClick}>
      {children}  
    </button>
  )
}

export default customButton
