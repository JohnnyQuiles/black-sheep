import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";
import { AppBar, Box, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Heart from '../Images/heartlock.png';
import '../App.css';
import { useSelector } from 'react-redux';


function NavBar() {
    const user = useSelector((state) => state.user);

    if (!user) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ borderRadius: '3px' }}>
                    <Toolbar className='App-header'>

                        <Link to='/'>
                            <img src={Heart} alt='Heart' />
                        </Link>

                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <h1 className='App-header' style={{ fontSize: '30px' }}>Black Sheep</h1>
                        </Link>

                        <Link to='login' style={{ textDecoration: 'none', color: '#86C5FF' }}>
                        <AccountCircle sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'white', fontSize: '35px' }}></AccountCircle>
                        </Link>

                    </Toolbar>
                </AppBar>
            </Box >
        )
    };

    if (user) {
        const userData = user.payload;
        return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ borderRadius: '3px' }}>
                <Toolbar className='App-header'>

                    <Link to='/'>
                        <img src={Heart} alt='Heart' />
                    </Link>

                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1 className='App-header' style={{ fontSize: '30px' }}>Black Sheep</h1>
                    </Link>

                    <Link to='login' style={{ textDecoration: 'none', color: '#86C5FF' }}>
                        {
                            user
                                ? `${userData.username}`
                                : (
                                    <AccountCircle sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'white', fontSize: '35px' }}></AccountCircle>
                                )
                        }
                    </Link>

                </Toolbar>
            </AppBar>
        </Box >
        )
    }

}
export default NavBar;
