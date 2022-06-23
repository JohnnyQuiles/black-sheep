import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField } from '@mui/material';
import Layout from '../components/Layout';


function LoginPage() {
    const loginUrl = 'http://localhost:4017/users';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // API
    const login = async () => {
        const response = await fetch(`${loginUrl}/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "acces-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();
        return userResponse;
    };

    const userLogin = async () => {
        const loginResponse = await login();
        console.log("Login user:", loginResponse);
        return loginResponse.payload;

    };


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
                    }}>Login Page</h1>

                    <br />
                    <br />

                    {/* User Login */}

                    <Container style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box maxWidth="100%" sx={{
                            borderRadius: '8px',
                            alignItems: 'center'
                        }}>
                            <TextField
                                id="filled-basic"
                                label="User name"
                                variant="filled"
                                sx={{
                                    background: "white",
                                    borderRadius: '8px',

                                }}
                                onChange={(e) => {
                                    setUsername(e.target.value);
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
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <br />

                            <Button
                                style={{
                                    background: '#E647EA',
                                }}
                                onClick={async () => {
                                    await userLogin();
                                    setTimeout(() => {
                                        // alert(`Welcome ${username} <3 <3`);
                                        navigate(`/groups`);
                                    }, 300);


                                }}>Login</Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Layout >
    )



};

export default LoginPage;