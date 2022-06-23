import React from 'react';
import Layout from '../components/Layout';
import { Box, Button, Card, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const navigate = useNavigate();
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
                    }}>SignUp Page</h1>

                    <br />
                    <br />

                    <Container style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box maxWidth="100%" sx={{
                            background: '#1C1B1F',
                            borderRadius: '8px',
                            alignItems: 'center'
                        }}>


                            <TextField
                                id="filled-basic"
                                label="First name"
                                variant="filled"
                                sx={{
                                    background: "white",
                                    borderRadius: '8px',

                                }}
                            />

                            <br />
                            <br />

                            <TextField
                                id="filled-basic"
                                label="Last name"
                                variant="filled"
                                sx={{
                                    background: "white",
                                    borderRadius: '8px',
                                }}
                            />

                            <br />
                            <br />

                            <TextField
                                id="filled-basic"
                                label="Username"
                                variant="filled"
                                sx={{
                                    background: "white",
                                    borderRadius: '8px',
                                }}
                            />

                            <br />
                            <br />

                            <TextField
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                                sx={{
                                    background: "white",
                                    borderRadius: '8px',
                                }}
                            />

                            <br />
                            <br />

                            <TextField
                                id="filled-basic"
                                label="Password"
                                variant="filled"
                                sx={{
                                    background: "white",
                                    borderRadius: '8px',
                                }}
                            />

                            <br />
                            <Button
                                style={{
                                    background: '#E647EA',
                                }}
                                onClick={() => {
                                    setTimeout(() => {
                                        alert('User Created, routing to Login page');
                                        navigate(`/login`);
                                    }, 300);

                                }}>Create Account</Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Layout >
    )
};

export default SignUpPage;