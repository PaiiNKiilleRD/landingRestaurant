import React from "react";

const menuitem = ({ title, price, tags }) => {
  return (
    <article className="flex flex-col w-full my-6 lg:my-12">
      <header className="flex items-center justify-between w-full lg:text-xl">
        <p className="font-bold  min-w-[120px] tracking-wide font-cormorant text-golden">
          {title}
        </p>

        <div className="w-[90px] h-[1px] bg-golden mx-4"></div>
        <div className="flex items-end justify-end">
          <p className="font-sans text-white">{price}</p>
        </div>
      </header>
      <div className="w-full mt-1">
        <p className="font-sans text-sm text-gray">{tags}</p>
      </div>
    </article>
  );
};

export default menuitem;
