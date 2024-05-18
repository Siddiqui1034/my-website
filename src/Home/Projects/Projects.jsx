import React from 'react'
import styles from './Projects.module.css'
import Card from '@/Card/Card'

const Projects = () => {
  return (
    <div className={`${styles.projectsContainer}`}>

      {/* <div className={`${styles.projectsContainer}`}> */}
        {/* <div></div> */}
        <div className={styles.projectsItems}>
          <Card name="School Management System" width="350px" height="450px" 
          content=" School ERP system enables institutes to automate and simplify all regular activities such as curriculum management, attendance records, administrative tasks, information handling, fee management, and assignments." 
          footer={`Lorem ipsum dolor `} />
          <Card name="Digital Hospital" width="350px" height="450px"  content=" Digital technologies are now integral to daily life, and the world's population has never been more interconnected. Innovation, particularly in the digital sphere, is happening at unprecedented scale. Even so, its application to improve the health of populations remains largely untapped, and there is immense scope for use of digital health solutions." 
          footer={`Lorem ipsum dolor `} />
          <Card name="E-Commerce " width="350px" height="450px"  content=" Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.
          Businesses might create a branded store experience on a store like Amazon, build their own commerce site on a dedicated domain, or do it all for a multi-channel approach." 
          footer={`Lorem ipsum dolor `} />
          {/* <Card name="Portfolio" />
          <Card name="Design" /> */}
        </div>
        {/* <div></div> */}

      {/* </div> */}

    </div>
  )
}

export default Projects
