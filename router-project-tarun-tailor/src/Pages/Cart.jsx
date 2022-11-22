/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, ButtonGroup, Flex, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContextProvider'

export const Cart = () => {
  const {cartData, handleRemove,handleCheckout} = useContext(CartContext);
  const [ total, setTotal ] = useState(0);

  useEffect(()=>{
    totalValue();
  },[cartData])

  const totalValue = ()=>{
    let sum = cartData.reduce((acc,el)=>{
      return acc+el.price;  
    },0);
    setTotal(sum);
  }

  return (
    <>
      <Box boxShadow='base' width="98%" margin="auto" p='6' rounded='md' bg='white'>
        <Flex minWidth='max-content' my={4} alignItems='center' gap='2'>
          <Box p='2'>
            <Text>Total Items : {cartData.length}</Text>
            <Heading size='md'>Cart Total : {total}</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='2'>
            <Button onClick={handleCheckout} colorScheme='#2874F0' bg="#2874F0" variant='solid'>Checkout</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <Grid templateColumns='repeat(4, 1fr)' width="98%" margin="auto" my={5} gap={6}>
        {cartData.map((prod)=>(
          <Box key={prod.id}  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={5}>
            <Box>
              <Image src={prod.thumbnail} alt="pic" width="100%" height="400px" p={4}/>
            </Box>
            <Box>
              <Text fontSize='2xl'>{prod.title}</Text>
              <Text fontSize='2xl'>Price : {prod.price}</Text>
            </Box>
            <Button onClick={()=>handleRemove(prod.id)} colorScheme='#2874F0' bg="#2874F0" variant='solid'>
              Remove
            </Button>
          </Box>
        ))}
      </Grid>
    </>
  )
}
