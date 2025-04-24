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



function Works() {
    const navigate=useNavigate();
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

    {/* My works */}

    <div className={styled.myworks} >
    <div className={styled.pproject}>
        <div className={styled.projects}>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={chat} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={chat} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={second} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={second} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner} src={move} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={move} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
            <div className={styled.card}>
            <div className={styled.travelplanner}>
                <div className={styled.thefront}><img className={styled.projectbanner}src={tin} /></div>
                <div className={styled.theback}><img className={styled.projectbanner} src={tin} /></div>
                <div>
                    <button className={styled.btn}>Landing Page</button>
                    <button className={styled.btn}>Ui & Ux</button>
                    <button className={styled.view}><p>View Project </p><img src={rightArr} /></button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Works
