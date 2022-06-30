import React from 'react';
import Layout from '../components/Layout';
import dubstep from '../Images/dubstep.jpeg';
import { Box, Button, Container } from '@mui/material';
import { useSelector } from 'react-redux';

function Dubstep() {
    const user = useSelector((state) => state.user);

    if (user) {
        return (
            <Layout>
                
            </Layout>
        )

    }
}
export default Dubstep;