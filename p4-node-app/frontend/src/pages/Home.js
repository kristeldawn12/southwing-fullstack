import React from "react";
import { SocialLinks } from "../components/SocialLinks";

const Home = () => {
  return (
    <div className="p-2 md:p-4 mx-3">
      <div className="md:flex gap-4 py-3">
        <div className="md:w-full py-4 px-5 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-7xl font-semibold py-5 text-darkRed flex gap-5">
            SouthWing <span className="text-yellow">Cafeteria</span>
          </h2>
          <p className=" text-2xl md:text-4xl py-5 text-center about-text text-marron">
            The owners of SouthWing Cafeteria are true culinary adventurers,
            with a passion for exploring and introducing new flavors to the
            market. Drawing on years of experience in the food industry, they
            set out to create something truly unique.
          </p>
          <p className="py-5 text-2xl md:text-4xl text-center about-text text-marron">
            In 2016, they opened SouthWing Cafeteria, a restaurant specializing
            in mouth-watering chicken wings.
          </p>
          <p className="py-5 text-2xl md:text-4xl text-center about-text text-marron">
            The name "South" pays homage to the owners' roots in the southern
            region of Cotabato, Philippines. Since then, SouthWing has expanded
            its menu to offer a diverse range of chicken-based dishes and
            non-pork options, all crafted with the same dedication to quality
            and flavor that defines the restaurant's mission.
          </p>
          <div className="text-3xl md:text-4xl flex flex-col gap-2 font-bold my-5 items-center text-yellow">
            <p>#EatsSOUTHWING</p>
            <p>#WingItEveryday</p>
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
