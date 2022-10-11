import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Login() { 
    let loginUrl="http://localhost:3000/login"
    let [logIn,setlogIn]=useState([])

    async function getLoggedIn(){
        let response = await fetch(loginUrl);
        let result = await response.json();
        console.log(result);
        setlogIn(result);

    }

    useEffect(()=>{
     getLoggedIn();
    },[])
     
  return (


    <div>
        
    </div>
  )
}
