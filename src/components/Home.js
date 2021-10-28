import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import {cardData} from "../actions/cardActions"
import { useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    if(localStorage.getItem('tokenID') === undefined) {
      props.history.push('/login')
    } 
    console.log("hello")
    dispatch(cardData())
  }, []);

  useEffect(() => {
    arrayBufferToBase64(data.apiRes.photo);
  }, [data]);
  
  function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    setContent(window.btoa( binary ));
  }
  
  return (
    <>
      <Nav />
    <div className="container mt-3">
      <div className="detail-outer">
        <div className="detail-img">
          <img src={`data:image/png;base64, ${content}`} alt="image"/>
        </div>
        <div className="detail-txt">
          <h2>{data.apiRes.givenName} {data.apiRes.familyName}</h2>
          <p>NHI: {data.apiRes.nhi}</p>
          <p>Room: {data.apiRes.roomNumber}</p>
          <p>{data.apiRes.location}</p>
          <p>{data.apiRes.facility}</p>
          <p>DOB: {data?.apiRes?.dateOfBirth?.substring(0, 10)}</p>
          <p>Department: {data.apiRes.department}</p>
          <p>Age: {data?.apiRes?.dateOfBirth?.substring(12,14)}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
