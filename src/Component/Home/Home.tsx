import styled from "./home.module.scss"
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

function Home() {

    const el = useRef(null);

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
                        <a href="index.html">HOME</a>
                        <a href="index2.html">ABOUT US</a>
                        <a href="index.html">MY WORKS</a>
                    </div>
                    <div className={styled.navbtn}>
                        <a href="./contact.html"><button>CONTACT</button></a>
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
                <p>Designing <span className={styled.a} ref={el} ></span><br /> 
                    One Interaction at a <span className={styled.b}>Time.</span></p>
            </div>
            <div className={styled.titleinfo}>
                <p>I’m Harsh Rana, a passionate UI/UX designer who thrives on crafting user-centered designs that not only look great but solve real problems. With a love for clean interfaces, intuitive navigation, and thoughtful interactions, I aim to create digital experiences that leave a lasting impression. Let’s collaborate and turn ideas into visually stunning realities!</p>
            </div>
        </div>
        <div className={styled.buttons}>
            <div className={styled.touch}>
                <button>Get In Touch</button>
            </div>
            <div>
                <button className={styled.CV}>Download CV</button>
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
                <div className={styled.thefront}><img src={travel} /></div>
                <div className={styled.theback}><img src={travel} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img src={rare} /></div>
                <div className={styled.theback}><img src={rare} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img src={furry} /></div>
                <div className={styled.theback}><img src={furry} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img src={link} /></div>
                <div className={styled.theback}><img src={link} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
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

    <div className={styled.ptestimonal}>
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
    </div>

    {/* <!-- Footer --> */}

    <div id="footer">
        <div className={styled.footerfirst}>
            <div>
                <h1>Let's <br /> Work Together - </h1>
            </div>
            <div className={styled.ftrbtn}>
                <div className={styled.fbtn}>
                    <button><img src={gmail} />harsh81@gmail.com</button>
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
                <img src={grp1} />
                <img src={grp2} />
                <img src={grp3} />
                <img src={grp4} />
                <img src={grp5} />
            </div>
        </div>
    </div>

    </>
  )
}

export default Home
