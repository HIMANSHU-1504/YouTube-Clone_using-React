import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';

import { fetchFromAPI } from '../utils/fetchFromAPI';
const SearchFeed = () => {
  const [videos, setvideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setvideos(data.items) )
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow:'auto',height:'90vh',flex:2}}>
        <Typography varient='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          Search Result For: <span style={{color:'#f31503'}}>{searchTerm}</span> videos
        </Typography>
          <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed