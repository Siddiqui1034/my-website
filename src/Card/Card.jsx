"use client"
import React from 'react'
import styles from './Card.module.css'

const Card = ({name, width, height, content, footer}) => {

  
  return (
  
    <div className={`${styles.cardBackground}`} style={{width, height}}>
    <div className={`${styles.header}` }>
    {name}
    </div>
    <div className={styles.body}>
    {content}
    </div>
    <div className={styles.footer}>
      {footer}
    </div>
  </div>


  )
}

export default Card
