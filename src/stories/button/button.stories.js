import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";
import "./button.css";
storiesOf("Button", module)
  .add("Button", () => <Button label="Search" type="search" />)
// base code taken from storybook practice lab