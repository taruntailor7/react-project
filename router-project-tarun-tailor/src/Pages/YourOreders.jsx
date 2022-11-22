import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContextProvider';

export const YourOreders = () => {
    const {ordered} = useContext(CartContext);

    return (
        <Grid templateColumns='repeat(4, 1fr)' width="98%" margin="auto" my={5} gap={6}>
        {ordered.map((prod)=>(
          <Box key={prod.id}  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={5}>
            <Box>
              <Image src={prod.thumbnail} alt="pic" width="100%" height="400px" p={4}/>
            </Box>
            <Box>
              <Text fontSize='2xl'>{prod.title}</Text>
              <Text fontSize='2xl'>Price : {prod.price}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    )
}
