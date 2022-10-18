import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../index.css'
export default function Admin() {

    let url = "http://localhost:3000/blogs/"
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

    let deleteBlog = async (id) => {
        alert("Delete?")
        console.log("Deleting todo with id", id)
        let response = await fetch(url + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        getAllBlogs();
    }


    return (
        <div className='admin_body'>
            <title>Admin Dashboard | By Code Info</title>




            <div class="container p-2">

                <div className=" admin_header fixed rounded-md h-12 flex w-full justify-end p-2">


                    <ul className='hd_ul mt-12 space-x-16 flex justify-end -mr-20'>
                        <li className="hd_li">
                    <Link to={'/'}><button className="hd_home ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 mt-3">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>

                        <p className="hide">Home</p>
                    </button></Link>
                    </li>


                    <li className="hd_li">
                    <Link to={`/AddBlog`}>
                        <button className="AddBlogs hd_add " type="click"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 mt-3">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </Link>
                    </li>


                    <li className="hd_li">

                    <Link to={'/'}><button className="hd_out "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8 mt-3">
                        <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                    </svg>
                    </button></Link>
                    </li>
                    </ul>

                </div>


                <div className=' p-5 mt-4 flex flex-wrap '>
                    {loading ? ("loading") : (
                        blogs.map((blog) => {
                            return (
                                <BLOG blog={blog} key={blog.id} deleteBlog={deleteBlog} />
                            )
                        })
                    )}
                </div>


            </div>









        </div >

    )
}

function BLOG(props) {
    let body = props.blog.body
    let summary = props.blog.summary

    return (
        <>
            <div className=" card w-1/3  p-6 m-4 mx-12 mt-16 flex flex-col lg:w-1/4 sm:1/2 md:1/3 border border-4 border-black bg-white">
            <Link to={`/adsingle/${props.blog.id}`}> <img className="h-56 w-64 bg-red-800 " src={props.blog.image} alt="No Image" /></Link>
                <p className=" w-full text-center mx-auto text-2xl mt-2 ">{props.blog.title}</p>

                {/* <div
      dangerouslySetInnerHTML={{__html: body}}
    /> */}




                {/* <div
                    dangerouslySetInnerHTML={{ __html: summary }}
                /> */}
                <div className="flex w-full space-x-10 mx-auto text-center  mt-4 ">
                    <div className='w-1/2 '>
                    <button onClick={() => {
                        props.deleteBlog(props.blog.id)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    </div>
                    <div className='w-1/2 '>
                    <button className="">
                        <Link to={`/EditBlogs/${props.blog.id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg></Link>
                    </button>
                    </div>

                </div>
            </div>





        </>
    )
}
