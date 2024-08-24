import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeaderJSX, ButtonJSX } from "@/components";
import { images } from "@/constants";
import { useRef } from "react";
import { Image } from "astro:assets";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 310;
    } else {
      current.scrollLeft += 310;
    }
  };

  return (
    <section className="w-full mb-10 md:my-14 md:pt-12 lg:my-10 lg:mb-20 flex">
      <div className="flex-col md:flex-row gap-5 md:gap-0 flex w-full items-center md:overflow-hidden ">
        <div className="lg:flex-1 flex flex-col pl-12 lg:pl-[380px]  lg:pr-28 items-start justify-center  ">
          {/* <SubHeaderJSX title={"Instagram"}></SubHeaderJSX> */}
          <h2 className=" mb-5 text-3xl tracking-wider uppercase md:text-5xl font-cormorant text-golden">
            Photo Gallery
          </h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            quidem.
          </p>
          {/* <ButtonJSX>View More</ButtonJSX> */}
        </div>
        <div className="relative w-full md:max-w-[50%] flex-1 flex items-center ">
          <div
            ref={scrollRef}
            className="pl-10 md:pl-0 flex gap-4 w-max overflow-x-scroll no-scrollbar"
          >
            {galleryImages.map((image, index) => (
              <div
                className=" relative [&>div]:opacity-50 [&>div]:hover:opacity-100 cursor-pointer min-w-[300px] h-[450px] [&>img]:hover:opacity-35 opacity-100 transition-all duration-300 ease-in-out "
                key={`gallery_image-${index + 1}`}
              >
                <img
                  src={image.src}
                  loading="lazy"
                  alt=""
                  className="w-full transition-all duration-500 ease-in-out h-full object-cover "
                />
                <div className="absolute transition-all duration-500 ease-in-out inset-0 flex items-center justify-center  w-full h-full">
                  <BsInstagram size={48} className=""></BsInstagram>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full absolute flex items-center justify-between">
            <BsArrowLeftShort
              className="bg-black cursor-pointer rounded-full text-golden"
              size={48}
              onClick={() => scroll("left")}
            ></BsArrowLeftShort>
            <BsArrowRightShort
              className="bg-black cursor-pointer rounded-full text-golden"
              size={48}
              onClick={() => scroll("right")}
            ></BsArrowRightShort>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
