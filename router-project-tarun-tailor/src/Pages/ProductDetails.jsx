/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import { AuthContext } from '../Context/AuthContextProvider'


export const ProductDetails = () => {
    const[details, setDetails] = useState({})
    const { addToCart, disable } = useContext(CartContext)
    const {isAuth} = useContext(AuthContext)
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        fetch(`http://localhost:3001/all_products/${id}`)
        .then((res)=>res.json())
        .then((res)=>setDetails(res))
        .catch((err)=>console.log(err))
    },[])
    console.log(isAuth, "det");
    const handleDisabled = ()=>{
        for(let i=0;i<disable.length;i++){
            if(disable[i]===id){
                return true;
            }
        }
        return false;
    }

    return (
        <Box  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={5}>
            <Box>
                <Image src={details.thumbnail} alt="pic" width="100%" height="400px" p={4}/>
            </Box>
            <Box>
                <Text fontSize='2xl'>{details.title}</Text>
                <Text fontSize='2xl'>Price : {details.price}</Text>
                <Text>{details.rating}</Text>
            </Box>
            <Button disabled={handleDisabled()} onClick={()=>addToCart(details, id)} colorScheme='#2874F0' bg="#2874F0" variant='solid'>
                Add to Cart
            </Button>
        </Box>
    )
}
