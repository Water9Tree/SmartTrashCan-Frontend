import React from "react";
import { Image } from "react-native";

interface LogoSize {
  width: number;
  height: number;
}

const Logo = ({ width, height }: LogoSize) => (
  <Image
    source={require("../../assets/logo.png")}
    style={{ width: width, height: height }}
  />
);

export default Logo;
