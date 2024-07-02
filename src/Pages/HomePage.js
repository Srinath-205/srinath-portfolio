import React from "react";
import { Link } from "react-scroll";
import Navbar  from "../Components/Navbar";
import '../Styles/HomePage.css';

export default function HomePage() {    
    return (
        <>
        <Navbar/>
        <div className = "home-container">
            <div className = "home-left">
                <p>Hello👋, I'm</p>
                <h1>SRINATH S</h1>
                
                <div className = "home-skills-container">
                    <span>
                        Web Developer🌐<br/>
                        ReactJS Developer😎<br/>
                        MERN Stack Developer👨‍💻<br/>
                        Web Designer🖥️<br/>
                    </span>
                </div>

                <div className = "left-buttons-container">
                    <Link to="page-6" smooth={true}><button className = "left-button"><b>HIRE ME</b></button></Link>
                    <a href={require("../../src/Sources/SRINATH.S.pdf")} download="SRINATH S"><button className = "left-button"><b>GET RESUME</b></button></a>
                </div>

                <div className = "left-social-icons-container">
                    <li><a href="https://www.instagram.com/sgs_gokul/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "left-social-icon"></img></a></li>
                    <li><a href="https://www.threads.net/@sgs_gokul" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "left-social-icon"></img></a></li>
                    <li><a href="https://www.linkedin.com/in/srinaths205/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "left-social-icon"></img></a></li>
                    <li><a href="https://github.com/Srinath-205" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "left-social-icon"></img></a></li>
                </div>
            </div>
            <div>
                //<img src={require("../../src/Sources/home-profile.png")} alt="Profile" className = "home-right-profile"></img>
                <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.economictimes.com%2Fmagazines%2Fpanache%2Fsunny-leone-reveals-her-ex-boyfriend-cheated-on-her-two-months-before-their-wedding%2Farticleshow%2F109240578.cms&psig=AOvVaw0PfjVFfY8XN_yNAqn7m2cB&ust=1720026640626000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIih-9rsiIcDFQAAAAAdAAAAABAx"} alt="Profile" className = "home-right-profile"></img>
            </div>

        </div>
        </>
    )
}
