import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Button from "../components/Button";
import Contact from "../components/Contact";
import Design from "../components/Design";
import GitHub from "../components/GitHub";
import Other from "../components/Other";
import WebDev from "../components/WebDev";

const Home: NextPage = () => {
  return (
    <div>
      <div
        className="flex h-screen flex-col items-center justify-center py-2	"
        id="home"
      >
        <div className="absolute flex-col justify-center top-20 lg:top-10">
          <div className="flex justify-center text-main-white text-6xl select-none">
            kluczi
          </div>
          <div className="flex justify-center text-main-gray text-3xl select-none">
            student. designer. developer.
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 mx-6 gap-6 lg:grid lg:grid-rows-2 lg:grid-cols-3 items-center lg:gap-12 py-6">
          <Button id="about-me" buttonName="about me" />
          <Button id="design" buttonName="design" />
          <Button id="web-dev" buttonName="web dev" />
          <Button id="other" buttonName="other" />
          <Button id="github" buttonName="github" />
          <Button id="contact" buttonName="contact" />
        </div>
        <div className="absolute bottom-20 lg:bottom-10 justify-center text-main-gray text-3xl select-none items-end">
          scroll down
        </div>
      </div>

      <div id="about-me">
        <AboutMe />
      </div>

      <div id="design">
        <Design />
      </div>

      <div id="web-dev">
        <WebDev />
      </div>

      <div id="other">
        <Other />
      </div>

      <div id="github">
        <GitHub />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
