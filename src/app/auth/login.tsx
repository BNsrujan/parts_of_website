import { useState } from "react";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className=" relative h-screen w-full bg-transparent  flex  items-center justify-center antialiased  ">

            <div className="flex flex-col gap-7 border border-gray-100 rounded-md w-[550px] items-center justify-center h-[600px] shadow-md">
                <div className=" relative   w-96  start">
                    <h1 className="text-3xl md:text-4xl  uppercase tracking-normal  bg-clip-text text-transparent  h-11  bg-black font-sans font-bold">
                        sigin in
                    </h1>
                    <p className="text-gray-500 text-xs tracking-wide"> <span className="text-blue-400">welcome back!</span> Please enter you details</p>
                </div>
                <div className="relative w-96  bg-transparent">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 border rounded-lg text-base bg-blue-50 px-4 bg-transparent text-black outline-none focus:border focus:border-blue-900 duration-200"
                    />
                    <label
                        htmlFor="email"
                        className={`absolute text-sm pointer-events-none  duration-300 left-4 ${email
                            ? "-top-2 text-xs bg-white px-1 text-blue-900"
                            : "top-1/2 transform -translate-y-1/2 text-base text-gray-400"
                            }`}
                    >
                        Enter email
                    </label>
                </div>

                <div className="relative w-96">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 border bg-blue-50 rounded-md text-base px-4 bg-transparent text-black outline-none focus:border  focus:border-blue-900 duration-200"
                    />
                    <label
                        htmlFor="password"
                        className={`absolute text-sm pointer-events-none  duration-300 left-4 ${password
                            ? "-top-2 text-xs bg-white px-1 text-blue-900"
                            : "top-1/2 transform -translate-y-1/2  text-base text-gray-400"
                            }`}
                    >
                        Enter password
                    </label>
                </div>
                <div>
                    <button className="w-96 h-12  mt-3  bg-blue-500 ring-offset-2 text-bold font-sans  hover:bg-blue-600 shadow-md hover:shadow-lg transition duration-300 tracking-wide hover:border-none    rounded-md  px-4  text-center text-blue-50">
                        Submit
                    </button>
                </div>
                <div className=" -m-4 w-96 text-neutral-500 tracking-wide text-sm ">
                    Don't have an account? <span className=" text-blue-700 text-md  cursor-pointer font-semibold hover:underline"> sign up</span>
                </div>
            </div>
        </div>
    );
}
