import React from 'react'
import styles from './Subfooter.module.css'
import Link from 'next/link'

const Subfooter = () => {
  return (
    <div className={styles.subfooterContainer}>

      <div className={styles.socialMedia}>
      <Link href="#"><i className="bi bi-linkedin"></i></Link>
      <Link href="#"><i className="bi bi-twitter"></i></Link>
      <Link href="#"><i className="bi bi-facebook"></i></Link>
      <Link href="#"><i className="bi bi-bi bi-envelope-at-fill"></i></Link>
      </div>

      <ul className='list'>
        <li>
          <Link href="#">FAQ</Link>
        </li>
        <li>
          <Link href="#">About Me</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Subfooter
