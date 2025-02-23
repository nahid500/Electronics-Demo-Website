import { useState } from "react";
import Navbar from "../../components/NavBar";
import { NavLink } from "react-router-dom";


const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError("");
        console.log("User Registered:", formData);
        // Here, you would typically send the data to your backend
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label className="block font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block font-medium">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 mb-2 border rounded-lg"
                                placeholder="Confirm your password"
                            />
                        </div>
                        
                        <NavLink 
                            to="/login"
                            className="text-red-500" 
                        >
                            Already Registered? Click here to Login
                        </NavLink>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
