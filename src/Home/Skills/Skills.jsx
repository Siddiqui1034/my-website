"use client"
import React from 'react'
import styles from './Skills.module.css'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className={`${styles.skillContainer}`}>
      <div className={styles.skillItems}>
        <div>
          <Image className={styles.imgDiv} src="/Images/html.png" alt="" width='150' height='150' />
        </div>
        <div>
          <Image src="/Images/css.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/Images/express.png" alt="" width='150' height='150' />
        </div>
        <div>       
          <Image src="/Images/bootstrap.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/Images/js.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/Images/react.png" alt="" width='150' height='150' />
        </div>
        <div>        
          <Image src="/Images/node.png" alt="" width='150' height='150' />
        </div>
        <div>       
          <Image src="/Images/mongodb.png" alt="" width='150' height='150' />
        </div>
      </div>
    </div>
  )
}

export default Skills
