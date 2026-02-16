import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content p-10 mt-12">
            <div className="footer max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                <nav>
                    <h6 className="footer-title">SkillSwap</h6>
                    <p className="max-w-xs">Connecting local experts with eager learners. Join our community to trade skills and grow together.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a href="#"><FaFacebook className="hover:text-primary transition" /></a>
                        <a href="#"><FaInstagram className="hover:text-primary transition" /></a>
                        <a href="#"><FaTwitter className="hover:text-primary transition" /></a>
                        <a href="#"><FaLinkedin className="hover:text-primary transition" /></a>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center p-4 border-t border-gray-700 mt-8">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by SkillSwap Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;