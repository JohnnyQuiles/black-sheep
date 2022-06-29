import React from 'react';
import Layout from '../components/Layout';
import { Box, Card, Container } from '@mui/material';
import { Link } from 'react-router-dom';



function ConnectionGroups() {
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
                
                }}>
                    <h1 style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#E647EA',
                    }}>Connection Groups</h1>

                    <Box width="100%" maxWidth="100%" sx={{
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}>
                        <Card sx={{
                            maxWidth: 300,
                            borderRadius: '8px',

                        }}>
                            <h1 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#E647EA',
                            }}>Head Bangers</h1>
                        </Card>

                        <br />

                        <Card sx={{
                            maxWidth: 300,
                            background: 'white',
                            borderRadius: '8px',

                        }}>
                            <h1 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#86C5FF',
                            }}>House Heads</h1>
                        </Card>

                        <br />

                        <Card sx={{
                            maxWidth: 300,
                            borderRadius: '8px',

                        }}>
                            <h1 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#E647EA',
                            }}>Trance Peeps</h1>
                        </Card>


                    </Box>
                </Box>
            </Container>

            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '67vh'
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

export default ConnectionGroups;