import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
import dbs from '../db.json';

export default function Login() {
    let loginUrl = "http://localhost:3000/login"
    let [logIn, setlogIn] = useState([])

    async function getLoggedIn() {
        let response = await fetch(loginUrl);
        let result = await response.json();
        console.log(result);
        setlogIn(result);

    }

    useEffect(() => {
        getLoggedIn();
    }, [])

    return (


        <div>
            {dbs.login.map((db) => {
                return (
                    <div>
                       <h1>{db.username}</h1> 
                    </div>
                )
            })}
            
        </div>
    )
}
