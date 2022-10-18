import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {  useNavigate, useParams, Link } from 'react-router-dom';


export default function EditBlogs() {

  let {id}=useParams();

  let editor=useRef(null)
  let url="http://localhost:3000/blogs/"
    let[blogs,setBlogs]=useState([])
    let[loading,setLoading]=useState(true)

    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [body,setBody]=useState('')
    const [image,setImage]=useState('')
    const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() +1
  }/${current.getFullYear()}`;

    const navigate=useNavigate()

  
  let urlId="http://localhost:3000/blogs/"

  let InputField= async ()=>{
    let response=await fetch(urlId+id)
      let data= await response.json()
      setTitle(data.title)
      setBody(data.body)
      setCategory(data.category)
      setImage(data.image)

  }
  

  let EditBlog = async(event) =>{
    event.preventDefault()
    alert("Edited")

    console.log("Editing Blog with id",id)
    let response= await fetch(url+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"title":title, "body":body, "category":category, "image":image,"date":date})
    })

    let d= await response.json()
    console.log(d)

   
    navigate('/Admin')
  }

  useEffect(()=>{
    setTitle(title)
    setCategory(category)
    setBody(body)
    setImage(image)

  },[title,category,body,image])

  useEffect(()=>{
    InputField()
  },[])

  return(
    <>
      <div className='editor py-28  px-auto pl-4  w-5/6 mx-auto h-screen'>
        <div className=' w-2/3 mx-auto h-5/6 text-black border-2 p-5 bg-transparent rounded-2xl  '>
         
          <br />
         
          <input className='w-full text-center h-10' type="text" placeholder='Title' value={title} onChange={(event) => {
            setTitle(event.target.value)
          }} />

          <br />
          <br />
         
          <div className='bg-slate-100'>
            <ReactQuill placeholder="description" theme="snow" value={body} onChange={setBody} /></div>
          <br />

          <div className='flex space-x-8 mx-10 text-white text-xl '>
            <div>
              <input type="radio" id="food" name='category' value="food" onChange={(event) => { setCategory(event.target.value) }} />
              <label for="food" className='ml-2'>Food</label>
            </div>
            <div>
              <input type="radio" id="tech" name='category' value="tech" onChange={(event) => { setCategory(event.target.value) }} />
              <label for="tech" className='ml-2'>Tech</label>
            </div>
            <div>
              <input type="radio" id="pets" name='category' value="pets" onChange={(event) => { setCategory(event.target.value) }} />
              <label for="pets" className='ml-2'>Pets</label>
            </div>
            <div>
              <input type="radio" id="fashion" name='category' value="fashion" onChange={(event) => { setCategory(event.target.value) }} />
              <label for="fashion" className='ml-2'>Fashion</label>
            </div>
            <div>
              <input type="radio" id="fitness" name='category' value="fitness" onChange={(event) => { setCategory(event.target.value) }} />
              <label for="fitness" className='ml-2'>Fitness</label>
            </div>
            <div>
              <input type="radio" id="travel" name='category' value="travel" onChange={(event) => { setCategory(event.target.value) }} />
              <label for="travel" className='ml-2'>Travel</label>
            </div>
          </div>


         
          <input className='w-full mt-4 text-center h-8' type="text" placeholder='Image URL Only' value={image} onChange={(event) => {
            setImage(event.target.value)
          }} />

          <div className='edit_button flex mt-4  space-x-40 '>
            <button className='button1 text-white  w-16 h-12 mx-28' type="submit" onClick={EditBlog}  >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" mx-auto w-10 h-12 py-2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button >

            <Link to='/Admin'><button className='button2 text-white bg-red-700 w-16 h-12'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='p-4 -mt-2' >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg></button>
            </Link>

          </div>



        </div>
      </div>
   </> 
  )
}