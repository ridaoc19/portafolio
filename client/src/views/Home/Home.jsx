import React, { useContext, useEffect } from "react";
// import home from "../../components/json/home";
// import { Link } from "react-router-dom";
// import tecnologies from "../../components/json/tecnologies";
import Introduction from "./sections/Introduction/Introduction";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import CreateContext from "../../components/hooks/context/CreateContext";
import Experiences from "./sections/Experience/Experiences";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";


const Home = () => {
  const { works: { getWork } } = useContext(CreateContext)

  useEffect(() => {
    getWork()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div >
      <div className="home__container">
        <section className="home__container--introduction">
          <Introduction />
        </section>
        <section className="home__container--about">
          <About />
        </section>
        <section className="home__container--skill">
          <Skills />
        </section>
        <section className="home__container--experience">
          <Experiences/>
        </section>
        <section className="home__container--work">
          <Work/>
        </section>
        <section className="home__container--contact">
          <Contact/>
        </section>
      </div>
    </div>
  );
};

export default Home;
