import React from 'react';
import Layout from '../components/Layout';
import { Box, Button, Card, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Redux/userSlice';
import trance from '../Images/trance.jpeg';
import dubstep from '../Images/dubstep.jpeg';
import house from '../Images/house.jpg';


function ConnectionGroups() {
    const user = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogout = () => {
        dispatch(logOut(null));
        navigate(`/login`);
    };

    if (!user) {
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
                            justifyContent: 'center',
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

                                <Box width="100%" maxWidth="100%" sx={{
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img alt='dubstep' src={`${dubstep}`}></img>
                                </Box>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ex facilis vero expedita perferendis alias magni temporibus! Iure vitae quod iusto tempore eius soluta harum, aliquid quo laudantium adipisci!</p>
                                <Button style={{ background: "black", color: 'crimson' }}
                                    onClick={() => {
                                        navigate(`/login`)
                                    }}>Join</Button>
                            </Card>
                        </Box>

                        <br />

                        <Box width="100%" maxWidth="100%" sx={{
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
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

                                <Box width="100%" maxWidth="100%" sx={{
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img alt='dubstep' src={`${dubstep}`}></img>
                                </Box>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ex facilis vero expedita perferendis alias magni temporibus! Iure vitae quod iusto tempore eius soluta harum, aliquid quo laudantium adipisci!</p>
                                <Button style={{ background: "black", color: 'crimson' }}
                                    onClick={() => {
                                        navigate(`/login`)
                                    }}>Join</Button>
                            </Card>
                        </Box>

                        <br />

                        <Box width="100%" maxWidth="100%" sx={{
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>

                            <Card sx={{
                                maxWidth: 300,
                                borderRadius: '8px',

                            }}>
                                <h1 style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#E647EA',
                                }}>Trance Peeps</h1>

                                <Box width="100%" maxWidth="100%" sx={{
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img alt='dubstep' src={`${dubstep}`}></img>
                                </Box>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ex facilis vero expedita perferendis alias magni temporibus! Iure vitae quod iusto tempore eius soluta harum, aliquid quo laudantium adipisci!</p>
                                <Button style={{ background: "black", color: 'crimson' }}
                                    onClick={() => {
                                        navigate(`/login`)
                                    }}>Join</Button>
                            </Card>
                        </Box>
                    </Box>
                </Container>

                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '30vh'
                }}>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
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
            </Layout >
        )
    };

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
                            color: '#E647EA',
                        }}>Connection Groups</h1>

                        <Box width="100%" maxWidth="100%" sx={{
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
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

                                <Box width="100%" maxWidth="100%" sx={{
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img alt='dubstep' src={`${dubstep}`}></img>
                                </Box>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ex facilis vero expedita perferendis alias magni temporibus! Iure vitae quod iusto tempore eius soluta harum, aliquid quo laudantium adipisci!</p>
                                <Button style={{ background: "black", color: 'crimson' }}>Join</Button>
                            </Card>
                        </Box>

                        <br />
                        <Box width="100%" maxWidth="100%" sx={{
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>

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

                                <Box width="100%" maxWidth="100%" sx={{
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img alt='dubstep' src={`${house}`}></img>
                                </Box>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ex facilis vero expedita perferendis alias magni temporibus! Iure vitae quod iusto tempore eius soluta harum, aliquid quo laudantium adipisci!</p>
                                <Button style={{ background: "black", color: 'crimson' }}>Join</Button>
                            </Card>
                        </Box>

                        <br />

                        {/* Trance Group */}
                        <Box width="100%" maxWidth="100%" sx={{
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>

                            <Card sx={{
                                maxWidth: 300,
                                borderRadius: '8px',

                            }}>
                                <h1 style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#E647EA',

                                }}>Trance Peeps</h1>

                                <Box width="100%" maxWidth="100%" sx={{
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                        src={`${trance}`}
                                        alt='trance'>
                                    </img>

                                </Box>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ex facilis vero expedita perferendis alias magni temporibus! Iure vitae quod iusto tempore eius soluta harum, aliquid quo laudantium adipisci!</p>


                                <Button style={{ background: "black", color: 'crimson' }}>Join</Button>
                            </Card>
                        </Box>


                    </Box>
                </Container >

                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh'
                }}>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',


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

                        <Link to='login' style={{ textDecoration: 'none' }}
                            onClick={() => {
                                userLogout();
                                navigate(`/login`);
                            }}>
                            <h1 style={{
                                color: '#86C5FF',
                                fontFamily: 'Monoton',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>Logout</h1>
                        </Link>

                    </Box>
                </Container>
            </Layout >


        )
    }
};

export default ConnectionGroups;