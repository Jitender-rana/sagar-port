import styled from "./work.module.scss"
import second from "../../Photos/Secondbrain.png"
import chat from "../../Photos/chat.jpg"
import tin from "../../Photos/Tindog.png"
import move from "../../Photos/Moveit.png"
import logo from "../../Photos/Dharsh.svg"
import { Link, useNavigate } from 'react-router-dom'
import travel from "../../Photos/travel.svg"
import rightArr from "../../Photos/Arrow_Up_Right_MD.svg"
import rare from "../../Photos/rare.svg"
import furry from "../../Photos/furry.svg"
import link from "../../Photos/link.svg"
import { motion } from "framer-motion"

function Works() {
    const navigate=useNavigate();
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10
            }
        }
    };
    
    const floatingCircle = {
        animate: {
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

  return (
    <div>
      <div className={styled.header}>
            <div className={styled.nav}>
                <div className={styled.logo}>
                    <img src={logo} />
                </div>
                <div className={styled.navigator}>
                    <div className={styled.navA}>
                    <a style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}><h1>Home</h1></a>
                    <a style={{cursor:"pointer"}} onClick={()=>{navigate("/about")}}><h1>About Us</h1></a>
                    
                    <a style={{cursor:"pointer"}} onClick={()=>{navigate("/contact")}}><h1>Contact</h1></a>

                    </div>
                    <div className={styled.navbtn}>
                        <Link to="/contact"><button>CONTACT</button></Link>
                    </div>
                </div>
            </div>
        </div>

    {/* Animated decorative elements */}
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
            duration: 1.2,
            ease: "easeOut"
        }}
        style={{
            position: 'fixed',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(125,90,220,0.1) 0%, rgba(125,90,220,0) 70%)',
            zIndex: -1
        }}
    />
    
    <motion.div
        variants={floatingCircle}
        animate="animate"
        style={{
            position: 'fixed',
            bottom: '15%',
            right: '10%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(90,175,220,0.1) 0%, rgba(90,175,220,0) 70%)',
            zIndex: -1
        }}
    />

    {/* My works */}
    <div className={styled.myworks} >
    <div className={styled.pproject}>
        <motion.div 
            className={styled.projects}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styled.card} variants={itemVariants}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </motion.div>
            <motion.div className={styled.card} variants={itemVariants}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </motion.div>
            <motion.div className={styled.card} variants={itemVariants}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </motion.div>
            <motion.div className={styled.card} variants={itemVariants}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </motion.div>
        </motion.div>
    </div>
    </div>

    </div>
  )
}

export default Works
