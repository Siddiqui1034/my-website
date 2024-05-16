import React from 'react'
import styles from './Home.module.css'

import Card from '@/Card/Card'
import Services from './Services/Services'
import Title from './Title'
import Education from './Education'

export const Home = () => {
  return (
    <div>
      <Title />

      <Education />
      
      
     <div className={`${styles.playersDiv}`}>  
     <div></div>
     <div>
      <Card name="Sachin"/>
      <Card name="Dhoni"/>
      <Card name="Kohli"/>
     </div>
     <div></div>
     </div>
     <h1 className='text-center'>Services</h1>
     <div className={`${styles.playersDiv}`}>
      
      <Services />
     </div>
      <div style={{height: "300px", backgroundColor: "yellow"}}></div>
    </div> 
  )
}


 