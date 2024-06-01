import React, { useState } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';


const Confirmation = ({ prevStep, userData }) => {
  const { fullName, age, gender, nationality, identification,purpose,duration,dates,port, email,phone } = userData;
  const [result,setResult] = useState("")
  const previousStep = e => {
    e.preventDefault();
    prevStep();
  };

  const close =()=>{

  }

  const submitForm = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/userdata', userData);
      console.log('Data submitted successfully:', response.data);
      setResult("success")
    } catch (err) {
      console.error('Error submitting data:', err);
      setResult("fail")
    }
  };

  return (
<>

  {result==="success"?    <Box
    component="form"
    sx={{
      display:'flex',
     flex:1,
     flexDirection:'column',
     gap:3
    }}
    noValidate
    autoComplete="off"
  >
     <h2 style={{marginBottom:20}}>Message</h2>
    <Alert severity="success" sx={{height:80,justifyContent:'center',alignItems:'center',fontSize:20}}>you have successfully registered as {userData.fullName}, Please check {userData.email} for Confirmation</Alert>
    <Button variant="contained" onClick={close}><a href='http://localhost:3000/' style={{textDecoration:'none',color:'white',fontSize:20}}>Close</a></Button>
  </Box> :result==="fail"?
  <Box
  component="form"
  sx={{
    display:'flex',
   flex:1,
   flexDirection:'column',
   gap:3
  }}
  noValidate
  autoComplete="off"
>
   <h2 style={{marginBottom:20}}>Message</h2>
   <Alert severity="error" sx={{height:80,justifyContent:'center',alignItems:'center',fontSize:20}}>Registration failed Try Again.</Alert>
   <Button variant="contained" onClick={close}><a href='http://localhost:3000/' style={{textDecoration:'none',color:'white',fontSize:20}}>Close</a></Button>

</Box>:
  <Box
    component="form"
    sx={{
      display:'flex',
     flex:1,
     flexDirection:'column',
    }}
    noValidate
    autoComplete="off"
  >
     <h2 style={{marginBottom:5}}>Confirmation</h2>


     
     <List sx={{display:'flex',gap:-25,flexDirection:'column'}}>
      <h3 style={{marginBottom:0}}>Personal Information:</h3>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Full Names :`} />
        <ListItemText primary={`${fullName}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Ages :`} />
        <ListItemText primary={`${age}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Gender :`} />
        <ListItemText primary={`${gender}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Nationality :`} />
        <ListItemText primary={`${nationality}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Identification :`} />
        <ListItemText primary={`${identification}`} />
      </ListItem>
      </List>
    <Divider/>
     
     <List sx={{display:'flex',gap:-25,flexDirection:'column'}}>
      <h3 style={{marginBottom:5}}>Travel Information:</h3>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Purpose of Visit :`} />
        <ListItemText primary={`${purpose}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Duration of Stay  :`} />
        <ListItemText primary={`${duration}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Date of Entry :`} />
        <ListItemText primary={`${dates}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Port of Entry :`} />
        <ListItemText primary={`${port}`} />
      </ListItem>
      </List>
    <Divider/>
    
     <List sx={{}}> 
     <h3 style={{marginBottom:0}}>Contact Information:</h3>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`Email Address :`} />
        <ListItemText primary={`${email}`} />
      </ListItem>
      <ListItem sx={{marginBottom:-2}}>
        <ListItemText primary={`PhoneNumber :`} />
        <ListItemText primary={`${phone}`} />
      </ListItem>
      </List>
      <FormControl style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Button variant="contained" onClick={previousStep}>Back</Button>
      <Button variant="contained" onClick={submitForm}>Submit</Button>
    </FormControl>
  </Box>}</>
  );
};

export default Confirmation;
