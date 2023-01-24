import React from "react";
import useLoading from "../../../components/hooks/useLoading";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../style/loadingCss";
import Home from "../../Home/Home";
import { useSelector } from "react-redux";

// const data = ["Medellín", "Antioquia", "Colombia", "South America"];

const Welcome = () => {
  const loading = useLoading(10000);
  const data_ip = useSelector((state) => state.data_ip);

  const data = [
    data_ip.continent,
    data_ip.country,
    data_ip.region,
    data_ip.city,
  ];

  return (
    <>
      {loading ? (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="initial_container">
            <div className="start_container">
              <div className="start_subcontainer">
                <h2>Gracias por visitarme desde</h2>
                <div className="content">
                  <div className="content__container">
                    <ul className="content__container__list">
                      {data?.map((e, i) => (
                        <li key={i} className="content__container__list__item">
                          <img src={data_ip.svg} alt="bandera" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Welcome;
