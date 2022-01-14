import React from "react";

const Breadcumb = (title) => {
  return (
    <>
      <div
        className="breadcumb"
        // style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/slider-2.png) ;"
      >
        <div className="text-center p-4 ">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Breadcumb;
