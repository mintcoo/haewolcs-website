import "./src/styles/global.css";
import React from "react";
import { RecoilRoot } from "recoil";

export const wrapRootElement = ({ element, props }) => (
  <RecoilRoot {...props}>{element}</RecoilRoot>
);
