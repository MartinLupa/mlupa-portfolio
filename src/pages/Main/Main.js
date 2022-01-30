import React from "react";
import { CircleLogo } from "../../components/CircleLogo/CircleLogo";
import { Presentation } from "../../components/Presentation/Presentation";
import { SocialMediaBar } from "../../components/SocialMediaBar/SocialMediaBar";

export const Main = () => {
  return (
    <>
      <CircleLogo />
      <SocialMediaBar />
      <Presentation />
    </>
  );
};
