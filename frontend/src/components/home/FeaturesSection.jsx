import React from "react";

const FeaturesSection = () => {
  return (
    <section classNameName=" ">
      {/* Top features entry animation */}
      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="featuresdiv mt-60">
        <div className="featurestitle flex justify-center items-center ">
          <div className="inputbox">
            <i></i>
          </div>
          &nbsp;
          <h6 className="text-white text-2l">Features</h6>&nbsp;
          <div className="inputbox">
            <i></i>
          </div>
        </div>

        <div className="flex justify-center text-center mt-10">
          <h1 className="featurestitletext text-white font-semibold inline-block">
            <span className="text-yellow-300">CycleCipher</span> Main Features{" "}
          </h1>
        </div>
        <p
          className="featuresparagraph flex justify-center text-center"
          style={{
            color: "var(--color-palepurple)",
            textIndent: "0", // optional, if needed
          }}
        >
          <p className="inline-block">
            Here we present to you the basics features and security
            implementation that makes <b>CycleCipher</b> a unique app.&nbsp;
            <p>Check out the basic and core features of the app</p>
          </p>
        </p>
      </div>

      {/* Features section and security card */}
    </section>
  );
};

export default FeaturesSection;
