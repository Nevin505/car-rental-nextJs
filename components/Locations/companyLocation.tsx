import Image from 'next/image'
import React from 'react'

import companyBranchStyles from './companyLocations.module.css';
const companyBranches=[
    {
        location: "Dubai",
        icon: "./icons/Red-Location.svg",
        altText: "Location-Icon"
      },
    {
      location: "Sharjah",
      icon: "./icons/Red-Location.svg",
      altText: "Location-Icon"
    },
    {
      location: "Fujairah",
      icon: "./icons/Red-Location.svg",
      altText: "Location-Icon"
    },
    {
      location: "Abu Dhabi",
      icon: "./icons/Red-Location.svg",
      altText: "Location-Icon"
    },
    {
      location: "Ras Al Khaimah",
      icon: "./icons/Red-Location.svg",
      altText: "Location-Icon",
      border: "none"
    }
  ]
  

const companyLocation = () => {
  return (
    <section  className={companyBranchStyles.branchLocationContanierNew}>
      <h2>Locations</h2>
      <div className={companyBranchStyles.branchList }>
        {companyBranches.map(companyBranch=>{

         return <div key={companyBranch.location} className={companyBranchStyles.branchItem}><Image src={companyBranch.icon} alt="Location-Icon" height={28} width={24}/><span>{companyBranch.location}</span></div>
        })}
          
      </div>
    </section>
  )
}

export default companyLocation
