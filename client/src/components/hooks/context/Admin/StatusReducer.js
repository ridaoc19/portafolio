import { STATUS } from "./adminTypes";

export const initialStateStatus = {
  company_add_position: false,
  company_fields: false,
  company_add: true,
  company_render: true,
  company_position_id: "",

 
  position_add_function: false,
  position_fields: false,
  position_add: true,
  position_render: true,

  position_save: true,
  position_function_id: "",



  function_fields: false,
  function_add: true,
  function_render: true,
  function_add_technologies: false,


  
  function_save: true,
  function_function_id: "",

};

const StatusReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case STATUS:
      return Object.assign({ ...state }, payload)

    case 'CLEAN':
      return initialStateStatus

    default:
      return state;
  }
};

export default StatusReducer