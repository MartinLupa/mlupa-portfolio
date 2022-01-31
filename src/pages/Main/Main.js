import React from "react";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { CircleLogo } from "../../components/CircleLogo/CircleLogo";
import { MySkills } from "../../components/MySkills/MySkills";
import { Presentation } from "../../components/Presentation/Presentation";
import { Projects } from "../../components/Projects/Projects";
import { SocialMediaBar } from "../../components/SocialMediaBar/SocialMediaBar";
import { InfoPill } from "../../components/InfoPill/InfoPill";
import "./Main.css";

export const Main = () => {
  return (
    <>
      <div className="main-top">
        <InfoPill />
        <CircleLogo />
        <SocialMediaBar />
        <Presentation />
      </div>
      <AboutMe />
      <MySkills />
      <Projects />
    </>
  );
};
