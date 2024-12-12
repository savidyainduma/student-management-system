import { Avatar, Box, Button, Container, Grid, Link, Paper, TextField, Typography, Tooltip } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';



export const Login = () => {

  const[values,setValues] = useState(
    { 
         email:'',
         password:''
     }
 );
 const navigate = useNavigate();
 const handleSubmit = (event) => {
     event.preventDefault();
     console.log("values: ",values);
     axios.post('http://localhost:3001/users/login', values)
     .then(res => {
       if( res.status === 200){
         navigate('/');
       } 
     })
     .catch(err => alert(err?.response?.data?.error)
     )
 } 

  return (
    <Container maxWidth="xs">
        <Paper elevation={10} sx={{marginTop:8, padding:2}}>
            <Avatar
            sx={{mx:"auto", bgcolor:"secondary.main", textAlign:"center", mb:1}}
            >
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant='h5' sx={{textAlign:"center"}}>
              Sign In
            </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                <TextField 
                placeholder='Email'
                fullWidth
                required
                autoFocus
                onChange={e=> setValues({...values,email: e.target.value})}
                sx={{mb:2}}
                />
                <TextField 
                placeholder='Password'
                fullWidth
                required
                autoFocus
                onChange={e=> setValues({...values,password: e.target.value})}
                sx={{mb:2}}
                type='password'
                />
                <Button type='submit' variant='contained' fullWidth sx={{mt:1}}>
                  Sign In
                </Button>
              </Box> 
              <Grid container justifyContent='space-between' sx={{mt:1}}>
                <Grid item sx={{display:"flex", gap:1}}>
                  <Typography>Don't have a account?  </Typography>
                  <Link component={RouterLink} to={"/signup"}>
                    Sign Up
                  </Link>
                  <Typography> here...</Typography>
                </Grid>
              </Grid>
        </Paper>

    </Container>
  )
}
