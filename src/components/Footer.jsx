import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded-t-2xl">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav> 
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
            </nav> 
            <aside>
                <p>Copyright © 2026 - All right reserved by SkillSwap Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;