import React from "react";
import { SubHeader, MenuItem } from "@/components";
import { images, data } from "@/constants";
import { Button } from "@/components";

const menu = () => {
  return (
    <section id="menu" className="w-full py-24 lg:h-screen lg:py-10">
      <div className="container">
        <article className="w-full mb-10 text-center">
          <SubHeader
            classList={"flex flex-col items-center gap-y-4 justify-center"}
            title={"Menu that fits you palatte"}
          ></SubHeader>
          <h1 className="text-5xl font-bold font-cormorant text-golden">
            Today’s Special
          </h1>
        </article>

        <div className="flex flex-col items-center justify-center gap-12 lg:items-start lg:justify-between lg:flex-row">
          <article className="flex-col flex-1 w-full">
            <h2 className="w-full mb-10 text-4xl text-center font-cormorant">
              Wine & Beer
            </h2>
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              ></MenuItem>
            ))}
          </article>

          <article className="w-full md:w-[250px] lg:w-[400px]">
            <img src={images.menu.src} alt="" className="w-full h-auto" />
          </article>

          <article className="flex-col flex-1 w-full">
            <h2 className="w-full mb-10 text-4xl text-center font-cormorant">
              Cocktails
            </h2>
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                key={cocktails.title + index}
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
              ></MenuItem>
            ))}
          </article>
        </div>
        {/*  */}
        <div className="flex items-center justify-center w-full mt-10 ">
          <Button>View Menu</Button>
        </div>
      </div>
    </section>
  );
};

export default menu;
