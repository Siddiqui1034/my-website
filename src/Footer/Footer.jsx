import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  let currdate = new Date();
  let displayDate = currdate.toLocaleDateString()
  let currYear = currdate.getFullYear()
  return (
    <div>
      <footer className={styles.footer}>@copyright {displayDate} {currYear}</footer>
    </div>
  )
}

export default Footer
