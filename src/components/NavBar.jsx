import logo from '../images/logo2.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-teal-700 grid grid-cols-2 items-center mx-auto px-4 py-2 text-white sticky top-0 shadow-md z-10">
            <div className="flex justify-center items-center">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-11" />
                </NavLink>
            </div>

            <div>
                <ul className="flex justify-center px-10 gap-6 items-center font-medium">
                    {["Home", "Products", "Cart", "Login", "Register"].map((item, index) => (
                        <li key={index}>
                            <NavLink 
                                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                                className={({ isActive }) => 
                                    `px-4 py-2 border border-white rounded-md transition 
                                    ${isActive ? "bg-white text-teal-700 font-bold" : "hover:bg-white hover:text-teal-700 cursor-pointer"}` 
                                }
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
