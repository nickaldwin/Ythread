import React from "react";

const Button ({link, text}) => (
    <a href={link} className="hover:text-green-400 text-green-900 hover:drop-shadow-lg ease-in-out duration-100 transition bg-lime-200 py-2 m-2 rounded drop-shadow-md">
        {text}
    </a>
);
export default Button;