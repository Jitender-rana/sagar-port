import React from 'react'
import styles from "./contact.module.scss"
import logo from "../../Photos/Dharsh.svg"
import freelance from "../../Photos/freelancer.svg"
import gmail from "../../Photos/Gmail.svg"
import upwork from "../../Photos/upwork 1.svg"
import img1 from "../../Photos/Group 483256.svg"
import img2 from "../../Photos/Group 483252.svg"
import img3 from "../../Photos/Group 483258.png";
import img4 from "../../Photos/Group 483257.svg"
import img5 from "../../Photos/Group 483254.svg"

function Contact() {
  return (
    <>
    <div className={styles.header}>
        {/* <!-- Navbar --> */}
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <div className={styles.navigator}>
                <div className={styles["nav-a"]}>
                    <a href="index.html">HOME</a>
                    <a href="index2.html">ABOUT US</a>
                    <a href="index.html">MY WORKS</a>
                </div>
                <div className={styles["nav-btn"]}>
                    <a href="./contact.html"><button>CONTACT</button></a>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Contact US Section --> */}

    <div className={styles.contact}>
        <p className={styles.head}>Contact Us </p>
        <div className={styles.form}>
            <div className={styles.left}>
                <div className={styles.text}>
                    <p>Let's align our visions! Reach out and let the magic of collaboration benifit us both</p>
                </div>
                <div className={styles.lform}>
                    <form action="">
                        <div className={`${styles.input} ${styles.name}`}>
                            <input type="text" placeholder="Last Name" name="" id="lastName" />
                            <input type="text" placeholder="First Name" name="" id="firstName" />
                        </div>
                        <div className={`${styles.input} ${styles.email}`}>
                            <input type="email" placeholder="Email" name="" id="email" />
                        </div>
                        <div className={`${styles.input} ${styles.phone}`}>
                            <input type="number" placeholder="Phone Number" id="phone"  />
                        </div>
                        <div className={`${styles.input} ${styles.message}`}>
                            <textarea name="" placeholder="Message" id="msg"></textarea>
                        </div>
                        <div className={styles.Submit}>
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.image}>
                    <img src={freelance} />
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Footer --> */}

    <div id={styles.footer}>
        <div className={styles["footer-first"]}>
            <div>
                <h1>Let's <br /> Work Together - </h1>
            </div>
            <div className={styles["ftr-btn"]}>
                <div className={styles.fbtn}>
                    <button><img src={gmail} />harsh81@gmail.com</button>
                </div>
                <div className={styles.fbtn}>
                    <button style={{backgroundColor: "#1D6400"}}><img src={upwork} />Hire me on Upwork</button>
                </div>
            </div>
        </div>
        <div className={styles["footer-last"]}>
            <p>© 2024 All rights reserved.
            </p>
            <div className={styles.img}>
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
