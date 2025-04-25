import styled from "./about.module.scss"
import logo from "../../Photos/Dharsh.svg"
import reactangle from "../../Photos/Rectangle + Clipped Mask-6.svg"
import grp1 from "../../Photos/Group 483256.svg"
import grp2 from "../../Photos/Group 483252.svg"
import grp3 from "../../Photos/Group 483258.png"
import grp4 from "../../Photos/Group 483257.svg"
import grp5 from "../../Photos/Group 483254.svg"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

function About() {
    const navigate=useNavigate();
    
    // Animation variants
    // const fadeInLeft = {
    //     hidden: { x: -60, opacity: 0 },
    //     visible: {
    //         x: 0,
    //         opacity: 1,
    //         transition: {
    //             type: "spring",
    //             damping: 15,
    //             stiffness: 80
    //         }
    //     }
    // };
    
    const fadeInRight = {
        hidden: { x: 60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 80
            }
        }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100 
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
            right: '15%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(125,90,220,0.08) 0%, rgba(125,90,220,0) 70%)',
            zIndex: -1
        }}
    />
    
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
            scale: [1, 1.1, 1],
            opacity: 0.15,
        }}
        transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "mirror"
        }}
        style={{
            position: 'fixed',
            bottom: '15%',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0) 70%)',
            zIndex: -1
        }}
    />
    
    <motion.div 
        className={styled.nav}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div style={{cursor:"pointer"}} onClick={()=>{
            navigate("/");
        }}className={styled.logo}>
            <img src={logo} />
        </div>
    </motion.div>

    <div className={styled.content}>
        <motion.div 
            className={styled.left}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className={styled.img}
                variants={itemVariant}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={reactangle} height="130px" width="130px" />
            </motion.div>
            <motion.div 
                className={styled.head}
                variants={itemVariant}
            >
                <pre><p>Hi, I am Sagar! I am a developer <br /> 
based on India. </p></pre>
            </motion.div>
            <motion.div 
                className={styled.info}
                variants={itemVariant}
            >
                <p>Age - 22</p>
                <p>Country – India</p>
                <p>whatsapp - +919503036962</p>
                <p>Email - sagaradmane6@gmail.com</p>
            </motion.div>
            <motion.div 
                className={styled.skills}
                variants={itemVariant}
            >
                <h3>Skills</h3>
                <motion.div 
                    className={styled.skillCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                >
                    <h4>Languages</h4>
                    <div className={styled.skillItems}>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >Java</motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >JavaScript</motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >C++</motion.span>
                    </div>
                </motion.div>
                <motion.div 
                    className={styled.skillCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    <h4>Tools</h4>
                    <div className={styled.skillItems}>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >Docker</motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >Git</motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >GitHub</motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >AWS</motion.span>
                    </div>
                </motion.div>
                <motion.div 
                    className={styled.skillCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                >
                    <h4>Frameworks</h4>
                    <div className={styled.skillItems}>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >React</motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, backgroundColor: "#6a11cb", color: "#fff" }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >Next.js</motion.span>
                    </div>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className={styled.certifications}
                variants={itemVariant}
            >
                <h3>Certifications</h3>
                <div className={styled.certCards}>
                    <motion.a 
                        href="https://drive.google.com/file/d/1GuwIretEhwzWdr7XCf2R3Ebgwt2PEY5w/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styled.certCard}
                        whileHover={{ 
                            scale: 1.03, 
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            delay: 1.0, 
                            duration: 0.5,
                            type: "spring"
                        }}
                    >
                        <h4>Generative AI for Everyone</h4>
                        <p className={styled.certCompany}>DeepLearning.AI</p>
                        <p className={styled.certDesc}>Comprehensive training in generative AI concepts, applications, and implementation strategies for various domains.</p>
                    </motion.a>
                    <motion.a 
                        href="https://drive.google.com/file/d/1KANG98FbQWWKLJjE_QEeVrIYxwiIHO6E/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styled.certCard}
                        whileHover={{ 
                            scale: 1.03, 
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            delay: 1.1, 
                            duration: 0.5,
                            type: "spring"
                        }}
                    >
                        <h4>Advanced Distributed Systems</h4>
                        <p className={styled.certCompany}>NPTEL</p>
                        <p className={styled.certDesc}>In-depth study of distributed computing architectures, algorithms, and system design principles.</p>
                    </motion.a>
                </div>
            </motion.div>
            
            <motion.div 
                className={styled.connect}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <motion.img 
                    src={grp1}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.img 
                    src={grp2}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.img 
                    src={grp3}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.img 
                    src={grp4}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.img 
                    src={grp5}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                />
            </motion.div>
        </motion.div>
        <motion.div 
            className={styled.right}
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
        >
            <div className={styled.links}>
                <motion.a 
                    style={{cursor:"pointer"}} 
                    onClick={()=>{navigate("/")}}
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                >
                    <h1>Home</h1>
                </motion.a>
                <motion.a 
                    style={{cursor:"pointer"}} 
                    onClick={()=>{navigate("/about")}}
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                >
                    <h1>About Us</h1>
                </motion.a>
                <motion.a 
                    style={{cursor:"pointer"}} 
                    onClick={()=>{navigate("/work")}}
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                >
                    <h1>My Works</h1>
                </motion.a>
                <motion.a 
                    style={{cursor:"pointer"}} 
                    onClick={()=>{navigate("/contact")}}
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                >
                    <h1>Contact</h1>
                </motion.a>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default About
