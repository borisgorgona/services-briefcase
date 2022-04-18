import React from 'react'
import  "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h1>Boris Gorgona</h1>
            <p>Based in Cartagena - Colombia</p>
        </div>
        <div className="footer-contact">
            <h3>Contact me</h3>
            <p>And let's get down to work</p>
        </div>
        <div className="footer-sms">
            <div className="design-by">
                Design By Boris Gorgona
            </div>
            <div className="sms-links">
                <a href="https://www.linkedin.com/in/boris-gorgona-62b97345/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook facebook"></i>
                </a>
                <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram instagram"></i>
                </a>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
