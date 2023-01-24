import React, { useEffect } from "react";
import useLoading from "../../../components/hooks/useLoading";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../style/loadingCss";
import Welcome from "../Welcome/Welcome";
import { useDispatch } from "react-redux";
import { getClient, postClient } from "../../../redux/actions";

const Responsive = () => {
  const loading = useLoading(12000);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postClient());
    // dispatch(getClient());
    // eslint-disable-next-line
  }, []);

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
            <div className="initial_title">
              <h1>Este portafolio está construido en Responsive web design</h1>
            </div>
            <div className="initial_loader">
              <div className="device"></div>
              <div className="device"></div>
              <div className="device"></div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Welcome />
      )}
    </>
  );
};

export default Responsive;
