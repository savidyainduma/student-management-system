import { Avatar, Box, Button, Container, Paper, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Token } from '@mui/icons-material';




const UserContainer = ({setShowUser,}) => {
    const navigate = useNavigate();
    const handleSubmit =(event) => {
        console.log("logout clicked...");
        event.preventDefault();
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
       navigate('/');
    }

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName'); 
        if (storedUserName) {
          setUserName(storedUserName);
        }
      }, []);
  return (
    <Paper elevation={5} sx={{ position:"absolute", right:37, top:"80%", width: "100px",height:"130px", padding: "16px" }} > 
        <Box sx={{
        marginTop:"10px",   
        display: "flex",            
        flexDirection: "column",    
        justifyContent: "center",  
        alignItems: "center",               
        textAlign: "center",
      }}  >
        <Avatar sx={{display:"flex"}}>
            <AccountCircleIcon  />
        </Avatar>
        <Typography component="h7" variant='h9' sx={{textAlign:'center'}}>
            {userName}
        </Typography>
        <Button variant='contained' sx={{mt:1}} onClick={handleSubmit} >
            Logout
        </Button>
        </Box>
    </Paper>
  )
}

export default UserContainer