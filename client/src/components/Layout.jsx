import { Box } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import BottomBar from './BottomBar';
import Alien from '../Images/Alien.png';

function Layout(props) {
    const { children } = props;

    return (
        <Box width="100%" height="100%" maxWidth="100%" style={{ backgroundImage: `url(${Alien})`, background: 'cover', alignItems: 'center', height: '100vh' }}>
            <NavBar />
            <div>
                {children}
            </div>
            <BottomBar />
        </Box>
    );
}

export default Layout;