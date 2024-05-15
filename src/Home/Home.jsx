import React from 'react'
import styles from './Home.module.css'

import Card from '@/Card/Card'
import Services from './Services/Services'
import Title from './Title'

export const Home = () => {
  return (
    <div>
      <Title />
      

      {/* 2 div with players */}
     <div className={`mx-4${styles.playersDiv}`}>  
     <div>1</div>
     <div >
      <Card name="Sachin"/>
      <Card name="Dhoni"/>
      <Card name="Kohli"/>
      <Card name="Kohli"/>
     </div>
     <div>3</div>
     </div>

     <div>
      <h1>Services</h1>
      <Services />
     </div>
      <div style={{height: "300px", backgroundColor: "yellow"}}></div>
    </div> 
  )
}


 