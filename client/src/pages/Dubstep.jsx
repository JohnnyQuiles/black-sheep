import React from 'react';
import Layout from '../components/Layout';
import dubstep from '../Images/dubstep.jpeg';
import { Box, Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Container, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../Redux/userSlice';

function Dubstep() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogout = () => {
        dispatch(logOut(null));
        navigate(`/login`);
    };

    if (user) {
        return (
            <Layout>

                <br />
                <br />

                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%'

                }}>
                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <h1 style={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: '#E647EA'
                        }}>Head Banger Members</h1>
                    </Box>
                </Container>

                <br />

                <Container style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                }}>
                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                    }}>
                        <Card sx={{ maxWidth: 120 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="data:image/jpeg;base64,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"
                                    alt="J12Q   "
                                />
                                <CardContent>
                                    <h3>
                                        J12Q
                                    </h3>
                                    <p>
                                        Turn up!
                                    </p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',

                    }}>
                        <Card sx={{ maxWidth: 120 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkttXwJB8j-mLGmwve5fVs52SNzvBVRvgGTw&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <h4>
                                        YODARUSS
                                    </h4>
                                    <p>
                                        P.L.U.R.
                                    </p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                    }}>
                        <Card sx={{ maxWidth: 120 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="data:image/jpeg;base64,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"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <h4>
                                        RazzleDazzle
                                    </h4>
                                    <p>
                                        Dazzlin
                                    </p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                    }}>
                        <Card sx={{ maxWidth: 120 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="data:image/jpeg;base64,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"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <h4>
                                        THUMBSTERS
                                    </h4>
                                    <p>
                                        To far to speak
                                    </p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                    }}>
                        <Card sx={{ maxWidth: 120 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50veu3rUzh9Mp7Z5JXz53bzHUV4QHipBIVw&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <h4>
                                        GreaterNate
                                    </h4>
                                    <p>
                                        Suhh dude
                                    </p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                    }}>
                        <Card sx={{ maxWidth: 120 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_Kzw9RQ-7SzaxHN4FtQYedkvDCcWFMLFLw&usqp=CAU"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <h4>
                                        MichaelScott
                                    </h4>
                                    <p>thats what she said</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>
                </Container>

                <br />

                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%'

                }}>

                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#1C1B1F',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                    }}>
                        <TextField place='enter message' style={{background: 'white'}}></TextField>

                        <Button style={{
                                background: '#86C5FF',
                        }}>send message</Button>
                    </Box>
                </Container>

































                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh'
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
}
export default Dubstep;