// import html2pdf from 'html2pdf.js';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateContext from '../../components/hooks/context/CreateContext';
import { LOADING_API_WORK } from '../../components/hooks/context/Works/types';
import { formatDate, totalYear } from '../../components/utils/function/date';
import { contact } from '../../components/utils/function/techCurriculum';
import About from '../Home/sections/About/About';

function Curriculum() {
  const navigate = useNavigate()

  const { login: { state: { user } }, works: { getWork, dispatch, functions, company, education, technologies } } = useContext(CreateContext)


  useEffect(() => {
    getWork({ route: user?.user_id ? user?.user_id : `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` })

    return () => {
      dispatch({ type: LOADING_API_WORK })
    }

    // eslint-disable-next-line
  }, [user])

  const handleOnClick = async (e) => {
    e.preventDefault()

    switch (e.target.name) {
      case "print":
        document.querySelector('.curriculum__button').style.display = 'none'
        window.print()
        document.querySelector('.curriculum__button').style.display = 'block'
        break;

      default:
        navigate(-1)
        break;
    }
  }

  return (
    <div id="element-to-print" className='curriculum__container'>

      <div className='curriculum__button'>
        <button onClick={handleOnClick}>volver</button>
        <button name='print' onClick={handleOnClick}>imprimir</button>
      </div>

      <div className='curriculum__content'>

        <header className='header__container'>
          {/* <img src="/profile.jpg" alt="" width="80" /> */}
          <div className='--contact'>
            <h2 >Contacto</h2>
            <div>
              {contact?.map((e, i) => <div key={i}>
                {e.name === "email" ?
                  (<><a href={`mailto:${e.url}`}>{e.image}</a><a href={`mailto:${e.url}`}>{e.user}</a></>) :
                  (<><a href={e.url} target="_blank" rel="noreferrer">{e.image} </a><a href={e.url} target="_blank" rel="noreferrer">{e.user} </a></>)
                }
              </div>)}
            </div>
          </div>

          <div className='--skill'>
            <h2>Habilidades</h2>

            <div className='skill__content'>
              <div>
                <h4>Frondtend</h4>

                <ul className="curriculum__skill--container">
                  {technologies?.map((e, i) => (
                    e.technologies === "Front end" &&
                    <div key={i} className="curriculum__skill--card">
                      <h4>{e.name}</h4>
                      <progress value={e.percentage} max="100">{e.percentage}</progress>
                      <span>{`${e.percentage ? e.percentage : 0} %`}</span>
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Backend</h4>
                <ul className="curriculum__skill--container">
                  {technologies?.map((e, i) => (
                    e.technologies === "Back end" &&
                    <div key={i} className="curriculum__skill--card">
                      <h4>{e.name}</h4>
                      <progress value={e.percentage} max="100">{e.percentage}</progress>
                      <span>{`${e.percentage ? e.percentage : 0} %`}</span>
                    </div>
                  ))}
                </ul>

                <h4>Otros</h4>
                <ul className="curriculum__skill--container">
                  {technologies?.map((e, i) => (
                    e.technologies === "Otros" &&
                    <div key={i} className="curriculum__skill--card">
                      <h4>{e.name}</h4>
                      <progress value={e.percentage} max="100">{e.percentage}</progress>
                      <span>{`${e.percentage ? e.percentage : 0} %`}</span>
                    </div>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <div className='--language'>
            <h2>Idioma</h2>
            <p>Español - Nativo</p>
          </div>
        </header>

        <main>
          <div className='about__experience__education'>

            <div className='about__container'>
              <h2 >Ricardo David Ocampo</h2>
              <h4>Ingreso a Portafolio <a href="https://portafolio-rose-eight.vercel.app" target="_blank" rel="noreferrer">https://portafolio-rose-eight.vercel.app</a></h4>
              <About />
            </div>

            <div className='experience__container'>

              <div className='experience__title'>
                <h2>Experiencia Laboral</h2>
              </div>

              <div className='experience__content'>
                {company?.map((e, i) =>
                  <div key={i} className={`s${e._id}`}>
                    <div className="company--content">
                      <div className="-name">
                        <h3>
                          {e.link ? <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a> : <h4>{e.name}</h4>}
                        </h3>
                      </div>
                      <div className="-date">
                        {/* <h6>{e.start_date} - {e.end_date}</h6> */}
                        <h6>{totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}</h6>
                      </div>
                    </div>

                    <div className="position__container">
                      {e.position?.map((p, i) =>
                        <div key={i} className='position--content'>
                          <div className="-name">
                            {p.link ? <a href={p.link} target="_blank" rel="noreferrer">@{p.name}</a> : <h4>{p.name}</h4>}
                          </div>

                          <div className="-functions">
                            {p.functions?.map((f, i) => {
                              const data = functions.find(d => d._id === f)
                              console.log(data)
                              return (
                                <div key={i} className='functions--content'>
                                  <div className="-name">
                                    {data.link ? <a href={data.link} target="_blank" rel="noreferrer">@{data.name}</a> : <h5>{data.name}</h5>}
                                  </div>
                                  <div className='-tasks'>
                                    <ul>
                                      {data.tasks?.map((e, i) => <li key={i}>{e}</li>)}
                                    </ul>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>



            <div className='education__container'>

              <div className='education__title'>
                <h2>Fromación</h2>
              </div>
              <div className='education__content'>
                {education?.map((e, i) => {
                  return (
                    <div key={i} className="curriculum__education--content">
                      <div className="education__content--one">
                        <div className="education__content--title">
                          <h3>
                            <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a>
                          </h3>
                        </div>
                      </div>
                      {e.title_id.length !== 0 &&
                        <div className="education__content--two">
                          <ul >
                            {e.title_id?.map((e, i) =>
                              <div key={i}>
                                <a href={e.image} target="_blank" rel="noreferrer">{e.name}</a>
                                <i>
                                  {` (${formatDate(e.start_date).date} - ${formatDate(e.end_date).state
                                    ? formatDate(e.end_date).state
                                    : formatDate(e.end_date).date})`}
                                </i>
                              </div>
                            )}
                          </ul>
                        </div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div >
  );
}

export default Curriculum;