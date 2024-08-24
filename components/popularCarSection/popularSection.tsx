import popularSectionStyles from './popularSection.module.css';
import Card from '../ui/card';
import CartItem from './cartItem'

const CARD_ITEMS=[{id:1,imageSrc:"/images/scoll-bar-image1.png",title:"Mitsubishi Eclipse",about:"Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",seating:6,vehicleGearType:"Automatic",Doors:5,AirConditioner:'AC',price:2700},{id:2,imageSrc:"/images/Jac-7-Car.svg",title:"Jac J7",about:"S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",seating:6,vehicleGearType:"Automatic",Doors:5,AirConditioner:'AC',price:2700},{id:3,imageSrc:"/images/scoll-bar-image1.png",title:"Mitsubishi Eclipse",about:"Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",seating:6,vehicleGearType:"Automatic",Doors:5,AirConditioner:'AC',price:2700},{id:4,imageSrc:"/images/Jac-7-Car.svg",title:"Jac J7",about:"S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",seating:6,vehicleGearType:"Automatic",Doors:5,AirConditioner:'AC',price:2700}]






const popularSection = () => {
  return (
    <div className={popularSectionStyles.popularCarSection}>
        <h2>Most Popular Cars</h2>
        <div className={popularSectionStyles.popularCarScrollContainer}>
           {CARD_ITEMS.map(cardItems=>{
               return <CartItem  key={cardItems.id} cartItem={cardItems}/>

           })}  
        </div>
    </div>
  )
}

export default popularSection;