"use client"
import React, { useEffect, useState, useRef } from 'react'
import styles from './Services.module.css'
import { checkIsInViewPort } from '@/services/isInViewPort'

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
    <div className={`mb-5 ${styles.services}`}>
      <div ref={divRef} className={ isInViewPort && 'serviceAnimation'}  >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
  )
}

export default Services
