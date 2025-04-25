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
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Contact() {
    const navigate=useNavigate();
    
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const formItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 12 
            }
        }
    };
    
  return (
    <>
    {/* Animated background shapes */}
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
            position: 'fixed',
            top: '20%',
            left: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(125,90,220,0.1) 0%, rgba(125,90,220,0) 70%)',
            zIndex: -1
        }}
    />
    
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
            scale: [1, 1.05, 1],
            opacity: 0.15,
        }}
        transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "mirror"
        }}
        style={{
            position: 'fixed',
            bottom: '10%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,255,0.1) 0%, rgba(0,200,255,0) 70%)',
            zIndex: -1
        }}
    />

    <motion.div 
        className={styles.header}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {/* <!-- Navbar --> */}
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <div className={styles.navigator}>
                <div className={styles["nav-a"]}>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}><h1>Home</h1></a>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/about")}}><h1>About Us</h1></a>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/work")}}><h1>My Works</h1></a>
                
                </div>
                <div className={styles["nav-btn"]}>
                    <a><button>CONTACT</button></a>
                </div>
            </div>
        </div>
    </motion.div>

    {/* <!-- Contact US Section --> */}

    <motion.div 
        className={styles.contact}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
    >
        <motion.p 
            className={styles.head}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            Contact Us 
        </motion.p>
        <div className={styles.form}>
            <motion.div 
                className={styles.left}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className={styles.text}
                    variants={formItemVariants}
                >
                    <p>Let's align our visions! Reach out and let the magic of collaboration benifit us both</p>
                </motion.div>
                <div className={styles.lform}>
                    <form action="">
                        <motion.div 
                            className={`${styles.input} ${styles.name}`}
                            variants={formItemVariants}
                        >
                            <input type="text" placeholder="Last Name" name="" id="lastName" />
                            <input type="text" placeholder="First Name" name="" id="firstName" />
                        </motion.div>
                        <motion.div 
                            className={`${styles.input} ${styles.email}`}
                            variants={formItemVariants}
                        >
                            <input type="email" placeholder="Email" name="" id="email" />
                        </motion.div>
                        <motion.div 
                            className={`${styles.input} ${styles.phone}`}
                            variants={formItemVariants}
                        >
                            <input type="number" placeholder="Phone Number" id="phone"  />
                        </motion.div>
                        <motion.div 
                            className={`${styles.input} ${styles.message}`}
                            variants={formItemVariants}
                        >
                            <textarea name="" placeholder="Message" id="msg"></textarea>
                        </motion.div>
                        <motion.div 
                            className={styles.Submit}
                            variants={formItemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button>Send Message</button>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
            <motion.div 
                className={styles.right}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                }}
            >
                <div className={styles.image}>
                    <img src={freelance} />
                </div>
            </motion.div>
        </div>
    </motion.div>

    {/* <!-- Footer --> */}

    <motion.div 
        id={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <div className={styles["footer-first"]}>
            <div>
                <h1>Let's <br /> Work Together - </h1>
            </div>
            <div className={styles["ftr-btn"]}>
                <div className={styles.fbtn}>
                    <a href='mailto:sagaradmane6@@gmail.com'><button style={{cursor: 'pointer'}}><img src={gmail} />sagara@gmail.com</button></a>
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
    </motion.div>
    </>
  )
}

export default Contact
