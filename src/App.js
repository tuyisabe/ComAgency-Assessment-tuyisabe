import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import TravelInfo from './components/TravelInfo';
import ContactInfo from './components/ContactInfo';
import Confirmation from './components/Confirmation';
import Papper from '@mui/material/Card';
import './app.css';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    fullName:'',
    age:'',
    gender:'',
    nationality:'',
    identification:'',
    purpose:'',
    duration:'',
    dates:'',
    port:'',
    email:'',
    phone:''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => e => {
    setUserData({ ...userData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (

<Papper elevation={3} style={{width:'30%', marginLeft:'30%',marginTop:'5%',padding:40}}>
        <PersonalInfo
          nextStep={nextStep}
          handleChange={handleChange}
          userData={userData}
        />
        </Papper>

      );
    case 2:
      return (
<Papper elevation={3} style={{width:'30%', marginLeft:'30%',marginTop:'5%',padding:40}}>


        <TravelInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          userData={userData}
        /></Papper>
      );
    case 3:
      return (
        <Papper elevation={3} style={{width:'30%', marginLeft:'30%',marginTop:'5%',padding:40}}>

        <ContactInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          userData={userData}
        /></Papper>
      );
    case 4:
      return (
        <Papper elevation={3} style={{width:'30%', marginLeft:'30%',marginTop:'5%',padding:40}}>

        <Confirmation
        nextStep={nextStep}
          prevStep={prevStep}
          userData={userData}
        /></Papper>
      );
    default:
      return(
      <Papper elevation={3} style={{width:'30%', marginLeft:'30%',marginTop:'5%',padding:40}}>
Step not found</Papper>) 
  }
}

export default App;