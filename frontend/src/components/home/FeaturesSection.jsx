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

      <section className="flex justify-center items-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="containerfeatures noselect grid grid-cols-1 md:grid-cols-3 gap-10 px-10"
            >
              <div>
                <div className="canvas">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((trackerIndex) => (
                    <div
                      key={trackerIndex}
                      className={`tracker tr-${trackerIndex}`}
                    ></div>
                  ))}
                  <div id="card">
                    <div className="card-content">
                      <div className="card-glare"></div>
                      <div className="cyber-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <p id="prompt">Advanced password generation algorithm</p>
                      <div className="title">Features</div>
                      <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                      </div>
                      <div className="subtitle">
                        <span className="highlight">CycleCipher</span>
                      </div>
                      <div className="card-particles">
                        {[1, 2, 3, 4, 5, 6].map((particleIndex) => (
                          <span key={particleIndex}></span>
                        ))}
                      </div>
                      <div className="corner-elements">
                        {[1, 2, 3, 4].map((cornerIndex) => (
                          <span key={cornerIndex}></span>
                        ))}
                      </div>
                      <div className="scan-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FeaturesSection;
