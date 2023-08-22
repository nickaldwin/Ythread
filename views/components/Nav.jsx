import React from "react";
const Nav = () => (
    <>
    <nav className="pt-4 text-stone-800 px-10 flex flex-col sm:flex-row content justify-between">
        <div>
            <h1 className="font-cherry lowercase text-4xl">
                <a href="/profile">Ythread</a>
            </h1>
        </div>
        <ul className="flex pt-2">
            <li className="hover:text-teal-600 duration-150 ease-in-out transition pr-3">
                <a href="/profile">Profile</a>
            </li>
            <li className="hover:text-teal-600 duration-150 ease-in-out transition pr-3">
                    <a href="/create">CreatePost</a>
            </li>
            <li className="hover:text-teal-600 duration-150 ease-in-out transition pr-3">
            <a href="/feed">Feed</a>
            </li>
            <li className="hover:text-teal-600 duration-150 ease-in-out transition pr-3">
                <a href="/logout">Logout</a>
            </li>
        </ul>
    </nav>
    </>
);

export default Nav;