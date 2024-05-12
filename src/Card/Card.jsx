import React from 'react'

import styles from './Card.module.css'

const Card = ({name}) => {
  return (
    <div className={styles.card}>
      {name}
    </div>
  )
}

export default Card
