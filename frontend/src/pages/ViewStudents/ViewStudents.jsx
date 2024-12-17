import React, { useEffect, useState } from "react";
import "./ViewStudents.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

const ViewStudents = ({
  handleEdit,
  getAllStudents,
  students =[],
  handleDelete,
  setShowAdd,
}) => {
  
  const navigate = useNavigate();
  const tableColumns = [
    {id:"full_name", name:"Full Name"},
    {id:"birth_date", name:"Birth Date"},
    {id:"gender", name:"Gender"},
    {id:"contact_number", name:"Contact Number"},
    {id:"address", name:"Address"},
    {id:"parent_contact", name:"Parent's Contact"}
  ]
//   const [sortBy, setSortBy] = useState('rack_no');
// const [orderBy, setOrderBy] = useState('ASC');
//   const handleRequestSort = (columnId) => {
    
//     const isAsc = sortBy === columnId && orderBy === 'ASC';
//     const newOrderBy = isAsc ? 'DESC' : 'ASC';
  
    
//     // setOrderBy(newOrderBy);
//     // setSortBy(columnId);
  
//     // // Sort the data
//     // const sortedData = [...students].sort((a, b) => {
//     //   if (a[columnId] < b[columnId]) return newOrderBy === 'ASC' ? -1 : 1;
//     //   if (a[columnId] > b[columnId]) return newOrderBy === 'ASC' ? 1 : -1;
//     //   return 0;
//     // });
  
    
//     setStudents(sortedData);
//   };

  useEffect(() => {
    getAllStudents();
  }, []);

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#047777",
      confirmButtonText: "OK",
      customClass: {
        popup: "custom-swal-popup",
        title: "swal-responsive-title",
        htmlContainer: "swal-responsive-text",
        confirmButton: "swal-responsive-button",
        cancelButton: "swal-responsive-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "This record has been deleted.",
          icon: "success",
          customClass: {
            popup: "custom-swal-popup",
          },
        });
        handleDelete(id);
      }
    });
  };

  return (
    <div className="view-students">
      <div className="view-students-container">
        <div className="form-title">
          <h2>All students</h2>
          <img src={assets.cross_icon} onClick={() => navigate("/home")} alt="" />
        </div>

        <hr />
        <div className="table">
          {/* <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {tableColumns.map((column)=>(
                    <TableCell
                      id={column.id}
                      sx={{
                        color:"#FFFFFF",
                        fontSize:"0.7rem",
                        backgroundColor:"black"
                      }}

                    >
                      { column.sort ? (
                                <TableSortLabel
                                  active={sortBy === column.id}
                                  direction={
                                    sortBy === column.id
                                      ? orderBy.toLowerCase()
                                      : "asc"
                                  }
                                  onClick={() => handleRequestSort(column.id)}
                                  sx={{
                                    "&.MuiTableSortLabel-root": {
                                      color: "#fff !important",
                                      "&:hover": {
                                        color:
                                          "rgba(255,255,255,0.8) !important",
                                      },
                                    },
                                    "& .MuiTableSortLabel-icon": {
                                      color: "rgba(255,255,255,0.6) !important",
                                    },
                                  }}
                                >
                                  {column.name}
                                  {sortBy === column.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                      {orderBy.toLowerCase() === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                    </Box>
                                  ) : null}
                                </TableSortLabel>
                              ) : (
                                column.name
                              )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                  {students.map((row)=>(
                    <TableRow>
                      <TableCell>
                        {row.full_name}
                      </TableCell>
                      <TableCell>
                        {row.birth_date}
                      </TableCell>
                      <TableCell>
                        {row.gender}
                      </TableCell>
                      <TableCell>
                        {row.contact_number}
                      </TableCell>
                      <TableCell>
                        {row.address}
                      </TableCell><TableCell>
                        {row.parent_contact}
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
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
              {students.map((data, i) => (
                <tr key={i}>
                  <td>{data.full_name}</td>
                  <td>{data.birth_date.substring(0, 10)}</td>
                  <td>{data.gender}</td>
                  <td>{data.contact_number}</td>
                  <td>{data.address}</td>
                  <td>{data.parent_contact}</td>
                  <td>
                    <img
                      src={assets.edit_icon}
                      onClick={() => handleEdit(data)}
                      alt=""
                    ></img>
                  </td>
                  <td>
                    <img
                      src={assets.delete_icon}
                      onClick={() => confirmDelete(data.id)}
                      alt=""
                    ></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>
        <div className="add-button">
          <img
            src={assets.add_icon}
            alt=""
            srcset=""
            onClick={() => setShowAdd(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;
