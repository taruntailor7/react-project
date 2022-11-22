import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Container, Select, Heading, Button } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';

const initState = {
    "name": "",
    "email": "",
    "password": "",
    "username": "",
    "mobile": "",
    "description": "" 
  }

export const Signup = () => {
    const[userData, setUser] = useState(initState);
    const[isRegistered, setIsRegistered] = useState(false);
    console.log(isRegistered, "17");
    // setIsRegistered(localStorage.getItem('isRegistered'))
    // const baseUrl = "https://masai-api-mocker.herokuapp.com";

    const handleChange = ((e) => {
        const {name, value} =  e.target;
        setUser({...userData, [name]:value});
    })

    const handleSubmit = async () => {
        let registerRes = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method: 'POST',
            body: JSON.stringify(userData),
            headers : {
                'content-type': 'application/json'
            }
        });
        let userRes = await registerRes.json();
        if(userRes.error){
            alert(userRes.message);
        }
        else{
            alert(userRes.message);
            // localStorage.setItem('isRegistered', true);
            setIsRegistered(true);
        }
    }

    if(isRegistered){
        return <Navigate to='/login' />
    }
    
    return (
        <Container text-align="center" p={5} >
            <Heading textAlign="center">Sign Up</Heading>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type='text' placeholder="Enter Your Name" name="name" value={userData.name} onChange={handleChange}/>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder="Enter Email Address"  name="email" value={userData.email} onChange={handleChange}/>
                <FormLabel>Username</FormLabel>
                <Input type='email' placeholder="Enter Username"  name="username" value={userData.username} onChange={handleChange}/>
                <FormLabel>Mobile Number</FormLabel>
                <Input type='number' placeholder="Enter Your Mobile Number" name="mobile" value={userData.mobile} onChange={handleChange}/>
                <FormLabel>Password</FormLabel>
                <Input type='email' placeholder="Enter Password" name="password" value={userData.password} onChange={handleChange}/>
                <FormLabel>Gender</FormLabel>
                <Select placeholder='Select option' name="description" value={userData.description} onChange={handleChange}>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                </Select><br />
                <Button onClick={handleSubmit} width='100%' colorScheme='#2874F0' bg="#2874F0">Register</Button>
            </FormControl>
        </Container>
    )
}
