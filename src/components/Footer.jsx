import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../../public/vite.svg';

const Footer = () => {
    return (
        <footer className="bg-cyan-500 py-6">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                
                {/* Logo & Contact */}
                <div className="text-center sm:text-left">
                    <img src={logo} alt="Logo" className="mx-auto sm:mx-0 w-32 h-auto mb-4" />
                    <h3 className="font-bold text-lg">Got a Question? Call us</h3>
                    <p className="text-gray-800 flex items-center justify-center sm:justify-start space-x-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>09613-800800</span>
                    </p>
                </div>

                {/* Company Info */}
                <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">Company</h4>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link to="/career">Career</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link to="/terms-and-conditions">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>

                {/* My Account */}
                <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">My Account</h4>
                    <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer">
                        <Link to="/login">Sign In</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link to ="/register">Register </Link>
                            </li>
                        <li className="hover:underline cursor-pointer">Orders</li>
                        <li className="hover:underline cursor-pointer">Track My Order</li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-lg">Customer Service</h4>
                    <ul className="space-y-2">
                        <Link to = '/payment-methods'>
                        <li className="hover:underline cursor-pointer">Payment Methods</li>
                        </Link>
                        
                        <Link to = '/support-center'>
                        <li className="hover:underline cursor-pointer">Support Center</li>
                        </Link>

                        <Link to = '/refund'>
                        <li className="hover:underline cursor-pointer">Cancellation, Return & Refund</li>
                        </Link>
                    </ul>
                </div>
            </div>

            {/* Social Media & Trustpilot */}
            <div className="text-center mt-6">
                <p className="font-semibold">Follow Us</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center mt-6">
                &copy; {new Date().getFullYear()} | ElectroMart | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
