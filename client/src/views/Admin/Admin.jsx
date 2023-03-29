import React, { useContext, useEffect } from "react";
import CreateContext from "../../components/hooks/context/CreateContext";
import Navbar from "../../components/Layout/Navbar/Navbar";
import Button from "./content/Button/Button";
import Company from "./content/Company/Company";
import Function from "./content/Function/Function";
import Position from "./content/Position/Position";

function Admin(props) {

  const { experience: {getExperience} } = useContext(CreateContext)
 
  useEffect(() => {
    getExperience()
    // eslint-disable-next-line
  }, [] )

  return (
    <>
      <Navbar />
        <div className="admin_container">
          <div>
            <Company />
          </div>
          <div>
            <Position />
          </div>
          <div>
            <Function />
          </div>
          <div>
            <Button/>
          </div>
        </div>
    </>
  );
}

export default Admin;