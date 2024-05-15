import React from 'react'
import styles from './Title.module.css'
import Image from 'next/image' 

const Title = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className='text-center mb-4'>Welcome...</h1>
      
      <div className={`px-5 ${styles.titleContainer}`}>
      
      <div className={` titleContainerText ${styles.titleText}`}>
        <div>the Power of</div> 
        <div>Technology for Your Business</div>
      </div>
      <div>
       <Image className='titleContainerImage' width={400} height={450} alt="" 
       src="https://assets-global.website-files.com/6070bb98d3880405574a70fe/64c1737e59e8f72249d34194_brand-circle-image-woman-laptop.png" />
      </div>
      </div> 
    </div>
  )
}

export default Title
