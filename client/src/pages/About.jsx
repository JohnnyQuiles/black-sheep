import React from 'react';
import Layout from '../components/Layout';
import { Box, Container } from '@mui/material';
import '../App.css';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <Layout>

            <br />
            <br />

            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box width="100%" maxWidth="100%" sx={{
                    background: '#1C1B1F',
                    borderRadius: '8px',
                    height: '50vh'
                }}>
                    <h1 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#E647EA',
                        fontFamily: 'Monoton'
                    }}>About Page</h1>

                    <br />

                    <p style={{
                        fontFamily: 'Roboto',
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus libero a dui rhoncus, convallis dapibus erat ornare. Etiam arcu odio, molestie id eleifend id, scelerisque suscipit lectus. Curabitur tristique fermentum pellentesque. Aliquam bibendum metus a nisi interdum ultricies. Praesent bibendum odio ut sagittis fermentum. Quisque blandit arcu et felis suscipit efficitur. Nullam maximus ligula vitae finibus molestie. Ut sodales lectus augue, vel elementum lectus tincidunt ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam facilisis sollicitudin sem sit amet facilisis. Mauris ac nunc ut felis faucibus ullamcorper vel et leo..
                        . Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam facilisis sollicitudin sem sit amet facilisis. Mauris ac nunc ut felis faucibus ullamcorper vel et leo.
                    </p>
                </Box>
            </Container>


            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '35vh'
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
        </Layout>
    )
};

export default AboutPage;