import React from "react";

function HeaderButton({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="font-poppins hover-lift cursor-pointer font-semibold tracking-wide text-gray-300 transition-colors duration-200 hover:text-white"
    >
      {text}
    </button>
  );
}

export default HeaderButton;
