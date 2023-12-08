import React, { useState } from "react";

const Button = ({ text, filled, onClick }) => {
  const [showCard, setShowCard] = useState(false);


  return (
    <div>
      <button
        type="button"
        className={
          filled
            ? "text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-md w-40"
            : "text-blue-800 bg-transparent border border-gray-400 p-3 rounded-md w-40"
        }
        onClick={() => {
          setShowCard(true);
          if (onClick) {
            onClick(); 
          }
        }}
      >
        {text || "Helpert"}
      </button>
    </div>
  );
};

export default Button;
