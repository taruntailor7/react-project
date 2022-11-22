/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Logout = () => {
    const {isAuth, handleLogout,token} = useContext(AuthContext);
    const username = JSON.parse(localStorage.getItem('username'));

    const [name, setName] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(()=>{
        fetchUser();
    },[])
    
    const fetchUser=()=>{
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
           method: 'GET',
           headers:{
            "Authorization" : `Bearer ${token} `
           }
        })
        .then((res)=>res.json())
        .then((res)=>setName(res.name))
        .catch((err)=>console.log(err))
        ;
    }

    const Logout = () => {
        handleLogout();
    }

    if(isAuth === "false"){
        return <Navigate to="/login" />
    }
    
    return (
        <Box display="flex" justifyContent="space-around" width="20%">
            <Text mt="2">Hello, {name}</Text>
            <Button onClick={onOpen} color="#2874F0">:</Button>
            <Modal onClose={onClose} size="sm" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Do you want to Logout ?</ModalHeader>
                <ModalCloseButton />
                <ModalFooter>
                    <Button onClick={Logout} colorScheme='#2874F0' bg="#2874F0">Logout</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            {/* <NavLink ><Button onClick={Logout} bg='white' colorScheme='white' color='#2874F0'>Log out</Button></NavLink> */}
        </Box>
    )
}
