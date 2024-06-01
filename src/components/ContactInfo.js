import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const ContactInfo = ({ nextStep, prevStep, handleChange, userData }) => {
  const { email, phone } = userData;
  const [valid, setValid] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9\b]+$/;
    return re.test(String(phone));
  };

  const continueStep = e => {
    e.preventDefault();
    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone || !validatePhone(phone)) {
      setPhoneError("Invalid phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (isValid) {
      setValid("");
      nextStep();
    } else {
      setValid("Please fill all information correctly to continue!");
    }
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
     <h2 style={{marginBottom:20}}>Contact Information</h2>
     <h4 style={{color:'red'}}>{valid}</h4>
    <FormControl fullWidth>
    <TextField
          id="email"
          label="Enter Email Address"
          variant="outlined"
          value={email}
          onChange={handleChange('email')}
          error={!!emailError}
          helperText={emailError}
          required
        />    </FormControl>
    <FormControl fullWidth>
    <TextField
          id="phone"
          label="Phone Number"
          variant="outlined"
          type="text"
          value={phone}
          onChange={handleChange('phone')}
          error={!!phoneError}
          helperText={phoneError}
          required
        />      </FormControl>      
      <FormControl style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Button variant="contained" onClick={previousStep}>Back</Button>
      <Button variant="contained" onClick={continueStep}>Next</Button>
    </FormControl>
  </Box>
    
  );
};

export default ContactInfo;
