import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "./link";
import "./link.css";
storiesOf("Link", module)
  .add("Link", () => <Link text="Powered by NewsAPI"/>)
// base code taken from storybook practice lab