import React from 'react'
import styles from './Topbar.module.css'

function Topbar(props) {
  return (
    <header>
        <nav className={styles.Topbar}>
          <img  className={styles.amazonLogo}  src='https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png' alt='amazaon logo'/>
        </nav>
    </header>
  )
}

export default Topbar