import React from 'react'
import styles from './Title.module.css'
import Image from 'next/image' 

const Title = () => {
  return (
    <div>
      <h1 className='text-center mt-4 mb-4'>Welcome...</h1>
      
      <div className={`px-5 ${styles.titleContainer}`}>
      
      <div className={` titleContainerText ${styles.titleText}`}>
        <div>the Power of</div> 
        <div>Technology for Your Business</div>
      </div>
      <div>
       <Image className='titleContainerImage' width={300} height={350} alt="" src="https://png.pngtree.com/png-clipart/20220515/original/pngtree-bussines-woman-with-suit-and-laptop-okay-gesture-png-image_7715954.png" />
      </div>
      </div> 
    </div>
  )
}

export default Title
