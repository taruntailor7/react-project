import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
// import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { AuthContext } from '../Context/AuthContextProvider'

export const Buttons = () => {
    // const {isAuth} = useContext(AuthContext)

    return (
        <ButtonGroup  gap='2'>
            <NavLink to='/signup'><Button bg='white' colorScheme='white' color='#2874F0'>Sign Up</Button></NavLink>
            <NavLink to='/login'><Button bg='white' colorScheme='white' color='#2874F0'>Log in</Button></NavLink>
        </ButtonGroup>
    )
}
