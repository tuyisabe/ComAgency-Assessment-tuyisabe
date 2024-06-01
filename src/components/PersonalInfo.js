import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
const PersonalInfo = ({ nextStep, handleChange, userData }) => {
  const { fullName, age,gender, nationality, identification } = userData;
  const [valid,setValid] = useState("")

  const continueStep = e => {
    e.preventDefault();
    
  if(fullName && age && gender && nationality && identification){
    nextStep();
  }
   setValid("fill all informations to continue!!")
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
       <h2 style={{marginBottom:20}}>Personal Information</h2>
       <h4 style={{color:'red'}}>{valid}</h4>
      <FormControl fullWidth>
         <TextField id="outlined-basic" label="Enter Full Name" variant="outlined" value={fullName} onChange={handleChange('fullName')} required />
      </FormControl>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Enter your Age" variant="outlined" type="number" value={age} onChange={handleChange('age')} required/>
        </FormControl>

        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={gender}
        onChange={handleChange('gender')}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nationality}
          label="Nationality"
          onChange={handleChange('nationality')}
        >
          <MenuItem value='Local'>Local</MenuItem>
          <MenuItem value='Foreign'>Foreign</MenuItem>
        </Select>
      </FormControl>
      {nationality==='Foreign'?
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Enter Passport" variant="outlined" type="text" value={identification} onChange={handleChange('identification')} />
     </FormControl> :nationality==='Local'?
     <FormControl fullWidth>
        <TextField id="outlined-basic" label="Enter your ID" variant="outlined" type="number" value={identification} onChange={handleChange('identification')} />
        </FormControl>:null}
     <FormControl >
      <Button variant="contained" onClick={continueStep}>Next</Button>
    </FormControl>
    </Box>

  );
};

export default PersonalInfo;
