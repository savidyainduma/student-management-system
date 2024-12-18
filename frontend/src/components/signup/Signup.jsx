import { Avatar, Box, Button, Container, Grid, Link, Paper, TextField, Typography, Tooltip } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios';



export const Signup = () => {

    const[values,setValues] = useState(
       { 
            name:'',
            email:'',
            password:''
        }
    );
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("values: ",values);
        axios.post('http://localhost:3001/users/signup', values)
        .then(res => {
          if( res.status === 201){
            navigate('/');
          } else {
            alert("Error");
          }
        })
        .catch(err => console.error(err)
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
              Sign Up
            </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                <TextField 
                name='name'
                placeholder='Full Name'
                fullWidth
                required
                autoFocus
                onChange={e=> setValues({...values,name: e.target.value})}
                sx={{mb:2}}
                />
                <TextField 
                name='email'
                placeholder='Email'
                fullWidth
                required
                autoFocus
                onChange={e=> setValues({...values,email: e.target.value})}
                sx={{mb:2}}
                />
                <TextField 
                name='password'
                placeholder='Password'
                fullWidth
                required
                autoFocus
                onChange={e=> setValues({...values,password: e.target.value})}
                sx={{mb:2}}
                type='password'
                />
                <Button type='submit' variant='contained' fullWidth sx={{mt:1}}>
                 Create Account
                </Button>
              </Box> 
              <Grid container justifyContent='space-between' sx={{mt:1}}>
                <Grid item sx={{display:"flex", gap:1}}>
                  <Typography>Already registered?  </Typography>
                  <Link component={RouterLink} to={"/"}>
                    Sign In
                  </Link>
                  <Typography> here...</Typography>
                </Grid>
              </Grid>
        </Paper>

    </Container>
  )
}
