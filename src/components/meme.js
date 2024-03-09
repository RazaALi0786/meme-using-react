import React from "react";
import memesData from "../memesData";
export default function header() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main className="p-9 ">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <input
          className="indent-2 font-sans rounded-md border border-solid border-[#D5D4D8]"
          placeholder="Top Text"
          type="text"
        />
        <input
          className="indent-2 font-sans rounded-md border border-solid border-[#D5D4D8]"
          placeholder="Bottom Text"
          type="text"
        />
        <button
          className="col-span-2 font-sans text-white border-none rounded-md cursor-pointer bg-gradient-to-r from-purple-600 to-purple-400 "
          type="button"
          onClick={getMemeImage}
        >
          Get a New Meme Image
        </button>
      </div>
    </main>
  );
}
