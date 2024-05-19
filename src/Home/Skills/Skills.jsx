"use client"
import React from 'react'
import styles from './Skills.module.css'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className={`${styles.skillContainer}`}>
      <div className={styles.skillItems}>
        <div>
          <Image className={styles.imgDiv} src="/images/html.png" alt="" width='150' height='150' />
        </div>
        <div>
          <Image src="/images/css.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/images/express.png" alt="" width='150' height='150' />
        </div>
        <div>       
          <Image src="/images/bootstrap.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/images/js.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/images/react.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/images/node.png" alt="" width='150' height='150' />
        </div>
        <div>       
          <Image src="/images/mongodb.png" alt="" width='150' height='150' />
        </div>
      </div>
    </div>
  )
}

export default Skills
