import styles from "./Header.module.css"
import React from 'react'
import Link from 'next/link'
import Menu from "@/Menu"

const Header = () => {
  return ( 
    <div className={styles.header}>
      <Link href="#home" className={styles.logo}>Nausheen <span>Siddiqui</span></Link>  
      <Menu />      
    </div>      
  )
}

export default Header
