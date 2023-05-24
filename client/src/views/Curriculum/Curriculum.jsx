import React, { useContext, useEffect } from 'react';

// import { jsPDF } from "jspdf";
import CreateContext from '../../components/hooks/context/CreateContext';
import { totalYear } from '../../components/utils/function/date';
import About from '../Home/sections/About/About';
import { LOADING_API_WORK } from '../../components/hooks/context/Works/types';
// import html2canvas from 'html2canvas';
// import html2pdf from 'html2pdf.js';
import html2pdf from 'html2pdf.js';
import { imageCors } from '../../components/utils/function/ImageCors';

function Curriculum() {
  const { login: { state: { user } }, works: { getWork, dispatch, functions, company } } = useContext(CreateContext)

  useEffect(() => {
    getWork({ route: user?.user_id ? user?.user_id : `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` })

    return () => {
      dispatch({ type: LOADING_API_WORK })
    }

    // eslint-disable-next-line
  }, [user])


  const handleOnClick = async (e) => {
    e.preventDefault()
    let imp = document.querySelector('.curriculum__container')

    const opt = {
      // margin: 1,
      filename: `Portafolio ${user?.user_id ? user?.user_id : "Ricardo David Ocampo"}`,
      image: { type: 'png' },
      html2canvas: { scale: 4, useCORS: true },
      jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' }
    };
    // html2pdf().from(imp).set(opt).save()
 html2pdf().from(imp).set(opt).save()

  }

  return (
    <div className='curriculum__container'>

      <div className='curriculum__button'>
        <button onClick={handleOnClick}>imprimir</button>
      </div>

      <div className='curriculum__content'>

        <header className='header__container'>
          <img src="/profile.jpg" alt="" width="80" />
          <div>
            <p>{"ridaoc19@gmail.com"}</p>
            <p>Nacionalidad Colombiano</p>
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
                        {e.image ? <img src={imageCors(e.image)} alt="img" /> : <img src={"https://cdn-icons-png.flaticon.com/128/5540/5540531.png"} width='20' alt="img" />}
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

            <div className='skill__container'>

              <div className='skill__title'>
                <h2>Habilidades</h2>
              </div>

              <div className='skill__content'>

              </div>
            </div>

          </div>

        </main>

        <footer>

        </footer>

      </div>



    </div >
  );
}

export default Curriculum;