import {useEffect, useState} from 'react';
import axios from "axios";
import axiosFetch from '../config/axios';



useEffect(() => {
    const fetchSol = async () => {
      const result = await axiosFetch("/sol_entrantes");
      console.log("result :>>", result);
    };
    getSol();
  }, []);
  
