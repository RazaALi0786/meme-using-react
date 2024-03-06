import React from "react";
export default function header() {
  return (
    <main className="p-9">
      <form className="grid grid-cols-2 grid-rows-1 gap-4">
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
          className="col-span-2 font-sans text-white rounded-md bg-gradient-to-r from-indigo-600 to-pink-600 "
          type="button"
        >
          Get a New Meme Image
        </button>
      </form>
    </main>
  );
}
