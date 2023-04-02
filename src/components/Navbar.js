import React, { useState } from 'react'
import { AppBar, Toolbar, Container, Typography, useTheme, Box, Divider, Paper, List, ListItem, ListItemIcon, TextField, InputBase, IconButton, useScrollTrigger } from '@mui/material';
import { ReactComponent as Logo } from '../assets/icons/fossip-logo.svg'
import NearMeIcon from '@mui/icons-material/NearMe';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Navbar = () => {
    const [locationSetDialogToggle, setLocationSetDialogToggle] = useState(false)
    const theme = useTheme();
    return (
        <>
            <ElevationScroll >
                <AppBar sx={{
                    backgroundColor: theme.palette.colors.lgrey
                }}>
                    <Paper variant="elevation" elevation="1">


                        <Container maxWidth="lg">
                            <Toolbar sx={{
                                justifyContent: { xs: 'flex-start', md: 'space-between' },
                                alignItems: { xs: 'flex-start', md: 'center' },
                                flexDirection: { xs: 'column', md: 'row' }
                            }}>
                                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>

                                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                                        <Box display="flex" >
                                            <Logo style={{
                                                width: '40px', height: '40px', marginRight: '5px'
                                            }} />
                                            <Typography
                                                variant="h6"
                                                noWrap
                                                component="a"
                                                href="/"
                                                sx={{
                                                    mr: 2,
                                                    display: 'flex',
                                                    fontFamily: 'monospace',
                                                    fontWeight: 700,
                                                    letterSpacing: '.2.3rem',
                                                    color: theme.palette.colors.dgrey,
                                                    textDecoration: 'none',
                                                    alignSelf: 'center'

                                                }}
                                            >
                                                FOSSIP
                                            </Typography>
                                        </Box>
                                        <Divider variant="middle" orientation={{ xs: 'horizontal', md: 'vertical' }} flexItem sx={{
                                            margin: { xs: '5px 0', md: '2' }
                                        }} />
                                    </Box>
                                    <Box position={"relative"}>
                                        <Box display={"flex"} marginLeft={{ xs: '0', md: '3' }} sx={{
                                            '&:hover': {
                                                cursor: "pointer",
                                            },
                                        }} onClick={() => { setLocationSetDialogToggle(!locationSetDialogToggle) }}>
                                            <NearMeIcon style={{
                                                color: '#31CFFC',
                                                alignSelf: 'center'
                                            }} />
                                            <Typography
                                                variant="h6"
                                                noWrap
                                                component="h6"
                                                sx={{
                                                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                                                    margin: '2px 4px',
                                                    fontWeight: 500,
                                                    wordSpacing: '-0.2rem',
                                                    color: '#31CFFC',

                                                }}
                                            >
                                                Setup your precise location
                                            </Typography>
                                            <KeyboardArrowDownIcon style={{
                                                color: '#31CFFC',
                                                alignSelf: 'center',
                                                marginLeft: -4
                                            }} />
                                        </Box>
                                        <Divider variant="middle" orientation={"horizontal"} flexItem sx={{
                                            margin: { xs: '4px 0', md: '2' },
                                            display: { xs: 'block', md: 'none' }
                                        }} />
                                        <Paper variant="elevation" elevation="3" sx={{
                                            position: 'absolute',
                                            top: '35px',
                                            right: '0px',
                                            zIndex: 999,
                                            display: locationSetDialogToggle ? 'block' : 'none'
                                        }}>
                                            <List>
                                                <ListItem sx={{ py: 1 }}>
                                                    <ListItemIcon sx={{ minWidth: 'unset', marginRight: 1 }}>
                                                        <NearMeIcon style={{
                                                            color: '#31CFFC',
                                                        }} />

                                                    </ListItemIcon>
                                                    <TextField id="standard-basic" label="Search for area, street name..." variant="standard" />
                                                </ListItem>
                                                <ListItem sx={{ py: 1 }}>
                                                    <ListItemIcon sx={{ minWidth: 'unset', marginRight: 1 }}>
                                                        <NearMeIcon style={{
                                                            color: '#31CFFC',
                                                        }} />
                                                    </ListItemIcon>
                                                    <Typography
                                                        variant="subtitle1"
                                                        noWrap
                                                        component="h6"
                                                        sx={{
                                                            margin: '2px 4px',
                                                            fontWeight: 500,
                                                            wordSpacing: '-0.2rem',
                                                            color: '#31CFFC',

                                                        }}
                                                    >
                                                        Locate me using GPS
                                                    </Typography>
                                                </ListItem>
                                            </List>
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent={"space-between"} width={'35%'}>


                                    <Box sx={{ width: { xs: '285px', md: '250px' }, alignSelf: 'center' }}>

                                        <Paper variant="elevation" elevation="1" sx={{ display: 'flex', alignItems: 'center', padding: '3.2px', margin: { xs: '5px 0 10px 0', md: 'auto' } }}>
                                            <SearchIcon />
                                            <InputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                                sx={{ ml: 1, flexGrow: 1 }}
                                            />
                                        </Paper>
                                    </Box>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                        sx={{
                                            alignSelf: 'center',
                                            width: '32px',
                                            position: { xs: 'absolute', md: 'static' },
                                            top: '16px',
                                            right: '0',
                                        }}
                                    >
                                        <AccountCircle sx={{ fontSize: '32px' }} />
                                    </IconButton>
                                </Box>

                            </Toolbar>
                        </Container>
                    </Paper>
                </AppBar>
            </ElevationScroll>
            <Box height={{ xs: '160px', md: '70px' }}>
            </Box>
        </>
    )
}

export default Navbar