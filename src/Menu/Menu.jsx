"use client"
import React, { useEffect, useState, useRef } from 'react'
import styles from './Menu.module.css'
import menuItems from "./configuration.json" // configuration.json export with default so we can import it by any name
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const [isMobileView, setIsMobileView] = useState(document.body.offsetWidth < 700)
  const timeroutId = useRef()
  const [left, setLeft] = useState(0)
  const [activeMenuItem, setActiveMenuItem] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const fnResize = () => {
      
      clearTimeout(timeroutId.current)
      if(typeof document !== 'undefined'){

        timeroutId.current = setTimeout(() => {
          setIsMobileView(document.body.offsetWidth < 700)
        }, 100)
      }
    }

    window.addEventListener('resize', fnResize)
    // console.log(pathname)
    console.log(activeMenuItem);
    setActiveMenuItem(pathname?.slice(1) || "home")
    
  }, [])

  const handleMobileMenuBtnClick = () => {
    setLeft(left === 0 ? -220 : 0)

    
  }
  const handleMenuItemClick = (id) => {
    setLeft(-220)
    setActiveMenuItem(id)
}

  return (
    <>
     {isMobileView && <button className={`${styles.mobilemenuBtn}`} onClick={handleMobileMenuBtnClick}>
      <i className={`bi bi-three-dots-vertical ${styles.icon}`}></i>
      </button>}
      <div style={{ left }} className={`${styles.menuContainer} ${isMobileView ? styles.mobileMenu : styles.desktopMenu} `}>
      
      {
        menuItems?.map(({item, path, id}, index, oa)=>{
          return <Link 
          className={activeMenuItem === id ? `${styles.activeMenu}` : "" }
          onClick={() => handleMenuItemClick(id)}
          href={path} key={`mi_${index}`}>{item}
          </Link>
        })
      }
    </div>
    </>
  )
}

export default Menu
