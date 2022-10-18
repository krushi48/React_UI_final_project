import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, } from 'react'
import '../index.css';
import Loading from '../images/Loading.gif';

export default function AdSingle() {
    let { id } = useParams()
    let url = "http://localhost:3000/blogs/"
    let [blogs, setBlogs] = useState({})
    let [loading, setLoading] = useState(true)


    let getAllBlogs = async () => {
        let response = await fetch(url + id)
        let data = await response.json()
        console.log(data)
        setBlogs(data)
        setLoading(false)
    }


    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <>
            <div className='single_blog  h-screen'>


                <div className='singleblog p-6 '>
                    <div className='ml-10'><Link to={'/Admin'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                    </svg></Link>
                    </div>
                    <div className=' w-full mx-auto' ><p className='text-5xl font-bold text-center '>{blogs.title}</p></div>



                </div>
                <div className='mx-auto my-20 '>

                    {loading ? (<img className="mx-auto" src={Loading}/>) :

                        <>
                            <div className=" flex mx-auto ml-24 space-x-8">
                                <div className='w-4/12   '>
                                    <img className='w-fit h-auto' src={blogs.image} alt="Image" />
                                </div>


                                <div className='w-7/12 my-auto  w-full '>
                                    <div >
                                        <span className='font-bold text-lg text-black text-center  '> </span><p className='text-xl text-white'><div dangerouslySetInnerHTML={{ __html: (blogs.body) }} /><br></br></p>
                                      <div className=' mr-100'> <span className='text-2xl text-white  '>Category: </span><p className='text-xl text-white capitalize -mt-7 ml-28 ' dangerouslySetInnerHTML={{ __html: (blogs.category) }} /></div>
                                     
                                    </div>


                                </div>
                            </div>



                        </>
                    }
                </div>

            </div>
        </>
    )
}


