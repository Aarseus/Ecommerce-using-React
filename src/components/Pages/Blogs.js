import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Blogs = () => {
  return (
    <>
      <Navbar/>
      <Box className='BlogsContainer' backgroundColor='primary.dark' padding={3}>


        <Box className="Blog" display={'flex'} padding={3} backgroundColor={'primary.light'} borderRadius={5} sx={{
            '&:hover':{
                backgroundColor:'primary.dark'
            }
        }}>

            <Box className='Blog-Content' width={'80%'}>
                <Box className="Blog-Title">
                    <Typography variant='h4'>
                        Title
                    </Typography>
                </Box>
                <Box className='Blog-Text'>
                    <Typography variant='body1'>
                    This is a blog text.
                    </Typography>
                    </Box>
            </Box>

            <Box className='Blog-Author' width={'20%'}>
                <Box className='Blogger-image' width={'100%'} borderRadius={'50%'} overflow={'hidden'} backgroundColor={'info.light'}>
                <img src="./mobile-img/mobile2.png" width={'100%'} />
                </Box>
                <Box className="Blogger-name">Blogger</Box>
            </Box>
        </Box>
      </Box>






      <Footer/>
    </>
  )
}

export default Blogs
