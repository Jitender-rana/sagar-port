import styled from "./home.module.scss"
import chat from "../../Photos/chat.jpg"
import second from "../../Photos/Secondbrain.png"
import tin from "../../Photos/Tindog.png"
import move from "../../Photos/Moveit.png"
import logo from "../../Photos/Dharsh.svg"
import eclipese from "../../Photos/Ellipse 78.svg"
import travel from "../../Photos/travel.svg"
import rightArr from "../../Photos/Arrow_Up_Right_MD.svg"
import rare from "../../Photos/rare.svg"
import furry from "../../Photos/furry.svg"
import link from "../../Photos/link.svg"
import svg from "../../Photos/“.svg"
import gmail from "../../Photos/Gmail.svg"
import upwork from "../../Photos/upwork 1.svg"
import grp1 from "../../Photos/Group 483256.svg"
import grp2 from "../../Photos/Group 483252.svg"
import grp3 from "../../Photos/Group 483258.png"
import grp4 from "../../Photos/Group 483257.svg"
import grp5 from "../../Photos/Group 483254.svg"
import { Typed } from "react-typed"
import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

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

  return (
    <>
    <div className={styled.home} style={{marginBottom: "95px"}}>
        <div className={styled.header}>
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
        </div>
        <div className={styled.eclipse}>
            <div className={styled.eclipseimg}>
                <img src={eclipese}  />
            </div>
        </div>
        <div className={styled.title}>
            <div className={styled.titleheading}>
                <p>Engineering <span className={styled.a} ref={el} ></span><br /> 
                    One Stack at a <span className={styled.b}>Time.</span></p>
            </div>
            <div className={styled.titleinfo}>
                <p>I'm Jitender Rana, an aspiring Full Stack and DevOps engineer driven by the passion to build robust, scalable, and user-friendly applications. With a knack for clean code, seamless deployments, and optimized workflows, I strive to bridge the gap between development and operations. Let's collaborate to turn ideas into powerful, production-ready solutions!</p>
            </div>
        </div>
        <div className={styled.buttons}>
            <div className={styled.touch}>
                <button onClick={handleGetInTouch} >Get In Touch</button>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1Sw0HKLwgS-bQkBx2kZd_kpkOj5ne4QUh/view?usp=drive_link" target="_blank"><button className={styled.CV}>Download CV</button></a>
            </div>
        </div>
    </div>

    <div className={styled.aboutme} >
        <div className={styled.aboutheading}>
            <div className={styled.head}>
                <h2>My Projects <span className={styled.headspan}>Highlight</span></h2>
            </div>
            <div className={styled.aboutinfo}>
                <p>Discover my skills and creativity in action, with just one click.</p>
            </div>
        </div>
        <div className={styled.pproject}>
        <div className={styled.projects}>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={chat} /></div>
                <div className={styled.theback}><img  className={styled.projectbanner} src={chat} /></div>
                <div>
                    <a><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Fullstack and Devops</button>
                    <a href="https://github.com/Jitender-rana/Chat-App" target="_blank"><button className={styled.view}><p>View Project</p><img src={rightArr} /></button></a>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={second} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={second} /></div>
                <div>
                    <a href="https://second-brain-frontend-gamma.vercel.app/" target="_blank"><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Fullstack</button>
                    <a href="https://github.com/Jitender-rana/Second-brain-Backend" target="_blank"><button className={styled.view}><p>View Project </p><img src={rightArr} /></button></a>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={move} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={move} /></div>
                <div>
                    <a href="https://jitender-rana.github.io/Moveit/" target="_blank"><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Frontend</button>
                    <a href="https://github.com/Jitender-rana/Moveit" target="_blank"><button className={styled.view}><p>View Project </p><img src={rightArr} /></button></a>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={tin} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={tin} /></div>
                <div>
                    <a href="https://jitender-rana.github.io/TinDog/" target="_blank"><button className={styled.btn}>Landing Page</button></a>
                    <button className={styled.btn}>Frontend</button>
                    <a href="https://github.com/Jitender-rana/TinDog" target="_blank"><button className={styled.view}><p>View Project </p><img src={rightArr} /></button></a>
                </div>
            </div>
            </div>
        </div>
    </div>
        <div className={styled.aboutlast}>
            <button><p>Explore more</p></button>
        </div>
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
                <p className={styled.normal}>Harsh was fantastic to work with from start to finish. We were looking for a simple, standout logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Harsh was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank harsh enough for his effort and professionalism. I would recommend him to anyone looking for a design!”</p>
                <br />
                <p className={styled.bold}>ARSHIT</p>
            </div>
        </div>
    </div> */}

    {/* <!-- Footer --> */}

    <div className={styled.footer}>
        <div className={styled.footerfirst}>
            <div>
                <h1>Let's <br /> Work Together - </h1>
            </div>
            <div className={styled.ftrbtn}>
                <div className={styled.fbtn}>
                <a href='mailto:jrana0527@gmail.com'><button style={{cursor: "pointer"}}><img src={gmail} />jrana0527@gmail.com</button></a>
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
                <a href="https://www.linkedin.com/in/jitender-rana-532347251/" target="_blank"><img className={styled.img} src={grp1} /></a>
                {/* <img src={grp2} />
                <img src={grp3} />
                <img src={grp4} /> */}
                <a href="https://x.com/jitenderRa6995" target="_blank"><img className={styled.img} src={grp5} /></a>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home
