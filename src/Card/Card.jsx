import React from 'react'

import styles from './Card.module.css'

const Card = ({name}) => {
  return (
    // <div className={styles.card}>
    //   {name}
    // </div>
    <div className={styles.card}>
    <div className={`card ${styles.cardBackground}`}>
      <div className='card-header'>
      <p>{name}</p>
      </div>
    <div className='card-body text-white'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, voluptas?</p>
    </div>
    <div className='card-footer'>
      <button className='btn btn-dark text-center text-white bg-dark mt-2'>{name}</button>
    </div>
    </div>
    </div>
  )
}

export default Card
