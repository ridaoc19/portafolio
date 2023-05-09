import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../components/hooks/context/CreateContext";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Experiences from "./sections/Experience/Experiences";
import Introduction from "./sections/Introduction/Introduction";
import Skills from "./sections/Skills/Skills";
import User from "./sections/User/User";
import Work from "./sections/Work/Work";
import { LOADING_API_WORK } from "../../components/hooks/context/Works/types";


const Home = () => {
  const { login: { state: { user, visitors } }, works: { getWork, loadingWork, dispatch } } = useContext(CreateContext)
  const [flagAdmin, setFlagAdmin] = useState(false)
  const [getUser, setGetUser] = useState("")

  useEffect(() => {
    getWork({ route: user?.user_id ? user?.user_id : `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` })
    setGetUser(user?.user_id)
    setFlagAdmin(user?.user_id === `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` || Object.keys(user).length === 0 ? true : false)

    return () => {
      dispatch({ type: LOADING_API_WORK })
    }

    // eslint-disable-next-line
  }, [user])

  const handleOnChange = (e) => {
    getWork({ route: e.target.value })
    setGetUser(e.target.value)
    setFlagAdmin(e.target.value === `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` || Object.keys(user).length === 0 ? true : false)
  }

  return (
    <>
      {!loadingWork &&
        <div className="home__container">
          <section className="home__container--user">
            <User flagAdmin={flagAdmin} visitors={visitors} user={user} handleOnChange={handleOnChange} getUser={getUser} />
          </section>
          {flagAdmin && <section className="home__container--introduction">
            <Introduction />
          </section>}
          {flagAdmin && <section className="home__container--about">
            <About />
          </section>}
          <section className="home__container--skill">
            <Skills />
          </section>
          <section className="home__container--experience">
            <Experiences />
          </section>
          <section className="home__container--work">
            <Work />
          </section>
          {flagAdmin && <section className="home__container--contact">
            <Contact />
          </section>}
        </div>}
    </>
  );
};

export default Home;
