import React from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview />, div);
});
