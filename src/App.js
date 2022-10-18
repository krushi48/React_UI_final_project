import React from 'react';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AddBlog from './pages/AddBlogs';
import EditBlogs from './pages/EditBlogs'
import SingleBlog from './pages/SingleBlog';
import AdSingle from './pages/AdSingle'

export default function App(){
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path="/addblog" element={<AddBlog/>}/>
            <Route path='/EditBlogs/:id' element={<EditBlogs/>}/>
            <Route path='/blogs/:id' element={<SingleBlog/>}/>
            <Route path='/adsingle/:id' element={<AdSingle/>}/>
        </Routes>
    )
}