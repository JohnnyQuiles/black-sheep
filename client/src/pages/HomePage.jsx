import { Box, Container } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../App.css';



function HomePage() {

    return (
        <Layout>

            <br />

            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box width="100%" maxWidth="100%" sx={{
                    background: '#1C1B1F',
                    borderRadius: '8px',
                    height: '25vh'
                }}>


                    <h1 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#E647EA',
                    }}>YOU MATTER</h1>

                    <h2 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#E647EA'
                    }}>I LOVE YOUR SOUL</h2>

                    <h2 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#86C5FF'
                    }} className='App-para'>I just want to say, You are Beautiful </h2>

                    <p style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white'
                    }} className='App-paragraph'>
                        This is a place where you can be yourself!
                        Meet new people, who are just as unique as you are.
                        Join groups, connect, and create memories.</p>

                </Box>
            </Container>

            <br />
            <br />

            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh'
            }}>

                <Box width="100%" maxWidth="100%" sx={{
                    background: '#1C1B1F',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center', 
                    

                }}>
                    <Link to='about' style={{ textDecoration: 'none' }}>
                        <h1 style={{
                            color: '#E647EA',
                            fontFamily: 'Monoton',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>About</h1>
                    </Link>

                    <Link to='groups' style={{ textDecoration: 'none' }}>
                        <h1 style={{
                            color: '#86C5FF',
                            fontFamily: 'Monoton',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>Groups</h1>
                    </Link>

                    <Link to='signup' style={{ textDecoration: 'none' }}>
                        <h1 style={{
                            color: '#E647EA',
                            fontFamily: 'Monoton',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>Sign-up</h1>
                    </Link>

                    <Link to='login' style={{ textDecoration: 'none' }}>
                        <h1 style={{
                            color: '#86C5FF',
                            fontFamily: 'Monoton',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>Login</h1>
                    </Link>

                </Box>
            </Container>


        </Layout >
    )
};

export default HomePage;