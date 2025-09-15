import React from "react";
import '../Styles/FooterPage.css';

export default function FooterPage() {
    return (
        <div className = "footer-container">
            <h1 className = "footer-header">SRINATH S</h1>
                
            <ul className = "footer-social-icons-container">
            <li><a href="https://www.instagram.com/itzz_srinath_?igsh=MTRkYm94dGljMDRlcw%3D%3D&utm_source=qr" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "footer-social-icon"></img></a></li>
                    <li><a href="www.linkedin.com/in/srinath-s-205s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/thread.png")} alt="threads" className = "footer-social-icon"></img></a></li>
                    <li><a href="www.linkedin.com/in/srinath-s-205s" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "footer-social-icon"></img></a></li>
                    <li><a href="https://github.com/Srinath-205" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "footer-social-icon"></img></a></li>
            </ul>
                
            <div className = "footer-contact-info">
                <p>+91 7010768854</p>
                <p>srinathsri5300@gmail.com</p>
            </div>

            <div className = "footer-copyrights-container">
                <p>&#169; 2024 All rights reserved | Srinath❤️</p>
            </div>

        </div>
    )
}
