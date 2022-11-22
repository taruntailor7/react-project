import { Button, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import {useContext, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider'

export const Login = () => {
  const [userData, setUserData] = useState({"username": "", "password": ""})
  const {isAuth, handleLogin} = useContext(AuthContext)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData,[name]:value})
  }

  const handleSubmit = () =>{
    handleLogin(userData);
  }
  console.log(isAuth,"login");

  if(isAuth === "true"){
      return <Navigate to='/' />
  }
  

  return (
    <Container text-align="center" p={5} >
      <Heading textAlign="center">Login</Heading>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter Username" name="username" value={userData.username} onChange={handleChange}/>
        <FormLabel>Password</FormLabel>
        <Input type="text" placeholder="Enter Password" name="password" value={userData.password} onChange={handleChange}/><br /><br />
        <Button onClick={handleSubmit} width='100%' colorScheme='#2874F0' bg="#2874F0">Login</Button>
      </FormControl>
    </Container>
  )
}
