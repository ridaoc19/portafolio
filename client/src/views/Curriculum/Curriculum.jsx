import React, { useContext, useEffect } from 'react';

import { jsPDF } from "jspdf";
import CreateContext from '../../components/hooks/context/CreateContext';
import { totalYear } from '../../components/utils/function/date';
import About from '../Home/sections/About/About';
import { LOADING_API_WORK } from '../../components/hooks/context/Works/types';

function Curriculum(props) {
  const { login: { state: { user, visitors } }, works: { getWork, loadingWork, dispatch, technologies, functions, company, education } } = useContext(CreateContext)

  useEffect(() => {
    getWork({ route: user?.user_id ? user?.user_id : `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` })

    return () => {
      dispatch({ type: LOADING_API_WORK })
    }

    // eslint-disable-next-line
  }, [user])


  const handleOnClick = (e) => {
    e.preventDefault()
    // window.print()
    const doc = new jsPDF('p', 'pt', 'letter');
    const margin = 10
    const scale = (doc.internal.pageSize.width - margin * 2) / document.body.scrollWidth
    doc.html(document.body, {
      x: margin, y: margin, html2canvas: { scale: scale }, callback: function (doc) {
        doc.output('dataurlnewwindow', { filename: 'portafolior.pdf' })
      }
    })
  }

  return (
    <div className='curriculum__container'>


      <div>
        <button onClick={handleOnClick}>imprimir</button>
        <img src="/profile.jpg" alt="" width="80" />
        <p>12 de febrero</p>
        <p>Nacionalidad Colombiano</p>
      </div>


      <div>

        <div>
          <About />
        </div>

        <div className='experience__container'>
          <div className='experience__title'>
            <h2>Experiencia Laboral</h2>
          </div>
          <div className='experience__content'>
            {company?.map((e, i) =>
              <div>

                <div key={i} className="company--content">
                  <div className="-date">
                    {/* <h6>{e.start_date} - {e.end_date}</h6> */}
                    <h6>{totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}</h6>
                  </div>

                  <div className="-image">
                    {e.image ? <img src={e.image} alt="img" width='20' /> : <img src={"https://cdn-icons-png.flaticon.com/128/5540/5540531.png"} width='20' alt="img" />}
                  </div>

                  <div className="-name">
                    {e.link ? <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a> : <h4>{e.name}</h4>}
                  </div>

                </div>

                <div className="-position">

                  {e.position?.map(p => <div className='position--content'>
                    <div className="-date">
                      {/* <h6>{p.start_date} - {p.end_date}</h6> */}
                      <h6>{totalYear(p.start_date, p.end_date === "Presente" ? Date.now() : p.end_date)}</h6>
                    </div>

                    <div className="-name">
                      {p.link ? <a href={p.link} target="_blank" rel="noreferrer">@{p.name}</a> : <h4>{p.name}</h4>}
                    </div>

                    <div className="-functions">
                      {p.functions?.map(f => {
                        const data = functions.find(d => d._id === f)
                        return (
                          <div className='functions--content'>

                            <div className="-date">
                              {/* <h6>{data.start_date} - {data.end_date}</h6> */}
                              <h6>{totalYear(data.start_date, data.end_date === "Presente" ? Date.now() : data.end_date)}</h6>
                            </div>

                            <div className="-image">
                              {data.image ? <img src={data.image} alt="img" width='20' /> : <img src={"https://cdn-icons-png.flaticon.com/128/5540/5540531.png"} width='20' alt="img" />}
                            </div>

                            <div className="-name">
                              {data.link ? <a href={data.link} target="_blank" rel="noreferrer">@{data.name}</a> : <h4>{data.name}</h4>}
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

      </div>


    </div >
  );
}

export default Curriculum;