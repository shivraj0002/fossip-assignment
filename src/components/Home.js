import { Container, Box, Typography, Paper, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import icon3d from "../assets/icons/3d-food-icon.webp"
import curveIcon from "../assets/icons/curve-icon.png"
import Carousel from 'react-material-ui-carousel'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Customcard, Roundcard } from '../utils/additional-ui'
import playstore from "../assets/icons/playstore.png"
import appstore from "../assets/icons/appstore.png"
const Home = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6])
    const [data2, setData2] = useState([1, 2, 3, 4])
    useEffect(() => {
        const fetchData = async () => {
            let req = await fetch("https://api.spoonacular.com/recipes/random?apiKey=a7c6137faccb48e8af5d456f77daee22")
            let recivedData = await req.json();
            if (recivedData?.recipes[0]?.extendedIngredients?.length > 0) {
                setData([...recivedData.recipes[0].extendedIngredients])
                console.log(recivedData.recipes[0].extendedIngredients);
            }
        }
        // fetchData()

    }, [])

    return (
        <>
            <Box sx={{
                width: '100vw',
                height: { xs: '30vh', md: '39vh' },
                backgroundColor: 'rgb(204, 191, 244)',
                background: 'linear-gradient(0deg, rgba(204,191,244,1) 0%, rgba(255,253,248,1) 100%)',
                borderRadius: '0 0 25px 25px',
            }}>
                <Container maxWidth="lg">
                    <Box display="flex" justifyContent={"space-between"} alignItems={"center"} width={"100%"}
                        flexDirection={{ xs: 'column', md: 'row' }}
                    >
                        <Box display={"flex"} alignItems={"center"} width={"48%"} flexDirection={"column"} justifyContent={'center'} >
                            <Typography
                                variant="h4"
                                noWrap
                                component="h4"

                                sx={{
                                    mr: 2,
                                    display: 'flex',
                                    fontWeight: 700,
                                    color: '#3B3C47',

                                }}
                            >
                                Order Food <br />
                                Online in Delhi
                            </Typography>
                            <img src={curveIcon} alt="curve line icon" style={{
                                width: '130px',
                                height: "30px",
                                display: 'block',
                            }} />
                        </Box>
                        <Box display="flex" width={"48%"} height={"100%"} alignItems={'center'} justifyContent={"flex-end"}>
                            <Box sx={{
                                width: { xs: '55%', md: '65%', lg: '75%', xl: '95%' },
                                height: { xs: '55%', md: '65%', lg: '75%', xl: '95%' }
                            }}>
                                <img src={icon3d} alt="food item 3d icon" style={{
                                    width: '100%',
                                    height: '100%',
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </Container>

            </Box>

            <Container maxWidth="lg">
                <Paper variant="elevation" elevation="1" sx={{
                    marginTop: '10px'
                }}>
                    <Typography variant="h6" component="h6" sx={{
                        margin: "5px 10px",
                        alignSelf: "center",
                        fontWeight: 900
                    }}>
                        Whats in your Mind?
                    </Typography>
                    <Carousel>
                        <Paper variant="elevation" elevation="0">

                            <Box display="flex" width={"100%"}>
                                {
                                    data.map((e) => {
                                        return (<Roundcard id={Math.random()} title={"Salad"} imgUrl={"https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} />)
                                    })
                                }
                            </Box>
                        </Paper>
                        <Paper variant="elevation" elevation="0">

                            <Box display="flex" width={"100%"}>
                                {
                                    data.map((e) => {
                                        console.log("running");
                                        return (
                                            <Roundcard id={Math.random()} title={"Burger"} imgUrl={"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"} />)
                                    })
                                }
                            </Box>
                        </Paper>
                    </Carousel>
                </Paper>
                <Paper variant="elevation" elevation="1" sx={{
                    marginTop: '10px'
                }}>
                    <Typography variant="h6" component="h6" sx={{
                        margin: "5px 10px",
                        alignSelf: "center",
                        fontWeight: 900
                    }}>
                        Top Restaurant Chains in Delhi!
                    </Typography>
                    <Carousel>
                        <Paper variant="elevation" elevation="0">

                            <Box display="flex" width={"100%"}>
                                {
                                    data2.map((e) => {
                                        return (
                                            <Customcard id={Math.random()} title={"Burger King"} ratings={"4.2"} restaurant={"Yummy Restaurant"} food_category={"junk food , spicy food"} imgUrl={"https://plus.unsplash.com/premium_photo-1669931367700-e4e1e0387d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"} />
                                        )
                                    })
                                }
                            </Box>
                        </Paper>
                        <Paper variant="elevation" elevation="0">

                            <Box display="flex" width={"100%"}>
                                {
                                    data2.map((e) => {
                                        return (
                                            <Customcard id={Math.random()} title={"Strawberry"} ratings={"4.2"} restaurant={"Yummy Fruit Store"} food_category={"Healty food , sweet food"} imgUrl={"https://plus.unsplash.com/premium_photo-1669680785843-70fac8905d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"} />
                                        )
                                    })
                                }
                            </Box>
                        </Paper>
                    </Carousel>
                </Paper>
                <Paper variant="elevation" elevation="1" sx={{
                    marginTop: '10px'
                }}>
                    <Typography variant="h6" component="h6" sx={{
                        margin: "5px 10px",
                        alignSelf: "center",
                        fontWeight: 900
                    }}>
                        Top Restaurant Chains in Delhi!
                    </Typography>
                    <Box display="flex" justifyContent={'center'} sx={{
                        width: "100%",
                        flexWrap: "wrap",
                    }}>
                        <Box display="flex" sx={{
                            width: "98%",
                            flexWrap: "wrap",
                            marginLeft: { xs: '0', md: '30px' },
                            justifyContent: { xs: 'center', md: 'flex-start' }
                        }}>
                            {
                                [...data, ...data2].map((e) => {
                                    return (
                                        <Customcard wd={"250px"} id={Math.random()} title={"Strawberry"} ratings={"4.2"} restaurant={"Yummy Fruit Store"} food_category={"Healty food , sweet food"} imgUrl={"https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"} />
                                    )
                                })
                            }</Box>
                        <Button sx={{
                            color: 'black',
                            borderColor: 'lightgray',
                            marginBottom: '10px',
                        }} variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
                            Show More
                        </Button>
                    </Box>
                </Paper>
                <Paper variant="elevation" elevation="1" sx={{
                    marginTop: '10px'
                }}>
                    <Typography variant="h6" component="h6" sx={{
                        margin: "5px 10px",
                        alignSelf: "center",
                        fontWeight: 900
                    }}>
                        Top Restaurant Chains in Delhi!
                    </Typography>
                    <Box display="flex" justifyContent={'center'} sx={{
                        width: "100%",
                        flexWrap: "wrap",
                    }}>
                        <Box display="flex" sx={{
                            width: "98%",
                            flexWrap: "wrap",
                            marginLeft: { xs: '0', md: '30px' },
                            padding: '10px',
                            justifyContent: { xs: 'center', md: 'space-between' }
                        }}>
                            {
                                [...data, , 5, 4, 9, 8, 7].map((e) => {
                                    return (
                                        <Button sx={{
                                            color: 'black',
                                            borderColor: 'lightgrey',
                                            marginBottom: '10px',
                                            width: '250px',
                                            padding: '15px',
                                        }} variant="outlined">
                                            Fari
                                        </Button>
                                    )
                                })

                            }
                            <Button endIcon={<KeyboardArrowDownIcon />} sx={{
                                color: 'black',
                                borderColor: 'lightgrey',
                                marginBottom: '10px',
                                width: '250px',
                                padding: '15px',
                            }} variant="outlined" >
                                Show More
                            </Button>
                        </Box>
                    </Box>
                </Paper>

            </Container>
            <Box sx={{
                width: '100vw',
                height: '130px',
                backgroundColor: 'lightgray',
            }}>
                <Container maxWidth="lg" >
                    <Box display="flex" width={"100%"} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-evenly'} alignItems={'center'} >
                        <Box width={"40%"} >
                            <Typography variant="h6" component="h6" sx={{
                                margin: "5px 10px",
                                alignSelf: "center",
                                fontWeight: 900,
                                color: 'darkblue'
                            }}>
                                For better experience,download the FOSSIP app now
                            </Typography>
                        </Box>
                        <Box display="flex" width={"40%"} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                            <img src={playstore} alt="playstore icon" style={{
                                borderRadius: "15px"
                            }} />
                            <img src={appstore} alt="playstore icon" style={{
                                borderRadius: "15px"
                            }} />
                        </Box>
                    </Box>
                </Container>

            </Box>

        </>
    )
}

export default Home