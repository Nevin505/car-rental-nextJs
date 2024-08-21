import popularSectionStyles from './popularSection.module.css';


const CARD_ITEMS=[{id:1,imageSrc:"/images/scoll-bar-image1.png",title:"Mitsubishi Eclipse",about:"Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",seating:6,vehicleGearType:"Automatic",Doors:5,AirConditioner:'AC',price:2700}]
const popularSection = () => {
  return (
    <div className={popularSectionStyles.popularCarSection}>
        <h2>Most Popular Cars</h2>
        <div className={popularSectionStyles.popularCarScrollContainer}>

        </div>
    </div>
  )
}

export default popularSection;