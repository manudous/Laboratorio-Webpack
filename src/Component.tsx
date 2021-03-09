import React from "react";
import image from "./content/logo_2.png";

const Component: React.FC = () => {
  return (
    <div className="container">
      <h1>Hola desde Component</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default Component;
