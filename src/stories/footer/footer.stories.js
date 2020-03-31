import React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./footer";
import "./footer.css";
storiesOf("Footer", module)
  .add("Footer", () => <Footer label="Search" type="search" />)
// base code taken from storybook practice lab