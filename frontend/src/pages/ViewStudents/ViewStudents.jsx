import React, { useEffect, useState } from 'react'
import './ViewStudents.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';



const ViewStudents = ({handleEdit, students=[], getAllStudents, handleDelete}) => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllStudents(); 
  },[])

  const confirmDelete  = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#047777",
      confirmButtonText: "OK"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "This record has been deleted.",
          icon: "success"
        });
        handleDelete(id);
      }
    });
  }  

  return (
    <div className='view-students'>
      <div className="view-students-container">
        <div className="form-title">
            <h2>All students</h2>
            <img src={assets.cross_icon} onClick={()=> navigate('/')} alt=''  />
        </div>
        <hr />
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Contact Number</th>
                        <th>Address</th>
                        <th>Parent's Contact</th>
                    </tr>
                </thead>
                <tbody>
                {
                  students.map((data, i) => (
                    <tr key={i}>
                      <td>{data.FullName}</td>
                      <td>{data.BirthDate.substring(0,10)}</td>
                      <td>{data.Gender}</td>
                      <td>{data.ContactNumber}</td>
                      <td>{data.Address}</td>
                      <td>{data.ParentContact}</td>
                      <td><img src={assets.edit_icon} onClick={()=>handleEdit(data)} alt=''></img></td>
                      <td><img src={assets.delete_icon} onClick={()=> confirmDelete(data.id) } alt=''></img></td>
                      
                      
                    </tr>
                  ))
                }
                </tbody>
                
            </table>
        </div>
      </div>
    </div>
  )
}

export default ViewStudents
