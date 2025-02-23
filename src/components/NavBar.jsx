import logo from '../images/logo2.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-amber-300 grid grid-cols-2 items-center mx-auto px-4 py-2 text-black">
            <div className="flex justify-start items-center">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-11" />
                </NavLink>
            </div>

            <div>
                <ul className="flex justify-end px-10 gap-6 items-center font-medium">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white cursor-pointer"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products" 
                            className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white cursor-pointer"}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/cart" 
                            className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white cursor-pointer"}
                        >
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white cursor-pointer"}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white cursor-pointer"}
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
