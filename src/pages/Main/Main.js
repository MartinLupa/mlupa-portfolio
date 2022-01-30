import React from "react";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { CircleLogo } from "../../components/CircleLogo/CircleLogo";
import { Presentation } from "../../components/Presentation/Presentation";
import { SocialMediaBar } from "../../components/SocialMediaBar/SocialMediaBar";
import "./Main.css";

export const Main = () => {
  return (
    <>
      <div className="main-top">
        <CircleLogo />
        <SocialMediaBar />
        <Presentation />
      </div>
      <AboutMe />
    </>
  );
};
