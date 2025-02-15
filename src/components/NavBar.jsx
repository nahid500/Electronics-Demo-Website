import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="bg-amber-300 grid grid-cols-2 items-center mx-auto px-4 py-2 text-black">
        <div className="flex justify-start items-center">
            <img src={logo} alt="logo" className="h-12" />
        </div>

        <div>
            <ul className="flex justify-end px-10 gap-6 items-center font-medium">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Login</li>
            <li className="hover:text-white cursor-pointer">Register</li>
            </ul>
        </div>
        </div>
    );
    };

export default Navbar;
