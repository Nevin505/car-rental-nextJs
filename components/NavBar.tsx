'use client'
import Image from 'next/image';
import Link from 'next/link';
import navBarStyles from './NavBar.module.css';
import { useState } from 'react';

// Image Links
const socialMediaIcons:string[]=["icons/facebook(2).svg","icons/instagram(2).svg","icons/x(2).svg","icons/LinkedIn(2).svg"]

type NavLink={navItem:string,href:string}

const navLinks:NavLink[]=[{navItem:"About",href:'#'},{navItem:"Offers",href:'#'},{navItem:"Corporate",href:'#'},{navItem:"Personal",href:'#'},{navItem:"Locations",href:'#'},{navItem:"Contact Us",href:'#'}]

const NavBar = () => {
   const[openNavigation,setOpenNavigation]= useState(false);
    
   const setOpenNavigationHandler=()=>{
    setOpenNavigation(true);
   }

   const closeNavigationHandler=()=>{
    console.log("Closed");
    
    setOpenNavigation(false);
   }
//    toggleDispaly
    return (
    <header className={navBarStyles.headerStyles}>
        {/* The Social Media Icons */}
        <div className={navBarStyles.socialMediaIconConatiner}>
            {socialMediaIcons.map((socialMediaIcon:string, index: number)=>{
                 return <Link href='#' key={index}><Image className={navBarStyles.socialMediaIcons} src={socialMediaIcon} alt='facebook Icon' width={14} height={14}/></Link>
            })}           
        </div>

        {/*  */}
         <nav className={navBarStyles.mainNavBar}>
              <div className={navBarStyles.BrandlogoHamburger}>
                {/* The Company Branding */}
              <Image src='images/Branding.svg' className={navBarStyles.branding} width={354} height={52.6}  alt='Company Branding'/>
               {/* HamBurger Menu */}
              <Image src='icons/charm_menu-hamburger.svg' width={24} height={24}  alt='HamBurger Menu'  id={navBarStyles.hamburgerMenu} onClick={setOpenNavigationHandler}/>
                {/* Close Button */}
               { openNavigation && <Image src='/icons/Close-Icon.svg' id={navBarStyles.closeButton} width={24} height={24} alt='Close Menu Button' onClick={closeNavigationHandler}/>}
              </div>
                {/*tO  Display the the nav Menu Items  Menu Bar */}
                <div className={`${navBarStyles.navBarLinks} ${openNavigation?navBarStyles.toggleDisplay:undefined}`}>
                {navLinks.map((navLink:NavLink)=>{
                return <Link className={navBarStyles.linkStyles} key={navLink.navItem} href={navLink.href}>{navLink.navItem}</Link>
            })}

              <div>
                 <Image src="icons/Bell.svg" alt="Bell-Icon" width={24} height={24}/>
                 <Image src="images/Person.svg" alt="Login-Button" width={114} height={29}/>
              </div>

              <Image  src="images/LoginButton.svg" alt="Login-Button" className={navBarStyles.loginButton} width={114} height={29}/>
                
              </div>
        </nav>
            <p className={navBarStyles.serviceInfo}>Sunday Pick Up/Drop-Off <span className ={navBarStyles.serviceDetails}
            >only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All
            Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for
            New Offers</span></p>
    </header>
  )
}

export default NavBar
