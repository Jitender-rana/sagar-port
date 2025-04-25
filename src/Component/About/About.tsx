import styled from "./about.module.scss"
import logo from "../../Photos/Dharsh.svg"
import reactangle from "../../Photos/Rectangle + Clipped Mask-6.svg"
import grp1 from "../../Photos/Group 483256.svg"
import grp2 from "../../Photos/Group 483252.svg"
import grp3 from "../../Photos/Group 483258.png"
import grp4 from "../../Photos/Group 483257.svg"
import grp5 from "../../Photos/Group 483254.svg"
import { useNavigate } from "react-router-dom"

function About() {
    const navigate=useNavigate();
  return (
    <>
    <div className={styled.nav}>
        <div style={{cursor:"pointer"}} onClick={()=>{
            navigate("/");
        }}className={styled.logo}>
            <img src={logo} />
        </div>
    </div>

    <div className={styled.content}>
        <div className={styled.left}>
            <div className={styled.img}>
                <img src={reactangle} height="130px" width="130px" />
            </div>
            <div className={styled.head}>
                <pre><p>Hi, I am Jitender! I am a developer <br /> 
based on India. </p></pre>
            </div>
            <div className={styled.info}>
                <p>Age - 22</p>
                <p>Country – India</p>
                <p>whatsapp - +918628840707</p>
                <p>Email - jrana0527@gmail.com</p>
            </div>
            <div className={styled.skills}>
                <h3>Skills</h3>
                <div className={styled.skillCategory}>
                    <h4>Languages</h4>
                    <div className={styled.skillItems}>
                        <span>Java</span>
                        <span>JavaScript</span>
                        <span>C++</span>
                    </div>
                </div>
                <div className={styled.skillCategory}>
                    <h4>Tools</h4>
                    <div className={styled.skillItems}>
                        <span>Docker</span>
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>AWS</span>
                    </div>
                </div>
                <div className={styled.skillCategory}>
                    <h4>Frameworks</h4>
                    <div className={styled.skillItems}>
                        <span>React</span>
                        <span>Next.js</span>
                    </div>
                </div>
            </div>
            
            <div className={styled.certifications}>
                <h3>Certifications</h3>
                <div className={styled.certCards}>
                    <a href="https://drive.google.com/file/d/1GuwIretEhwzWdr7XCf2R3Ebgwt2PEY5w/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styled.certCard}>
                        <h4>Generative AI for Everyone</h4>
                        <p className={styled.certCompany}>DeepLearning.AI</p>
                        <p className={styled.certDesc}>Comprehensive training in generative AI concepts, applications, and implementation strategies for various domains.</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1KANG98FbQWWKLJjE_QEeVrIYxwiIHO6E/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styled.certCard}>
                        <h4>Advanced Distributed Systems</h4>
                        <p className={styled.certCompany}>NPTEL</p>
                        <p className={styled.certDesc}>In-depth study of distributed computing architectures, algorithms, and system design principles.</p>
                    </a>
                </div>
            </div>
            
            <div className={styled.connect}>
                <img src={grp1} />
                <img src={grp2} />
                <img src={grp3} />
                <img src={grp4} />
                <img src={grp5} />
            </div>
        </div>
        <div className={styled.right}>
            <div className={styled.links}>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}><h1>Home</h1></a>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/about")}}><h1>About Us</h1></a>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/work")}}><h1>My Works</h1></a>
                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/contact")}}><h1>Contact</h1></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
