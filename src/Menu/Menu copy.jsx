"use client"
import React, { useEffect, useState, useRef } from 'react'
import menuItems from "./configuration.json" // configuration.json export with default so we can import it by any name
import Link from 'next/link'
import styles from './Menu.module.css'
import { usePathname } from 'next/navigation'
const Menu = () => {
  const [isMobileView, setIsMobileView] = useState(document.body.offsetWidth < 700)
  const timeroutId = useRef()
  const [leftMenu, setleftMenu] = useState(-120)
  const [activeMenuItem, setActiveMenuItem] = useState()
  const pathname = usePathname()

  useEffect(() => {
    const fnResize = () => {
      // console.log(document.body.offsetWidth);
      clearTimeout(timeroutId.current)
      timeroutId.current = setTimeout(() => {
        // console.log(document.body.offsetWidth)
        setIsMobileView(document.body.offsetWidth < 700)
      }, 100)
    }

    window.addEventListener('resize', fnResize)
    // when menu component there then only i want this event otherwise when unmounted then i need to remove this event
    // when this component unmounted then
    // return () => { window.removeEventListener('resize', fnResize) }
    // but in our website our menu should always mounting it should not remove
    // on first time load i want to know on which menu we r so we write here in useEffect on first time load the web pafe
    // console.log(pathname); // '/contact'
    // console.log(pathname.slice(1)); // 'contact'
    setActiveMenuItem(pathname.slice(1) || "home")
  }, [])

  const displayMenu = () => {
    setleftMenu(leftMenu === 0 ? -120 : 0)
  }
  const hideMenu = (item) => {  // handleMenuItemClick = hideMenu
    // alert(item)
    setActiveMenuItem(item)
    setleftMenu(-120)
  }
  return (
    <>
      {/* check for whether mobile view or desktop */}
      {/* {isMobileView ? "Mobile" : "desktop" } */}
      {/* now conditional rendering when it is mobileview then display button on right corner */}
      {isMobileView && <button onClick={displayMenu}>Menu</button>}

      <div style={{ leftMenu }} className={`${styles.menuContainer} ${isMobileView ? styles.mobileMenu : styles.desktopMenu} `}>
        {
          menuItems?.map(({ item, path, id }, ind, oa) => {
            // return <span key={`mi_${ind}`}>{item}</span>
            // return <a href={path} key={`mi_${ind}`}>{item}</a> // anchors default behaviour is when u click entire page load here we dn't need to load entire page
            let itemnew = item.toLowerCase()
            // console.log(itemnew);
            console.log(id);
            return (
              <Link
                className={activeMenuItem === item ? styles.activeMenu : null}
                onClick={() => hideMenu(item)}
                href={path}
                key={`mi_${ind}`}>

                {item}

              </Link>
              // without refreshing page loads which is problem in anchor
            )
          })
        }
      </div>
    </>
  )
}

export default Menu
