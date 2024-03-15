import React from 'react'
import linkedin from '../Images/linkedin.png'
import facebook from '../Images/facebook.jpg'
import styles from '../Styles/Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Follow us on</div>
      <div>
        <img src={linkedin} width="10" height="10" alt="linkedin"></img>
        <img src={facebook} width="10" height="10" alt="facebook"></img>
      </div>
      <div>
        Copyrights @2024 Writer
      </div>
    </div>
  )
}
