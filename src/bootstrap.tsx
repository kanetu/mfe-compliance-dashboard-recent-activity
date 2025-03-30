import React from "react";
import { createRoot } from "react-dom/client";
import RecentActivity from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RecentActivity />
  </React.StrictMode>
);
