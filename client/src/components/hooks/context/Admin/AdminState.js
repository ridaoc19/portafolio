import axios from 'axios';
import { useState } from "react";

function AdminState() {

  const [change, setChange] = useState([])
  const [loadingContext, setLoadingContext] = useState(true)

  const getWorkAdmin = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_URL}/works`);
   
    setChange(data.works)
    setLoadingContext(false)
  };



  // const updateAdmin = async (id) => {
  //   axios.put(`${process.env.REACT_APP_URL}/works/${id}`, { state })
  // }

  return {
    getWorkAdmin,
    setChange,
    change,
    loadingContext
  }
}

export default AdminState;
