import React from 'react'
import styles from './Home.module.css'
import Image from 'next/image'
import Card from '@/Card/Card'

export const Home = () => {
  return (
    <div>
      <h1 className='text-center mt-4 mb-4'>Welcome...</h1>
      
      <div className={`px-5 ${styles.homeContainer}`}>
      
      <div className={` homeContainerText ${styles.homeText}`}>
        <div>the Power of</div> 
        <div>Technology for Your Business</div>
      </div>
      <div>
       <Image className='homeContainerImage' width={300} height={350} alt="" src="https://png.pngtree.com/png-clipart/20220515/original/pngtree-bussines-woman-with-suit-and-laptop-okay-gesture-png-image_7715954.png" />
      </div>
      </div> 

      {/* 2 div with players */}
     <div className={`${styles.playersDiv} my-5 `}>  
     <div>1</div>
     <div >
      <Card name="Sachin"/>
      <Card name="Dhoni"/>
      <Card name="Kohli"/>
      <Card name="Kohli"/>
     </div>
     <div>3</div>
     </div>

    </div> 
  )
}


 