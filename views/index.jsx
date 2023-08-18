import React from "react";
import Footer from"./components/Footer";
import Button from "./components/Button";
import Setone from "./components/Setone";
import Settwo from "./components/Settwo";
import main from "./main";

const Index = (props) => (
        <main>
            <div className="absolute w-[60-m] z-[-10] bottom-[-400px] left-[-200px]">
                <Settwo/>
            </div>
            <div className="absulote w-[60em] z-[-10] top[-400px] right[-400px]">
                <Setone/>
            </div>
                <div className="mt-10">
                    <div className="flex flex-col md:flex-row px-10 justify-content-center contsent-center pt-24">
                        <secton className="h-full flex justify-between content-between flec-col">
                            <header className="text-stone-800">
                                <div className="text-center">
                                    <h1 className="font-cherry lowercase text-6x1">
                                        <a href="/profile">Ythred</a>
                                    </h1>
                                    <span className="font-sans">Create A thread on Ythread</span>
                                </div>
                            </header>
                            <div className="mt-10 flex content-center justify-center">
                                <Button text="Login" link="/login">Login</Button>
                                <Button text="Signup" link="/signup">Signup</Button>
                            </div>
                        </secton>
                    </div>        
                </div>
        </main>
);

export default Index;