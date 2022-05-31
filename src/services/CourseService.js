import axios from 'axios';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const base_url="http://localhost:8082";

export class CourseService {
  
    getAllCourse(){
        return axios.get(`${base_url}/getAllCourse`)
    }

    createCourse(course){
        return axios.post(`${base_url}/addCourse`,course)
    }
}

export default new CourseService();