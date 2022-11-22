import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Container, Grid, Heading, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { StarIcon } from '@chakra-ui/icons'


export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    const getData = ()=>{
        setLoading(true)
        fetch(`http://localhost:3001/all_products`)
        .then(res=>res.json())
        .then(res=>setProducts(res))
        .catch(()=>setError(true))
        .finally(()=>setLoading(false))

    }

    useEffect(()=>{
        getData();
    },[])

    if(loading){
        return<Stack >
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
            </Stack>
    }

    if(error){
        return <h1>Error....</h1>
    }

    return (
        <Box >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://sslimages.shoppersstop.com/sys-master/root/h49/h3e/28404483391518/web-Watch-Affair-Web-04102022.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://sslimages.shoppersstop.com/sys-master/root/h5f/hbb/28287204196382/Celeb-Inspired-Brands-Static-Nautica-Web2022916_ii.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://sslimages.shoppersstop.com/sys-master/root/h56/h67/28287214583838/Celeb-Inspired-Brands-Static-USPA-Web20220916_o1o1.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container maxW="container.2xl"  width="95%" p={1}>
                <Heading>All Products</Heading>
                <Grid  templateColumns={{
                    base:"repeat(1,1fr)",
                    md : "repeat(2,1fr)",
                    xl :" repeat(4,1fr)"
                    }} 
                    my={10} gap={6}>
                {products.map((prod)=>(
                // <NavLink key={prod.id}>
                    <Box key={prod.id} maxW='sm' borderWidth='1px' borderRadius='lg' p={5}>
                    <Box>
                    <Image src={prod.thumbnail} alt="pic" width="100%" height="400px" p={4}/>
                    </Box>
                    <Box>
                    <Text fontSize='2xl'>{prod.title}</Text>
                    <Text fontSize='2xl'>Price : {prod.price}</Text>
                    <Text fontSize='2xl'>{prod.rating} <StarIcon w={5} h={6}/></Text>
                    </Box>
                </Box>
                // </NavLink>
                ))}
                </Grid>
            </Container>
        </Box>
    )
}
