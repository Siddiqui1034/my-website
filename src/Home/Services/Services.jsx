"use client"
import React, { useEffect, useState, useRef } from 'react'
import styles from './Services.module.css'
import { checkIsInViewPort } from '@/services/isInViewPort'
import Card from '@/Card'

const Services = () => {
  const divRef = useRef()
  const [isInViewPort, setisInViewPort] = useState(false)
  const intervalId = useRef()

  useEffect(()=>{  
    const handleScroll = () => {  
      clearInterval(intervalId.current);
      intervalId.current = setTimeout(() => {
        setisInViewPort( () => {
          // return console.log(checkIsInViewPort(divRef?.current)); // op true and false as expected
          return checkIsInViewPort(divRef?.current)
        })
      }, 100); 
    }
    window?.addEventListener('scroll', handleScroll)
    return () =>{
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={`${styles.services}`}>
      <div ref={divRef} className={ isInViewPort ? 'serviceAnimation' : null}  >
        <div>Accenture has undertaken major projects involving cloud migration, AI implementation, and business process optimisation.</div>
        <div>Accenture has undertaken major projects involving cloud migration, AI implementation, and business process optimisation.</div>
        <div>Accenture has undertaken major projects involving cloud migration, AI implementation, and business process optimisation.</div>
        <div>Accenture has undertaken major projects involving cloud migration, AI implementation, and business process optimisation.</div>
        <div>Accenture has undertaken major projects involving cloud migration, AI implementation, and business process optimisation.</div>
        <div>Accenture has undertaken major projects involving cloud migration, AI implementation, and business process optimisation.</div>
      </div>
    </div>
  )
}

export default Services
