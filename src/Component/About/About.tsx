import styled from "./about.module.scss"
import logo from "../../Photos/Dharsh.svg"
import reactangle from "../../Photos/Rectangle + Clipped Mask-6.svg"
import grp1 from "../../Photos/Group 483256.svg"
import grp2 from "../../Photos/Group 483252.svg"
import grp3 from "../../Photos/Group 483258.png"
import grp4 from "../../Photos/Group 483257.svg"
import grp5 from "../../Photos/Group 483254.svg"

function About() {
  return (
    <>
    <div className={styled.nav}>
        <div className={styled.logo}>
            <img src={logo} />
        </div>
    </div>

    <div className={styled.content}>
        <div className={styled.left}>
            <div className={styled.img}>
                <img src={reactangle} height="130px" width="130px" />
            </div>
            <div className={styled.head}>
                <pre><p>Hi, I am Harsh! I am a designer <br /> 
based on India. </p></pre>
            </div>
            <div className={styled.info}>
                <p>Age - 21</p>
                <p>Country – India</p>
                <p>whatsapp - +910000008075</p>
                <p>Email - harsh81@gmail.com</p>
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
                <a href="index.html"><h1>Home</h1></a>
                <a href="index2.html"><h1>About Us</h1></a>
                <a href="index.html"><h1>My Works</h1></a>
                <a href="contact.html"><h1>Contact</h1></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
