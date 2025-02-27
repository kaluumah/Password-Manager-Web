import React from "react";

const AboutSection = () => {
  return (
    <section className=" mt-50">
      {/* This is the animation that comes before the aboutssection content */}
      <div className="loader">
        <div className="box box0">
          <div></div>
        </div>
        <div className="box box1">
          <div></div>
        </div>
        <div className="box box2">
          <div></div>
        </div>
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
          <div></div>
        </div>
        <div className="ground">
          <div></div>
        </div>
      </div>
      {/* Main About Section  content*/}
      <div>
        <div className="abouttitle flex justify-center items-center">
          <h6 className=" text-2l text-white">
            About 
          </h6>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
