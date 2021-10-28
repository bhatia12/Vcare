import {
    GET_ERRORS,
    SET_CURRENT_USER,
  } from "./types";
export const loginUser = (formData) => (dispatch) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(formData),
    redirect: 'follow'
  };
  
  fetch("http://14.99.115.62:8090/Mediator/Login", requestOptions)
  .then(response => response.text())
    .then(res=> JSON.parse(res))
    .then(res => {
      localStorage.setItem("tokenID", res.data)
      res.success== "true" ? window.open("/", "_self") : window.open('/login', "_self")
      
  })
    .then(result =>{
      dispatch({
        type: SET_CURRENT_USER,
        payload: result,
      })
    })
    .catch(error => 
      dispatch({
        type: GET_ERRORS,
        payload: error,
      })
    );
};

