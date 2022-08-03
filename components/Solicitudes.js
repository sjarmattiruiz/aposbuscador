/*import {useEffect, useState} from 'react';
import axios from "axios";
import axiosFetch from '../config/axios';



useEffect( () => {
    const getSol = async () => {
      const result = await axiosFetch("/sol_entrantes");
      console.log("result :>>", result);
    };
    getSol();
  }, []);
  
*/

import React, { useState, useEffect } from 'react';

export default function Solicitudes() {
  const [result, setResult] = useState();
  const [blogs, setBlogs] = useState([]); 
  
  useEffect(()=>{
    fetch('http://siscon.info/api/sol_entrantes', {
      method: "GET",
      headers: {"Authorization": `Bearer qFaUFzzBIF3M6uwN`}
    }).then(res => res.json()).then(json => setResult(json));
  },[]);

  return (
    <>
      {JSON.stringify(result)}
    </>
  );
};
