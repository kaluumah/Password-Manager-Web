import React from "react";

const IntegrationSection = () => {
  return (
    <section>
      <div className="loaderIntegration flex justify-center items-center">
        <div class="boxIntegartion box-1Integration">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="boxIntegartion box-2Integration">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="boxIntegartion box-3Integration">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="boxIntegartion box-4Integration">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
      </div>

      <div className="featuresdiv mt-60">
        <div className="integrationtitle flex justify-center items-center ">
          <div className="inputbox">
            <i></i>
          </div>
          &nbsp;
          <h6 className="text-white text-2l">Integration</h6>&nbsp;
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
    </section>
  );
};

export default IntegrationSection;
