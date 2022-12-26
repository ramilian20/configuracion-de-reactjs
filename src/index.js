import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./components/HelloWorld";

const divapp = document.getElementById("app");
const root = createRoot(divapp);
root.render(<HelloWorld />);
