import React from "react";

function button({ children }) {
  return (
    <button className="px-6 py-3 text-xl font-bold tracking-wider text-black bg-white rounded-lg font-cormorant">
      {children}
    </button>
  );
}

export default button;
