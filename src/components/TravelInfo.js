import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const TravelInfo = ({ nextStep, prevStep, handleChange, userData }) => {
  const { purpose,duration,dates,port } = userData;
  const [valid,setValid] = useState("")
  // const [selectedDate, setSelectedDate] = useState("");
  const continueStep = e => {
    e.preventDefault();
    if(purpose && duration && dates && port){
      nextStep();
    }
    setValid("fill all informations to continue!!")
  };
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };

  const previousStep = e => {
    e.preventDefault();
    prevStep();
  };

  return (

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
        <h2 style={{marginBottom:20}}>Travel Information</h2>
        <h4 style={{color:'red'}}>{valid}</h4>
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Purpose of Visit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={purpose}
          label="Purpose"
          onChange={handleChange('purpose')}
        >
          <MenuItem value='Tourism'>Tourism</MenuItem>
          <MenuItem value='Business'>Business</MenuItem>
          <MenuItem value='Education'>Education</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Duration of Stay (in days)" variant="outlined" type="number" value={duration} onChange={handleChange('duration')} required/>
        </FormControl>

      <FormControl fullWidth>
         <TextField defaultValue={Date()}       
         inputProps={{
         max: getCurrentDate(), 
      }} id="outlined-basic" label="Date of Entry" variant="outlined" type='date' InputLabelProps={{ shrink: true }} value={dates} onChange={handleChange('dates')} required />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Port of Entry</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={port}
          label="Port of Entry"
          onChange={handleChange('port')}
        >
          <MenuItem value='Airport'>Airport</MenuItem>
          <MenuItem value='Eastern'>Eastern</MenuItem>
          <MenuItem value='Western'>Western</MenuItem>
          <MenuItem value='Northern'>Northern</MenuItem>
          <MenuItem value='Southern'>Southern</MenuItem>
        </Select>
      </FormControl>
      
     <FormControl style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Button variant="contained" onClick={previousStep}>Back</Button>
      <Button variant="contained" onClick={continueStep}>Next</Button>
    </FormControl>
    </Box>


  );
};

export default TravelInfo;
