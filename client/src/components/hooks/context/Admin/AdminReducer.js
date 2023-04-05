import { CLEAN_ADMIN, POST_ADMIN } from "./adminTypes";

export const initialState = {
  company: "",
  image_company: "",
  description_company: "",
  link_company: "",
  start_date_company: "",
  end_date_company: "",
  position: [
    {
      name_position: "",
      start_date_position: "",
      end_date_position: "",
      function: [
        {
          name_function: "",
          link_function: "",
          start_date_function: "",
          end_date_function: "",
          tecnologies: [],
          repository: "",
          tasks: [],
        },
      ],
    },
  ],
};

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case POST_ADMIN:
      return { ...state, [payload.name]: payload.value };

    case CLEAN_ADMIN:
      return initialState;

    default:
      return state;
  }
};
