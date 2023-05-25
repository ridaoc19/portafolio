// import html2pdf from 'html2pdf.js';
import React, { useContext, useEffect, useState } from 'react';
import CreateContext from '../../components/hooks/context/CreateContext';
import { LOADING_API_WORK } from '../../components/hooks/context/Works/types';
import { formatDate, totalYear } from '../../components/utils/function/date';
import About from '../Home/sections/About/About';
import { techValue, contact } from '../../components/utils/function/techCurriculum';
import { useNavigate } from 'react-router-dom';

function Curriculum() {
  const navigate = useNavigate()

  const { login: { state: { user } }, works: { getWork, dispatch, functions, company, education, technologies } } = useContext(CreateContext)
  const [tech, setTech] = useState()


  useEffect(() => {
    getWork({ route: user?.user_id ? user?.user_id : `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` })

    return () => {
      dispatch({ type: LOADING_API_WORK })
    }

    // eslint-disable-next-line
  }, [user])

  useEffect(() => {
    setTech(technologies?.map(e => {
      return Object.assign(e, { value: techValue(e.name) })
    }));
  }, [technologies])

  const handleOnClick = async (e) => {
    e.preventDefault()

    switch (e.target.name) {
      case "print":
        document.querySelector('.curriculum__button').style.display = 'none'
        window.print()
        document.querySelector('.curriculum__button').style.display = 'block'

        // const opt = {
        //   // margin: 1,
        //   filename: `Portafolio ${user?.user_id ? user?.user_id : "Ricardo David Ocampo"}`,
        //   image: { type: 'png' },
        //   html2canvas: { scale: 4, useCORS: true },
        //   jsPDF: { unit: 'pt', format: 'ledger', orientation: 'portrait', floatPrecision: 'smart' }
        // };
        // html2pdf().from(imp).set(opt).save()
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
          <img src="/profile.jpg" alt="" width="80" />
          <div>
            <h2 >Ricardo David Ocampo</h2>
            <div>
              {contact?.map((e, i) => <div key={i}>
                {e.name === "email" ?
                  (<a href={`mailto:${e.url}`}>{e.image} <p>{e.user}</p></a>) :
                  (<a href={e.url} target="_blank" rel="noreferrer">{e.image} <p>{e.user}</p></a>)
                }
              </div>)}
            </div>
          </div>
        </header>

        <main>
          <div className='about__container'>
            <About />
          </div>
          <div className='experience__skill'>

            <div className='experience__container'>

              <div className='experience__title'>
                <h2>Experiencia Laboral</h2>
              </div>

              <div className='experience__content'>
                {company?.map((e, i) =>
                  <div key={i}>
                    <div className="company--content">
                      <div className="-image">
                        {e.image ? <img src={e.image} alt="img" /> : <img src={"https://cdn-icons-png.flaticon.com/128/5540/5540531.png"} width='20' alt="img" />}
                      </div>
                      <div className="-name">
                        {e.link ? <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a> : <h4>{e.name}</h4>}
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
                          <div className="-date">
                            {/* <h6>{p.start_date} - {p.end_date}</h6> */}
                            <h6>{totalYear(p.start_date, p.end_date === "Presente" ? Date.now() : p.end_date)}</h6>
                          </div>

                          <div className="-functions">
                            {p.functions?.map((f, i) => {
                              const data = functions.find(d => d._id === f)
                              return (
                                <div key={i} className='functions--content'>
                                  <div className="-date">
                                    <h6>{data.start_date} - {data.end_date}</h6>
                                    {/* <h6>{totalYear(data.start_date, data.end_date === "Presente" ? Date.now() : data.end_date)}</h6> */}
                                  </div>
                                  <div className="-image">
                                    {data.image ? <img src={data.image} alt="img" width='20' /> : <img src={"https://cdn-icons-png.flaticon.com/128/5540/5540531.png"} width='20' alt="img" />}
                                  </div>
                                  <div className="-name">
                                    {data.link ? <a href={data.link} target="_blank" rel="noreferrer">@{data.name}</a> : <h5>{data.name}</h5>}
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
            <div className="html2pdf__page-break"></div>

            <div className='skill__container'>
              <h2>Habilidades</h2>

              <div className='skill__content'>
                <div>
                  <h4>Frondtend</h4>

                  <ul className="curriculum__skill--container">
                    {tech?.map((e, i) => (
                      e.technologies === "Front end" &&
                      <div key={i} className="curriculum__skill--card">
                        <img src={e.image} alt="img" />
                        <h4>{e.name}</h4>
                        <progress value={e.value} max="100">{e.value}</progress>
                      </div>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Backend</h4>
                  <ul className="curriculum__skill--container">
                    {tech?.map((e, i) => (
                      e.technologies === "Back end" &&
                      <div key={i} className="curriculum__skill--card">
                        <img src={e.image} alt="img" />
                        <h4>{e.name}</h4>
                        <progress value={e.value} max="100">{e.value}</progress>
                      </div>
                    ))}
                  </ul>

                  <h4>Otros</h4>
                  <ul className="curriculum__skill--container">
                    {tech?.map((e, i) => (
                      e.technologies === "Otros" &&
                      <div key={i} className="curriculum__skill--card">
                        <img src={e.image} alt="img" />
                        <h4>{e.name}</h4>
                        <progress value={e.value} max="100">{e.value}</progress>
                      </div>
                    ))}
                  </ul>
                </div>

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
                        <div className="education__content--image">
                          <img src={e.image} alt="logo" />
                        </div>
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