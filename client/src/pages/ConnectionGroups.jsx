import React from 'react';
import Layout from '../components/Layout';
import { Box, Card, Container } from '@mui/material';



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
        </Layout>


    )
};

export default ConnectionGroups;