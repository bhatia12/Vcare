import {
    GET_ERRORS,
    GET_SUCCESS,
  } from "./types";

export const cardData = (formData) => (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("tokenID"));
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://14.99.115.62:8090/Mediator/GetContents", requestOptions)
  .then(response => response.text())
  .then(res=> JSON.parse(res))
  .then(result =>
    dispatch({
      type: GET_SUCCESS,
      payload: result,
    }))
  .catch(error => 
    dispatch({
      type: GET_ERRORS,
      payload: error,
    })
  );
};


