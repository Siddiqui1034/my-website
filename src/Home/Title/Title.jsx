import React from 'react'
import styles from './Title.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Title = () => {
  return (
    
      <div className={styles.titleContainer}>

        <div className={`titleContainerTextAnimation ${styles.titleText}`}>
          <h1>Hi, It&apos;s <span>Nausheen</span></h1>
          <h3 className={styles.textanimation}>I&apos;m a <span>Front-End Developer</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum hic inventore molestias recusandae ab repudiandae pariatur porro, neque corporis fuga magnam provident, repellat asperiores debitis.</p>
         
          <div className={`my-5 text-center ${styles.btnGroup}`}>
            <Link href='#' className={styles.btn}>Resume</Link>
            <Link href='#contact' className={styles.btn}>Contact</Link>
          </div>

        </div>

        <div className={styles.titleImage}>
          <div >
          <Image className={`titleContainerImage ${styles.imgDiv}`} width='500' height='500' alt=""
              src="/images/titleimage.png" />
          </div>
          
        </div>

      </div>

  )
}

export default Title
