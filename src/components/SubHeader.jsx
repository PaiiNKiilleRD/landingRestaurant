import React from "react";
import { images } from "@/constants";

const subheader = ({ title, classList }) => {
  return (
    <div className={`${classList} my-4`}>
      <p className="text-xl tracking-wider font-cormorant">{title}</p>
      <img src={images.spoon.src} alt="Spoon " />
    </div>
  );
};

export default subheader;
