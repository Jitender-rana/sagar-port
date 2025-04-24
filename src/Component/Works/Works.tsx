import styled from "./work.module.scss"
import logo from "../../Photos/Dharsh.svg"
import { Link } from 'react-router-dom'
import travel from "../../Photos/travel.svg"
import rightArr from "../../Photos/Arrow_Up_Right_MD.svg"
import rare from "../../Photos/rare.svg"
import furry from "../../Photos/furry.svg"
import link from "../../Photos/link.svg"



function Works() {
  return (
    <div>
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

    {/* My works */}

    <div className={styled.myworks} >
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
    </div>

    </div>
  )
}

export default Works
