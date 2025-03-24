import React from "react";

function Tags() {
    const buttons = new Array(11).fill("Tag Button");
    return (
        <div className="flex flex-wrap gap-2 p-4 border border-teal-500 rounded-lg shadow-md max-w-sm mx-auto">
        {buttons.map((label, index) => (
            <button
                key={index}
                className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition"
            >
                {label}
            </button>
        ))}
    </div>
    );
}

export default Tags; 