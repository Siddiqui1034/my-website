import React from 'react'
import styles from './Title.module.css'
import Image from 'next/image' 

const Title = () => {
  return (
    <div className={ `mainContainers ${styles.titleBackground}`}>
      <h1 className='text-center'>Welcome...</h1>
      
      <div className={styles.titleContents}>
      
      <div className={`titleContainerTextAnimation ${styles.titleText}`}>
        <div>Hi, It's <span>Nausheen</span></div> 
        <div>I'm <span>React Developer</span></div>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum hic inventore molestias recusandae ab repudiandae pariatur porro, neque corporis fuga magnam provident, repellat asperiores debitis.</div>
        <div className='my-5 text-center'>
          <button className='btn btn-dark'>Resume</button>
          <button className='btn btn-dark'>Contact</button>
        </div>
      </div>
      
      <div className={styles.titleImage}>
       <Image className='titleContainerImage' width={450} height={500} alt="" 
       src="https://assets-global.website-files.com/6070bb98d3880405574a70fe/64c1737e59e8f72249d34194_brand-circle-image-woman-laptop.png" />
      </div>

      </div> 
    </div>
  )
}

export default Title
