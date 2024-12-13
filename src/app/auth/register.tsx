import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import { label } from "framer-motion/client";

export function Register() {
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [conferPassword, setConferPassword] = useState("");

    const navigate = useNavigate();

    const validatePasswordStrength = (password, conferPassword, email) => {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        }
        if (!hasNumber.test(password)) {
            return "Password must contain at least one number.";
        }
        if (!hasSpecialChar.test(password)) {
            return "Password must contain at least one special character.";
        }
        if (password !== conferPassword) {
            return "Passwords are not matching";
        }
        if (email && !emailRegex.test(email)) {
            return "Please enter a valid email address.";
        }
        return "";
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        const passwordError = validatePasswordStrength(password, conferPassword, email);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/register", {
                name: `${fname}_${lname}`,
                email,
                password,
                conferPassword
            });

            alert("Registration successful!");
            navigate("/dashboard");
        } catch (error) {
            setError(error.response?.data?.message || "An unexpected error occurred.");
        }
    };


    return (
        <div className="relative h-screen w-full bg-transparent flex items-center justify-center antialiased px-4 sm:px-8 md:px-16">
            <div className="flex flex-col border border-gray-100 rounded-md w-full max-w-lg items-center justify-center h-auto shadow-md py-8 px-6">
                <div className="relative mb-3 w-full ">
                    <h1 className="text-3xl md:text-4xl uppercase tracking-normal bg-clip-text text-transparent bg-black font-sans font-bold">
                        Sign{" "}Up
                    </h1>
                    <p className="text-gray-500 text-xs tracking-wide">
                        Please Create a new account
                    </p>
                </div>
                <form className="flex flex-col gap-6 w-full" onSubmit={handleLogin}>
                    <div className="w-69  flex gap-2  ">
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                id="fname"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                className="w-full h-12 border rounded-lg text-base bg-blue-50 px-4 bg-transparent text-black outline-none focus:border focus:border-blue-900 duration-200"
                            />
                            <label
                                htmlFor="fname"
                                className={`absolute text-sm pointer-events-none duration-300 left-4 ${fname
                                    ? "-top-2 text-xs bg-white px-1 text-blue-900"
                                    : "top-1/2 transform -translate-y-1/2 text-base text-gray-400"
                                    }`}
                            >
                                First name
                            </label>
                        </div>
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                id="lname"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                className="w-full h-12 border rounded-lg text-base bg-blue-50 px-4 bg-transparent text-black outline-none focus:border focus:border-blue-900 duration-200"
                            />
                            <label
                                htmlFor="lname"
                                className={`absolute text-sm pointer-events-none duration-300 left-4 ${lname
                                    ? "-top-2 text-xs bg-white px-1 text-blue-900"
                                    : "top-1/2 transform -translate-y-1/2 text-base text-gray-400"
                                    }`}
                            >
                                Last name
                            </label>
                        </div>

                    </div>
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 border rounded-lg text-base bg-blue-50 px-4 bg-transparent text-black outline-none focus:border focus:border-blue-900 duration-200"
                        />
                        <label
                            htmlFor="email"
                            className={`absolute text-sm pointer-events-none duration-300 left-4 ${email
                                ? "-top-2 text-xs bg-white px-1 text-blue-900"
                                : "top-1/2 transform -translate-y-1/2 text-base text-gray-400"
                                }`}
                        >
                            Enter email
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 border bg-blue-50 rounded-md text-base px-4 bg-transparent text-black outline-none focus:border focus:border-blue-900 duration-200"
                        />
                        <label
                            htmlFor="password"
                            className={`absolute text-sm pointer-events-none duration-300 left-4 ${password
                                ? "-top-2 text-xs bg-white px-1 text-blue-900"
                                : "top-1/2 transform -translate-y-1/2 text-base text-gray-400"
                                }`}
                        >
                            Enter password
                        </label>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                    <div className="relative w-full">
                        <input
                            type="password"
                            id="conferPassword"
                            value={conferPassword}
                            onChange={(e) => setConferPassword(e.target.value)}
                            className="w-full h-12 border bg-blue-50 rounded-md text-base px-4 bg-transparent text-black outline-none focus:border  focus:border-blue-900 duration-200"
                        />
                        <label
                            htmlFor="conferPassword"
                            className={`absolute text-sm pointer-events-none duration-300 left-4 ${conferPassword
                                ? "-top-2 text-xs bg-white px-1 text-blue-900"
                                : "top-1/2 transform -translate-y-1/2 text-base text-gray-400"
                                }`}
                        >
                            Confirm Password
                        </label>

                        {error && <p className=" absolute text-red-500 text-sm ">{error}</p>}

                    </div>

                    <div className="mt-4 w-full">
                        <button className="w-full h-12 bg-blue-500 ring-offset-2 text-bold font-sans hover:bg-blue-600 shadow-md hover:shadow-lg transition duration-300 tracking-wide hover:border-none rounded-md px-4 text-center text-blue-50">
                            Submit
                        </button>
                    </div>
                </form >
                <div className="mt-4 w-full text-center text-neutral-500 tracking-wide text-sm">
                    Don't have an account?{" "}
                    <span className="text-blue-700 text-md cursor-pointer font-semibold hover:underline">
                        Login
                    </span>
                </div>
            </div >
        </div >
    );
}
