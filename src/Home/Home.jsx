"use client"
import React from 'react'
import styles from './Home.module.css'
import Services from './Services/Services'
import Title from './Title'
import Skills from './Skills'
import Projects from './Projects'
import Subfooter from './Subfooter'
import Heading from '@/reusableComponents/Headings'

export const Home = () => {
  return (
    <div>
      
      <Title />

      <Heading text={"Skills"} level='1' />
      <Skills />

      <Heading text={"Services"} level='1' />
      <Services />

      <Heading text={"Projects"} level='1' />
      <Projects />


     {/* <h1 className='text-center'>Services</h1>
     <div className={`${styles.projects}`}> */}
      <Subfooter />

    </div>

  )
}


 