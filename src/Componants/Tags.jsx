import React from "react";

// 
const Tags = ({btn}) => {
  console.log(btn)
  return (
    <div className="grid grid-cols-5 gap-4 p-6 bg-gray-100 min-h-screen place-items-center">
      
        <button
          onClick={btn.action}
          className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md 
          hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 grid"
        >
          {btn.label}
        </button>
    
    </div>
  );
};

export default Tags;
