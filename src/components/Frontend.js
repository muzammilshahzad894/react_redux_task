import React from "react";

const Frontend = () => {
  return (
    <div className="w-4/5 shadow-lg rounded-lg p-6  ml-[10%]  gap-4">
      <div className="items-center w-full flex gap-4 border-b border-b-gray-300 pb-4">
        <div className="">
          <button className="bg-gray-500 h-12 w-12 rounded-full text-white">
            MS
          </button>
        </div>
        <input
          className="bg-gray-200 px-4 py-2  w-full rounded-full text-white"
          placeholder="What's on your mind, Imran ?"
        />
      </div>
      <div className="flex justify-between items-center pt-4">
        <p>Protected </p>
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <p>Feeling/Activity</p>
      </div>
    </div>
  );
};

export default Frontend;
