import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Box, Button, Container, TextField } from '@mui/material';


function SignUpPage() {
    const signupUrl = 'http://localhost:4017/users';

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    
    // API
    const create = async () => {
        const response = await fetch(`${signupUrl}/create-user`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "access-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();

        console.log('CREATE USER RESPONSE:', userResponse);
        return userResponse;
    }

    const createUser = async () => {
        const createResponse = await create();
        console.log("CREATED USER:", createResponse);
    }

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
                                onChange={(e) => {
                                    setFirstName(e.target.value);
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
                                onChange={(e) => {
                                    setLastName(e.target.value);
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
                                onChange={(e) => {
                                    setUsername(e.target.value);
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
                                onChange={(e) => {
                                    setEmail(e.target.value);
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
                                    window.localStorage.setItem("users", JSON.stringify({
                                        firstName,
                                        lastName,
                                        username,
                                        email,
                                        password
                                    }));
                                    createUser();
                                    // setTimeout(() => {
                                    //     alert(`User ${username} Created!`);
                                    //     navigate(`/login`);
                                    // }, 300);

                                }}>Create Account</Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Layout >
    )
};

export default SignUpPage;