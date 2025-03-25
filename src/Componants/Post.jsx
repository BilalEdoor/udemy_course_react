import React from "react";

function Post({user}) {
  return (
    
    <div className="border-2 border-teal-600 p-4 mb-4 w-[400px] shadow-md bg-white text-center">
       <img
       
        src={user.image}
        alt={user.name}
        className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
      />
       <h2 className="text-xl font-bold mb-2"> {user.name} </h2>
      <hr className="border-gray-300 mb-2" />
      <p className="text-gray-600 text-sm">{user.email}</p>
    </div>
    
  );
}

export default Post;
