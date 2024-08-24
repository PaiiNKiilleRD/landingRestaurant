import React from "react";

function button({ children, className }) {
  return (
    <button
      className={`${className} bg-golden px-6 py-3 text-xl font-bold tracking-wider text-black rounded-lg font-cormorant`}
    >
      {children}
    </button>
  );
}

export default button;
