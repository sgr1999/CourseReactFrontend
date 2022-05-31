import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import CourseService from '../services/CourseService'

const AddCourseComponent = () => {

    const [title,setTitle]=useState('')
    const [description, setDescription]= useState('')
    const navigate = useNavigate();

    const saveOrUpdateCourse=(e)=>{
        e.preventDefault();

        const course ={title,description}

        CourseService.createCourse(course).then(
            (response)=>{
                console.log(response.data);
                navigate("/course");
            }
        ).catch(error=>{
            console.log(error);
        })
        console.log(course);
    }

  return (
    <div>
        <br/><br />
        <div className='container'>

            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Course</h2>

                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className="form-label">Title</label>
                                <input 
                                
                                type="text"
                                placeholder="Enter title"
                                className='form-control'
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                >
                                </input>    
                            </div>

                            <div className='form-group mb-2'>
                                <label className="form-label">Description</label>
                                <input 
                                
                                type="text"
                                placeholder="Enter title"
                                className='form-control'
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                >
                                </input>    
                            </div>

                            <button className='btn btn-success' onClick={(e)=>saveOrUpdateCourse(e)}>Submit</button>
                            <Link to="/course" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourseComponent