import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';

function BottomBar() {
    return (
        <Layout>
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>

                <Box width="100%" maxWidth="100%" sx={{
                    background: '#1C1B1F',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'

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
}
export default BottomBar;