import React from "react";
import { SubHeader } from "@/components";
import { images } from "@/constants";

const chef = () => {
  return (
    <section
      id="chef"
      className="relative flex items-center justify-center lg:h-screen"
    >
      <img
        src={images.bg.src}
        alt=""
        className="absolute inset-0  w-full h-[110%] md:h-full object-cover -z-[5]"
      />
      <div className="container flex items-center justify-center gap-x-20">
        <article className="w-[400px]">
          <img src={images.chef.src} alt="" className="w-full" />
        </article>
        <article className="flex flex-col gap-y-6 w-[40%]">
          <SubHeader title={"Chef's Word"} />
          <h1 className="text-5xl font-bold tracking-wide text-golden font-cormorant">
            What we believe in
          </h1>
          <div>
            <div className="flex items-end justify-start gap-4">
              <img src={images.quote.src} alt="" className="w-[60px]" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </p>
            </div>
            <p>
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-wide text-golden font-cormorant">
              Kevin Luo
            </h2>
            <p className="text-gray">Chef & Founder</p>
          </div>
          <img src={images.sign.src} alt="" className="w-[160px]" />
        </article>
      </div>
    </section>
  );
};

export default chef;
