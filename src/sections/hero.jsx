import React from "react";
import { SubHeader, Button } from "@/components";
import { images } from "@/constants";

const hero = () => {
  return (
    <section
      id="home"
      className="flex items-center pt-[100px] lg:pt-0 justify-center py-10 bg-black lg:h-screen"
    >
      <div className="container flex items-center justify-between">
        <article className="flex flex-col  items-start justify-center flex-[0.5]">
          <SubHeader title={"Chase the new flavor"}></SubHeader>
          <h1 className="mt-4 text-3xl tracking-wider uppercase md:text-5xl lg:text-8xl font-cormorant text-golden">
            The key to fine dining
          </h1>
          <p className="my-8 font-open text-grey">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          {/* <button className="px-6 py-3 font-bold tracking-wider text-black bg-white font-cormorant">
            Explore Menu
          </button> */}
          <Button>Explore Menu</Button>
        </article>
        {/* SE PUEDE JUGAR CON EL FLEX O CON EL WIDTH? */}
        <article className=" flex-[0.40]">
          <img src={images.welcome.src} alt="" className="w-[600px]" />
        </article>
      </div>
    </section>
  );
};

export default hero;
