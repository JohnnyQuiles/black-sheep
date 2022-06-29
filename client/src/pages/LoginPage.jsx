import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../Redux/userSlice';
import { Box, Button, Container, TextField } from '@mui/material';
import Layout from '../components/Layout';

// import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const loginUrl = 'http://localhost:4017/users';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    // API ============================================================
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

        dispatch(logIn({ user: loginResponse }));
        return loginResponse.payload;

    };

    const userLogout = () => {
        dispatch(logOut);
    };

    // IF USER, LOGOUT 
    if (user) {
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
                            color: '#86C5FF',
                        }}>Hi</h1>

                        <h1 style={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: '#86C5FF',
                        }}>{username}</h1>
                        

                        <br />
                        <br />


                        <Button
                            style={{ background: '#E647EA' }}
                            onClick={userLogout}>LogOut</Button>
                    </Box>
                </Container>
            </Layout >
        )
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
                                value={username}
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
                                value={password}
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
                                }}

                            >Login</Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Layout >
    )


};

export default LoginPage;

