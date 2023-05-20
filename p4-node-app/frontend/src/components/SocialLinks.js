import React from "react";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";

export const SocialLinks = () => {
  return (
    <div className="flex py-2">
      <a
        href="https://www.facebook.com/SouthWingCafeteria"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookLogo} alt="facebook" className="w-[4em]"></img>
      </a>
      <a
        href="https://www.instagram.com/southwingcafeteria/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramLogo} alt="instagram" className="w-[4em]"></img>
      </a>
    </div>
  );
};

export default SocialLinks;
