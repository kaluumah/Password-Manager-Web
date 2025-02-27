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
          <h6 className=" text-2l text-white">About</h6>
        </div>
        <div className="flex justify-center items-center mt-10">
          <h1 className="abouttitletext text-white font-semibold">
            Everything About{" "}
            <span className="text-yellow-300">CycleCipher</span>
          </h1>
        </div>
        <p
          className="aboutparagraph flex justify-center "
          style={{
            color: "var(--color-palepurple)",
            textIndent: "0", // optional, if needed
          }}
        >
          <span className="inline">
            This section covers everything you need to know about CycleCipher as
            well as the story behind it.&nbsp;
          </span>
          <br />
          <span className="inline-block">
            Answering three major questions: What? Why? and How?
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
