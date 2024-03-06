import React from "react";
import Logo from "./images/Logo.png";
export default function header() {
  return (
    <header className="flex items-center h-16 p-5 text-white bg-purple-600">
      <img className="h-full mr-2" src={Logo} alt="Logo" />
      <h2 className="mr-auto text-xl ">Meme Generator</h2>
      <h4 className="text-xs font-medium">React Course - Project 3</h4>
    </header>
  );
}
