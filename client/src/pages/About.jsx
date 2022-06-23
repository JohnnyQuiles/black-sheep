import React from 'react';
import Layout from '../components/Layout';
import { Box, Card, Container } from '@mui/material';
import '../App.css';

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
        </Layout>
    )
};

export default AboutPage;