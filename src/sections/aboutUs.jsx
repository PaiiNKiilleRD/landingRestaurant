import React from "react";
import { images } from "@/constants";
import { Button } from "@/components";

const aboutUs = () => {
  return (
    <section id="about" className="relative w-full h-full pt-5 md:pt-0">
      <img
        src={images.bg.src}
        alt=""
        className="absolute inset-0  w-full h-[110%] md:h-full object-cover md:h-full -z-[5]"
      />

      <div className="absolute -z-[4] flex items-center justify-center w-full h-full ">
        <img
          src={images.G.src}
          alt="G Letter"
          className="w-[400px] h-[420px]  "
        />
      </div>
      <div className="container flex flex-col items-center justify-center w-full h-screen xl:flex-row">
        <article className="flex flex-col items-end justify-center w-full text-right gap-y-4 md:gap-y-6">
          <h1 className="text-5xl md:text-7xl text-golden font-cormorant">
            About Us
          </h1>
          <img src={images.spoon.src} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button>Know More</Button>
        </article>
        <div className="px-10 py-4 md:py-0 -z-[3]">
          <img
            src={images.knife.src}
            alt=""
            className="w-[40px] h-[320px] xl:w-[200px] xl:h-[600px] "
          />
        </div>
        <article className="flex flex-col items-start justify-center w-full text-left gap-y-4 md:gap-y-6">
          <h1 className="text-5xl md:text-7xl text-golden font-cormorant">
            Our History
          </h1>
          <img src={images.spoon.src} alt="" />
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <Button>Know More</Button>
        </article>
      </div>
    </section>
  );
};

export default aboutUs;
