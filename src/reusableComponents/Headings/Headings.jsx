"use client"
import React from 'react'
import styles from './Headings.module.css'

const Headings = ({ text, level }) => {

    const prepareHeadings = () => {
        switch (level) {
            case '1':
                return <div className={` text-center ${styles.heading1}`}>{text} </div>
            case '2':
                return <div className={` text-center ${styles.heading2}`}>{text} </div>
            case '3':
                return <div className={` text-center ${styles.heading3}`}>{text} </div>
        }
    }

    return (
        <div className={styles.headingContainer}>{prepareHeadings()}</div>
    )
}

export default Headings
