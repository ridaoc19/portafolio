import React, { useState } from 'react';
import Validation from '../../../components/utils/function/Validation';

const initialState = {
  change: [],
  validate: [],
  image:"",
  element: ""
}

function useValidation() {
  const [validation, setValidation] = useState(initialState)

  const response = Object.entries(validation.change).map(([key, value]) => {
    if (validation.validate.includes(key)) {

      if (Array.isArray(value)) {
        if (value.length === 0) return key
      } else {
        if (key === "image") {
          if(document.getElementById(validation.image)?.naturalWidth === 0) return key
        } else {
          const { type } = Validation(key, value, validation.change);
          if (type) return key
        }
      }
    }
  }).filter(f => f)

  response.length > 0
    ? document.getElementById(validation.element)?.setAttribute("disabled", "")
    : document.getElementById(validation.element)?.removeAttribute("disabled")

  return { setValidation }
}

export default useValidation;