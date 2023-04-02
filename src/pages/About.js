import React from "react"
import { Button } from 'antd';
import bgCover from "../assets/bg-cover.jpg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
const styles = {
    background: `url(${bgCover}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '100vh',
};

function About() {
    const navigate = useNavigate();
    return (

        <>
            <div style={styles} className="flex flex-col items-center justify-center bg-cover bg-center  h-screen ">
                <div 
                className="flex justify-start items-center w-screen"
                style={{background: 'rgba(0,0,0,0.4)'}}>
                    <img src={logo} alt="" height={150} width={150} />
                    <div>
                        <span className="font-semibold" style={{ fontSize: '70px' }} >E</span>
                        <span className="font-medium" style={{ fontSize: '55px' }} >lectrical</span>
                        <span className="font-semibold" style={{ fontSize: '70px' }} >C</span>
                        <span className="font-medium" style={{ fontSize: '55px' }} >ircuit</span>
                        <span className="font-semibold" style={{ fontSize: '70px' }} >S</span>
                        <span className="font-medium" style={{ fontSize: '55px' }} >imulator</span>
                    </div>
                </div>
                <div className="flex justify-around items-center w-full mt-32">
                    <Button
                        type="default"
                        style={{ width: "150px", height: "40px", fontSize: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)' }}
                        onClick={() => navigate("/home")}
                    >
                        Start
                    </Button>
                </div>
            </div>
        </>
    )
}

export default About