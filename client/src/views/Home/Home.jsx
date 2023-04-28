import React, { useContext, useEffect } from "react";
import CreateContext from "../../components/hooks/context/CreateContext";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Experiences from "./sections/Experience/Experiences";
import Introduction from "./sections/Introduction/Introduction";
import Skills from "./sections/Skills/Skills";
import Work from "./sections/Work/Work";
import Modal from "../../components/Layout/Modal/Modal";


const Home = () => {
  const { login: { state: { user } }, works: { getWork } } = useContext(CreateContext)

  useEffect(() => {
    getWork({ route: user?.user_id ? user?.user_id : `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` })
    // eslint-disable-next-line
  }, [user])

  return (

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
        <Experiences />
      </section>
      <section className="home__container--work">
        <Work />
      </section>
      <section className="home__container--contact">
        <Contact />
      </section>
    </div>

  );
};

export default Home;
