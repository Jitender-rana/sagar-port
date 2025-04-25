import styled from "./home.module.scss"
import logo from "../../Photos/Dharsh.svg"
import eclipese from "../../Photos/1665059895224.jpg"
import rightArr from "../../Photos/Arrow_Up_Right_MD.svg"

import gmail from "../../Photos/Gmail.svg"
import upwork from "../../Photos/upwork 1.svg"
import grp1 from "../../Photos/Group 483256.svg"
import grp5 from "../../Photos/Group 483254.svg"
import { Typed } from "react-typed"
import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

function Home() {

    const el = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings:['Creativity', 'Experiences'],
            typeSpeed : 120,
            backSpeed : 120,
            loop : true,
        });

        return () => {
            typed.destroy();
        };

    }, []);

    function handleGetInTouch(){
        navigate("/contact");
    }
    
    // Animation variants
    const fadeInUp = {
        hidden: { y: 60, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100
            }
        }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

  return (
    <>
    {/* Animated background elements */}
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
            position: 'fixed',
            top: '5%',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(125,90,220,0.15) 0%, rgba(125,90,220,0) 70%)',
            zIndex: -1
        }}
    />
    
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
            scale: [1, 1.05, 1],
            opacity: 0.2,
        }}
        transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "mirror"
        }}
        style={{
            position: 'fixed',
            bottom: '10%',
            left: '5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,255,0.15) 0%, rgba(0,200,255,0) 70%)',
            zIndex: -1
        }}
    />
    
    <div className={styled.home} style={{marginBottom: "95px"}}>
        <motion.div 
            className={styled.header}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styled.nav}>
                <div className={styled.logo}>
                    <img src={logo} />
                </div>
                <div className={styled.navigator}>
                    <div className={styled.navA}>
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT US</Link>
                        <Link to="/work">MY WORKS</Link>
                    </div>
                    <div className={styled.navbtn}>
                        <Link to="/contact"><button>CONTACT</button></Link>
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div 
            className={styled.eclipse}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 100 }}
        >
            <div className={styled.eclipseimg}>
                <img src={eclipese} height={200} width={200} style={{borderRadius:"50%"}}  />
            </div>
        </motion.div>
        <div className={styled.title}>
            <motion.div 
                className={styled.titleheading}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <p>Engineering <span className={styled.a} ref={el} ></span><br /> 
                    One Stack at a <span className={styled.b}>Time.</span></p>
            </motion.div>
            <motion.div 
                className={styled.titleinfo}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <p>I'm Sagar Admane, an aspiring Full Stack and DevOps engineer driven by the passion to build robust, scalable, and user-friendly applications. With a knack for clean code, seamless deployments, and optimized workflows, I strive to bridge the gap between development and operations. Let's collaborate to turn ideas into powerful, production-ready solutions!</p>
            </motion.div>
        </div>
        <motion.div 
            className={styled.buttons}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
        >
            <div className={styled.touch}>
                <button onClick={handleGetInTouch} >Get In Touch</button>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1WZiVmUNVkLXvLSKDZNrVs7mm8C2Rh53X/view?usp=drivesdkdrive_link" target="_blank"><button className={styled.CV}>Download CV</button></a>
            </div>
        </motion.div>
    </div>

    <div className={styled.aboutme} >
        <motion.div 
            className={styled.aboutheading}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className={styled.head}>
                <h2>My Projects <span className={styled.headspan}>Highlight</span></h2>
            </div>
            <div className={styled.aboutinfo}>
                <p>Discover my skills and creativity in action, with just one click.</p>
            </div>
        </motion.div>
        <div className={styled.pproject}>
        <motion.div 
            className={styled.projects}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div className={styled.card} variants={fadeInUp}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div className={styled.theback}><img  className={styled.projectbanner} src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div>
                    <a><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Fullstack and Devops</button>
                    <a href="https://github.com/Sagar-Admane/StockSync" target="_blank"><button className={styled.view}><p>View Project</p><img src={rightArr} /></button></a>
                </div>
            </div>
            </motion.div>
            <motion.div className={styled.card} variants={fadeInUp}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div>
                    <a href="https://second-brain-frontend-gamma.vercel.app/" target="_blank"><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Fullstack</button>
                    <a href="https://github.com/Sagar-Admane/Chat-App" target="_blank"><button className={styled.view}><p>View Project </p><img src={rightArr} /></button></a>
                </div>
            </div>
            </motion.div>
            <motion.div className={styled.card} variants={fadeInUp}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" /></div>
                <div>
                    <a href="https://jitender-rana.github.io/Moveit/" target="_blank"><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Frontend</button>
                    <a href="https://github.com/Sagar-Admane/Notes.me" target="_blank"><button className={styled.view}><p>View Project </p><img src={rightArr} /></button></a>
                </div>
            </div>
            </motion.div>
            <motion.div className={styled.card} variants={fadeInUp}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" /></div>
                <div>
                    <a href="https://jitender-rana.github.io/TinDog/" target="_blank"><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Frontend</button>
                    <a href="https://github.com/Sagar-Admane/bakery" target="_blank"><button className={styled.view}><p>View Project </p><img src={rightArr} /></button></a>
                </div>
            </div>
            </motion.div>
        </motion.div>
    </div>
        <motion.div 
            className={styled.aboutlast}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            <button><p>Explore more</p></button>
        </motion.div>
    </div>

    {/* <!-- Testimonal --> */}

    {/* <div className={styled.ptestimonal}>
        <div className={styled.testimonal}>
            <div className={styled.testhead}>
                <div>
                    <h2>Testimonial</h2>
                </div>
                <div>
                    <img src={svg} />
                </div>
            </div>
            <div className={styled.testinfo}>
                <p className={styled.normal}>Harsh was fantastic to work with from start to finish. We were looking for a simple, standout logo and he delivered. I tried designing the logo myself thinking I wouldn't need to pay the money for a professional graphic designer but I was very wrong. Working with Harsh was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can't thank harsh enough for his effort and professionalism. I would recommend him to anyone looking for a design!"</p>
                <br />
                <p className={styled.bold}>ARSHIT</p>
            </div>
        </div>
    </div> */}

    {/* <!-- Footer --> */}

    <motion.div 
        className={styled.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <div className={styled.footerfirst}>
            <div>
                <h1>Let's <br /> Work Together - </h1>
            </div>
            <div className={styled.ftrbtn}>
                <div className={styled.fbtn}>
                <a href='mailto:sagaradmane6@gmail.com'><button style={{cursor: "pointer"}}><img src={gmail} />sagara@gmail.com</button></a>
                </div>
                <div className={styled.fbtn}>
                    <button style={{backgroundColor: "#1D6400"}}><img src={upwork} />Hire me on Upwork</button>
                </div>
            </div>
        </div>
        <div className={styled.footerlast}>
            <p>© 2024 All rights reserved.
            </p>
            <div className={styled.img}>
                <a href="https://www.linkedin.com/in/sagaradmane/" target="_blank"><img className={styled.img} src={grp1} /></a>
                {/* <img src={grp2} />
                <img src={grp3} />
                <img src={grp4} /> */}
                <a href="https://x.com/SagarAdman58293" target="_blank"><img className={styled.img} src={grp5} /></a>
            </div>
        </div>
    </motion.div>

    </>
  )
}

export default Home
