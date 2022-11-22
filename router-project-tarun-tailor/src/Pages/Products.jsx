/* eslint-disable react-hooks/exhaustive-deps */
import { StarIcon } from '@chakra-ui/icons';
import {Box, Container, Grid, Heading, Image, Select, Skeleton, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

export const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  // let [searchParams, setSearchParams] = useSearchParams(); // for pages
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  let sort = "price";

  let base_url = "http://localhost:3001/all_products";
  const getURL = (sortBy, filterBy)=>{
    if(sortBy && filterBy){
      base_url = `${base_url}?_sort=${sort}&_order=${sortBy}&category=${filterBy}`
    }
    else if(sortBy){
      base_url = `${base_url}?_sort=${sort}&_order=${sortBy}`
    }
    else if(filterBy){
      base_url = `${base_url}?category=${filterBy}`
    }
    return base_url;
  } 


    const getData = ()=>{
        let url = getURL(sortBy, filterBy);
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(res=>setProducts(res))
        .catch(()=>setError(true))
        .finally(()=>setLoading(false))
    }

    // http://localhost:3001/all_products?_sort=price&_order=asc

    useEffect(()=>{
        getData();
    },[sortBy, filterBy])

    const handleChange = (e) => {
      setSortBy(e.target.value);
    }
    const handleChangeFilter = (e)=>{
      setFilterBy(e.target.value);
    }

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
    <Box p={5}>
      <Box display="flex" width="95%" margin="auto" justifyContent="space-between" mt={5} >
        <Select placeholder='Sort By Price'  size='lg' width="40%" onChange={handleChange}>
          <option value='asc'>Low to High</option>
          <option value='desc'>High to Low</option>
          <option value=''>Reset</option>
        </Select>
        <Select placeholder='Filter By Category' size='lg' width="40%" onChange={handleChangeFilter}>
          <option value='womens-dresses'>Womens Dresses</option>
          <option value='womens-shoes'>Womens Shoes</option>
          <option value='womens-watches'>Womens watches</option>
          <option value='womens-bags'>Womens Bags</option>
          <option value='womens-jewellery'>Womens Jewellery</option>
          <option value='tops'>Womens Tops</option>
          <option value='mens-shirts'>Mens Shirts</option>
          <option value='mens-shoes'>Mens Shoes</option>
          <option value='mens-watches'>Mens Watches</option>
          <option value=''>Reset</option>
        </Select>
      </Box>
      {/* <Grid templateColumns='repeat(4, 1fr)' my={10} gap={6}>
        {products.map((prod)=>(
        <NavLink to={`/products/productsDetails/${prod.id}`} key={prod.id}>
          <Box  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={5}>
          <Box>
            <Image src={prod.link} alt="pic" width="100%" height="400px" p={4}/>
          </Box>
          <Box>
            <Text fontSize='2xl'>{prod.productname}</Text>
            <Text fontSize='2xl'>Price : {prod.prize}</Text>
          </Box>
        </Box>
        </NavLink>
        ))}
      </Grid> */}
      <Container maxW="container.2xl" width="95%" p={1}>
          <Heading>All Products</Heading>
          <Grid templateColumns='repeat(4, 1fr)' my={10} gap={6}>
          {products.map((prod)=>(
           <NavLink to={`/products/productsDetails/${prod.id}`} key={prod.id}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={5}>
              <Box>
                <Image src={prod.thumbnail} alt="pic" width="100%" height="400px" p={4}/>
              </Box>
              <Box>
                <Text fontSize='2xl'>{prod.title}</Text>
                <Text fontSize='2xl'>Price : {prod.price}</Text>
                <Text fontSize='2xl'>{prod.rating} <StarIcon w={5} h={6}/></Text>
              </Box>
            </Box>
          </NavLink>
          ))}
          </Grid>
      </Container>
    </Box>
  )
}
