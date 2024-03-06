import React, { useState } from 'react';
// import { Button } from 'bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogForm = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title.length === 0){
      toast.error("Title is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000 
      })
    } else if (data.author.length === 0){
      toast.error("Author is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      })
    } else if (data.body.length === 0){
      toast.error("Body is required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      })
    } else {
      
   

    axios.post('http://localhost:4000/blogs', data)
      .then(res => {
        toast.success("New Blog Added Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
        });
      })
      .catch(err => {
        toast.error("An error occurred while adding the blog", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
        });
      });
  } };

  return (
    <div className="container mt-5">
      <h2>New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={data.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" name="author" value={data.author} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <textarea className="form-control" name="body" value={data.body} onChange={handleChange} cols="50" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save Blog</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default BlogForm;