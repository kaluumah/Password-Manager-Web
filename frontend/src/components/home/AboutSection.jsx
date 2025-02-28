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
        <div className="flex justify-center text-center mt-10">
          <h1 className="abouttitletext text-white font-semibold inline-block">
            Everything About{" "}
            <span className="text-yellow-300">CycleCipher</span>
          </h1>
        </div>
        <p
          className="aboutparagraph flex justify-center text-center"
          style={{
            color: "var(--color-palepurple)",
            textIndent: "0", // optional, if needed
          }}
        >
          <p className="inline-block">
            This section covers everything you need to know about CycleCipher as
            well as the story behind it.&nbsp;
            <p>Answering three major questions: What? Why? and How?</p>
          </p>
        </p>
      </div>

      <section className="flex justify-center items-center py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* What Card */}
          <div className="aboutcards flip-card p-6 text-center text-white border-2 border-[#fde047] cursor-pointer">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3 className="text-3xl font-bold mb-4 text-[#d4c2f0]">
                  What?
                </h3>
                <p className="text-palepurple  leading-relaxed">
                  CycleCipher is a revolutionary platform designed to streamline
                  and secure your password management, offering a seamless way
                  to generate, store, and autofill credentials across your
                  devices. CycleCipher is a revolutionary platform designed to
                  streamline and secure your password management, offering a
                  seamless way to generate, store, and autofill credentials
                  across your devices. CycleCipher is a revolutionary platform
                  designed to streamline and secure your password management,
                  offering a seamless way to generate, store, and autofill
                  credentials across your devices. CycleCipher is a
                  revolutionary platform designed to streamline and secure your
                  password management, offering a seamless way to generate,
                  store, and autofill credentials across your devices.
                </p>
              </div>

              <div class="flip-card-back">
                <p class="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>

          {/* Why Card */}
          <div className="aboutcards p-6  text-center text-white border-2 border-[#fde047] cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-[#d4c2f0]">Why?</h3>
            <p className="text-palepurple  leading-relaxed">
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
            </p>
          </div>

          {/* How Card */}
          <div className="aboutcards p-6  text-center text-white border cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-[#d4c2f0]">How?</h3>
            <p className="text-palepurple  leading-relaxed">
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
              CycleCipher is a revolutionary platform designed to streamline and
              secure your password management, offering a seamless way to
              generate, store, and autofill credentials across your devices.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
