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
          <div className="inputbox">
            <i></i>
          </div>
          &nbsp;
          <h6 className=" text-2l text-white">About</h6>&nbsp;
          <div className="inputbox">
            <i></i>
          </div>
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

      <section className="flex justify-center items-center py-15">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* What Card */}
          <div className="aboutcards p-6 text-center text-white border-2 border-[#fde047] cursor-pointer">
            <h3 className="text-3xl font-bold mb-10 text-[#d4c2f0]">
              What is CycleCipher?
            </h3>
            <p className="text-palepurple  leading-relaxed">
              <b className="text-yellow-300">CycleCipher</b> is an advanced,
              autonomous password security platform that revolutionizes digital
              identity protection. It's an intelligent system designed to
              completely transform how users manage and secure their online
              credentials. Unlike traditional password managers, CycleCipher
              goes beyond simple storage by actively generating, rotating, and
              monitoring passwords across all your digital platforms with zero
              manual intervention.
              
            </p>
          </div>

         

          {/* How Card */}
          <div className="aboutcards p-6  text-center text-white border cursor-pointer">
            <h3 className="text-3xl font-bold mb-10 text-[#d4c2f0]">
              How Will CycleCipher Operate?
            </h3>
            <p className="text-palepurple  leading-relaxed">
              CycleCipher operates as an{" "}
              <b className="text-yellow-300">
                intelligent, autonomous security ecosystem that seamlessly
                generates, rotates, and monitors passwords across all platforms
              </b>
              . By leveraging advanced AI and quantum-resistant encryption, the
              system continuously analyzes platform-specific requirements,
              creates complex unique passwords, and automatically updates them
              based on real-time threat detection. Operating entirely in the
              background with zero-knowledge architecture, CycleCipher provides
              comprehensive digital security that adapts, learns, and protects
              without requiring any manual intervention from the user,
              transforming password management from a tedious task into an
              invisible, intelligent service.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
