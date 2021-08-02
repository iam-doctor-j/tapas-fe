import React from "react";
import { ReactComponent as TapasLogo } from "../../assets/logo.svg";

const Logo = ({ width, height }) => (
  <React.Fragment>
    <TapasLogo
      style={{
        width: width ? width : "unset",
        height: height ? height : "unset",
      }}
      className="inline-block"
    />
  </React.Fragment>
);

export default Logo;
