import './Home.css'
import { Link } from 'react-router-dom';
import React from 'react'
import { useState, useEffect } from 'react'

export default function AnimationPage() {
    let url = "http://localhost:3000/blogs"
    let [blogs, setBlogs] = useState([])
    let [loading, setLoading] = useState(true)

    let getAllBlogs = async () => {
        let response = await fetch(url)
        let data = await response.json()
        setBlogs(data)
        setLoading(false)
    }


    useEffect(() => {
        getAllBlogs()
    }, [])
    return (
        <>
            <div className='image'>

                <ul class="menu-area text-xl">
                    <li className="active"><a href="#">Home</a></li>
                    <li className="scroll-smooth"><a href='#blog'>Blogs</a></li>
                    <li><Link to='/login'>Login</Link></li>


                </ul>

            </div>


            <div class="welcome-text">

                <h2>WELCOME BLOGGERS!!</h2>
                <p className='text-l'>“One of the liberating things about having a blog is the total vision it allows.”</p><br />
                <Link to='/login'><button className="neon-button" id="neon">Get started</button></Link>
            </div>

            <div className='home_card p-5 -mt-2 flex flex-wrap' id='blog'>
                {loading ? ("loading") : (
                    blogs.map((blog) => {
                        return (
                            <BLOG blog={blog} key={blog.id} />
                        )
                    })
                )}
            </div>
        </>
    )
}

function BLOG(props) {


    return (
        <>
            <div className=" card w-1/3 p-6 m-4 mx-12 mt-4 flex flex-col flex-wrap lg:w-1/4 sm:1/2 md:1/3 border border-4 border-black bg-white" >
               
               <Link to={`/blogs/${props.blog.id}`}> <img className="h-56 w-64" src={props.blog.image} alt="no Image" /></Link>
                <p className=" w-full text-center mx-auto text-2xl mt-2">{props.blog.title}</p>

            </div>


        </>
    )
}