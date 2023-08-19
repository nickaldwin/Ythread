import React from "react";
import Head from "./components/Head";
import Header from "./components/Header";
import Setone from "./components/Setone";
import Settwo from "./components/Settwo";

const Login = () => (
    <>
    <Head/>
        <div className="mt-10"></div>
        <Header/>
        <div className="overflow-hidden absulute w-[60em] z-[10] top[-480px] top-[-400px] right-[-300px]">
            <Settwo/>
        </div>
        <div className="overflow-hidden absolute w-[60em] z-[-10] top[-400] top-[-400px] right-[-300px]">
            <Setone/>
        </div>
        <div className="justyfy-content-center">
            <section className="col-16 mt-5">
                <div className="max-w-md m-auto">
                    <Messages messages={messages}/>
                </div>

                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x1">
                            <h1>
                                Sign in to your account
                            </h1>
                            <form action="/login" method="Post">
                               <div className="mb-3">
                                <label 
                                    for="exampleInputEmail1"
                                    className="block mb-2 text-sm font-medium text-gray-900" 
                                >
                                    Email adress
                                </label>
                                        <input
                                        type="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p2.5"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            name="email"
                                        />
                                </div> 
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-ms rounded-lg focus:ring-lime-200 focus:border-lime200 block w-full p-2.5"
                                >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);

export default Login;