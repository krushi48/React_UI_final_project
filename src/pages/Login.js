import React, { useState, useEffect } from 'react';
import AppContext from '../Context/AppContext/AppContext';


export default function Login(props) {
    let loginUrl = "http://localhost:3000/login"


    let [user, setUser] = useState([])
    let [password, setPassword] = useState([])
    let [newPassword, setNewPassword] = useState("")
    let [newUser, setNewUser] = useState("")

    let getUserDetails = async () => {
        let response = await fetch(loginUrl);
        let data = await response.json();
        console.log(data);
        setUser(data);
        setPassword(data);


    }
    useEffect(() => {

        getUserDetails();
    }, [])



    let addUser = async (event) => {
        event.preventDefault();
        console.log("adding new todos", newUser);
        let UserToAdd = {
            "username": newUser,
            "password": newPassword
        }
        let response = await fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(UserToAdd),
            headers: {
                "Content-Type": "application/json"
            },
        })
        let data = await response.json();
        console.log(data);
        setNewUser("")
        setNewPassword("")
        getUserDetails();

    }

    // function checkLogin(){
    //     if((newUser === AppContext.db.storedusername)&(newPassword===AppContext.db.storedpassword)){
    //         alert("Login successful")
    //         AppContext.setUserLoggedIn(true)
    //     }
    // }


    return (


        <div>

            <form  onSubmit={addUser} >
                <label>name: </label>
                <input type="text" value={newUser} onChange={event => { setNewUser(event.target.value) }}></input>

                <label>password: </label>
                <input onChange={event => { setNewPassword(event.target.value) }}></input>

                <button
{/*onClick={() => {
                            AppContext.addUserToJson(props.login)
                        }}*/}
                >Submit</button>

            </form>
            {user.map((login) => {
                return (
                    <UserDetails login={login} key={login.id} />
                )
            })}

        </div>
    )
}

function UserDetails(props) {
    return (
        <>{props.login.username}
            <br />
        </>
    )
}
