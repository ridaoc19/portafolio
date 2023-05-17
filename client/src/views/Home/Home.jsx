import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "../../components/Layout/Modal/Modal";
import CreateContext from "../../components/hooks/context/CreateContext";
import { LOADING_API_WORK } from "../../components/hooks/context/Works/types";
import ModalScroll from "./ModalScroll/ModalScroll";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Experiences from "./sections/Experience/Experiences";
import Introduction from "./sections/Introduction/Introduction";
import Skills from "./sections/Skills/Skills";
import User from "./sections/User/User";
import Work from "./sections/Work/Work";


const Home = () => {
  const { login: { state: { user, visitors } }, works: { getWork, loadingWork, dispatch }, modal: { setModal, modal } } = useContext(CreateContext)
  const scrollRef = useRef();
  const [flagAdmin, setFlagAdmin] = useState(false)
  const [getUser, setGetUser] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const { y } = scrollRef?.current?.getBoundingClientRect()

      if (sessionStorage?.scroll) window.removeEventListener('scroll', handleScroll)
      if (y < 90 && y > 80 && !sessionStorage?.scroll) {
        sessionStorage.scroll = true
        setModal({ ...modal, avalible: true, animation: "slideInOutLeft", element: "home__modal-scroll" })
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
     // eslint-disable-next-line
  }, [])

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
          <div id="home__modal-scroll">
            <Modal header="Instrucciones para interactuar con la pagina" >
              {<ModalScroll />}
            </Modal>
          </div>
          <section ref={scrollRef} className="home__container--user">
            <User flagAdmin={flagAdmin} visitors={visitors} user={user} handleOnChange={handleOnChange} getUser={getUser} />
          </section>
          {flagAdmin &&
            <section className="home__container--introduction">
              <Introduction />
              <hr />
            </section>}
          {flagAdmin &&
            <section className="home__container--about">
              <About />
              <hr />
            </section>}
          <section className="home__container--skill">
            <Skills />
            <hr />
          </section>
          <section className="home__container--experience">
            <Experiences />
            <hr />
          </section>
          <section className="home__container--work">
            <Work />
            <hr />
          </section>
          <section className="home__container--education">
            <Education />
            <hr />
          </section>
          {flagAdmin &&
            <footer className="home__container--contact">
              <Contact />
            </footer>}
        </div>}
    </>
  );
};

export default Home;
