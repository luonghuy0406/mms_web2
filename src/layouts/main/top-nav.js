import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import MenuNav from './menu-nav';

const TOP_NAV_HEIGHT = 150;
const pages = [
  {
    name: 'home',
    path: '/',
    child: []
  }, 
  {
    name: 'about us',
    path: '/aboutus',
    child: []
  }, 
  {
    name: 'chocking compound',
    path: '/chocking-compound',
    child: []
  }, 
  {
    name: 'auxiliary machinery',
    path: '/auxiliary-machinery',
    child: [
      {
        name: 'Boss Oily waterseparator',
        path: '/boss-oily-waterseparator',
      },
      {
        name: 'Sewage treatment',
        path: '/sewage-treatment',
      },
      {
        name: 'Water Maker RO',
        path: '/water-maker-ro',
      }
    ]
  }, 
  {
    name: 'Viega Pipe & Fittings',
    path: '/viega-pipe-fittings',
    child: []
  }, 
  {
    name: 'News and Event',
    path: '/news-event',
    child: []
  }, 
]
export const TopNav = (props) => {
  const [openLeft, setOpenLeft] = useState(false);

  const toggleDrawer = (open) => (event) => {setOpenLeft(open);};
  return (
    <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => theme.color.white,
          position: 'sticky',
          width: {lg: '100%'},
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
      <Container maxWidth='xl'>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{
              minHeight: { xs: '60px',md: '60px', lg: TOP_NAV_HEIGHT },
              px: 2
            }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <>
              <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                >
                  <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                          fontFamily: (theme) => theme.typography.header,
                          mr: 2,
                          display: { xs: "none",md: "none", lg: "flex" },
                          fontWeight: 700,
                          letterSpacing: ".3rem",
                          color: "inherit",
                          textDecoration: "none",
                        }}
                    >
                        <img src={'./mms_logo.png'} width={120} />
                  </Typography>
                  <Typography
                    variant="label"
                    noWrap
                    component="a"
                    sx={{
                      fontFamily: (theme) => theme.typography.header,
                      display: { xs: "none",md: "none", lg: "flex" },
                      fontWeight: 700,
                      color:  (theme) => theme.color.darkBlue,
                      textDecoration: "none",
                      fontSize:"14px"
                    }}
                  >
                    MEKONG MARINE SUPPLY CO., LTD
                  </Typography>
                </Stack>
                
                <IconButton
                  size="large"
                  onClick={toggleDrawer(true)}
                  color="inherit"
                  sx={{ p: 0 ,display: { xs: "block",md: "block", lg: "none" }}}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={'left'}
                  open={openLeft}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                  >
                    <List>
                      {pages.map((text,) => (
                        <>
                          <ListItem key={text.name} disablePadding>
                            <ListItemButton>
                              <ListItemText primary={text.name} />
                            </ListItemButton>
                          </ListItem>
                          {
                            text.child?.map((child)=>{
                              return (
                                <ul key={child.name} disablePadding>
                                  <ListItem key={child.name} disablePadding>
                                    <ListItemButton>
                                      <ListItemText primary={child.name} />
                                    </ListItemButton>
                                  </ListItem>
                                </ul>
                              )
                            })
                          }
                        </>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            </Stack>
            <Stack sx={{display: { xs: "block",md: "block", lg: "none" },}}>
                <img src={'./mms_logo.png'} width={60} />
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{margin:'40px !important'}}
            >
              <Box
                sx={{
                  backgroundColor: (theme) => theme.color.grayLight,
                  flexGrow: 1,
                  display: { xs: "none",md: "none", lg: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => {
                  return (
                    <MenuNav page={page}/>
                    
                  );
                })}
              </Box>
            </Stack>
          </Stack>
      </Container>
      </Box>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
