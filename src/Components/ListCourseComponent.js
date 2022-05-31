import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import CourseService from '../services/CourseService';

const ListCourseComponent = () => {

    const [course, setCourse]= useState([]);

    useEffect(()=>{

        CourseService.getAllCourse().then((response)=>{
            setCourse(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

  return (
    <div className='container'>
        <h2 className='text-center'>List Course</h2>
        <Link to="/add-course" className="btn btn-primary mb-2">Add Course</Link>
        <table className='table table-bordered table-striped'>

            <thead>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    course.map(
                        course=>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-course/${course.id}`}>Update</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCourseComponent