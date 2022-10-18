import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
   
    const navigate = useNavigate();
    let [userloggedIn, setUserLoggedIn] = useState(false)
    const db = {
        storedusername: "admin",
        storedpassword: "12345"
    }

    let [userName, setUserName] = useState("")
    let [password, setPassword] = useState("")

    function checkLogin() {
        if ((userName === db.storedusername) & (password === db.storedpassword)) {
           
            setUserLoggedIn(true)
            navigate('/Admin')
        }
        else {
            alert("Sorry!! You are not an Admin.")
            setUserLoggedIn(false)
        }

    }
    return (
        <div className='login_banner bg-black h-screen p-2'>
            <div className='login_container'>
                <div className='login-form'>
                    <form onSubmit={checkLogin}>
                        <div className='login_input-feld '>

                            <label className='text-2xl'>Username</label>
                            <br/>
                            <input value={userName} onChange={(event) => {
                                setUserName(event.target.value)
                            }} className="box-border border-2" type="text"  required></input><br />
                            <label className='text-2xl'>Password</label>
                            <br/>
                            <input value={password} onChange={(event) => {
                                setPassword(event.target.value)
                            }} className="border-2" type="text"  required /><br />

                            <button className='mx-auto' type='Submit'>Login</button>

                            {/* <a href=''></a> */}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}