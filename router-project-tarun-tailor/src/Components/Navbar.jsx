import { Box, Container, Flex,Image, Input } from "@chakra-ui/react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
import { Buttons } from "./Buttons"
import { Logout } from "./Logout"

const links = [
    {
        to:'/about',
        title:"ABOUT"
    },
    {
        to:'/contact',
        title:"CONTACT"
    },
    {
        to:'/products',
        title:"PRODUCTS"
    },
    {
        to:'/shoppingcart',
        title:"CART"
    },
    {
        to:'/orders',
        title:'ORDERS'
    }
]

const Navbar = ()=>{
    const {isAuth} = useContext(AuthContext);
    // const defaultClass = {
    //     backgroundColor : "white",
    // }
    // const activeClass = {
    //     backgroundColor : "black",
    // }
    // let isAuth = localStorage.getItem("isAuth");
    
    console.log(isAuth, "in nav");
    return (
        <Container maxW="container.2xl" width="100%" p={1} bg='#2874F0' color='white'>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='3' width="10%" className='box'>
                    <NavLink to='/'><Image width="100%" src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='Dan Abramov' /></NavLink>
                </Box>
                <Input width="40%" placeholder='Basic usage' bg="white" />
                <Box width="35%" display="flex" justifyContent="space-evenly" >
                    {/* <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                    <NavLink to='/products'>PRODUCTS</NavLink>
                    <NavLink to='/shoppingcart'>CART</NavLink> */}
                    {links.map((link)=>(
                        <NavLink  key={link.to} to={link.to} >{link.title}</NavLink>
                    ))}
                </Box>
                {/* <ButtonGroup  gap='2'>
                    <NavLink to='/signup'><Button bg='white' colorScheme='white' color='#2874F0'>Sign Up</Button></NavLink>
                    <NavLink to='/login'><Button bg='white' colorScheme='white' color='#2874F0'>Log in</Button></NavLink>
                </ButtonGroup> */}
                {isAuth === "true" ? <Logout /> : <Buttons /> }
                {/* <Buttons />
                <Logout /> */}
            </Flex>
        </Container>
    )
}
export default Navbar