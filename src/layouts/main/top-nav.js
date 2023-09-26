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
import LanguagePopover from './LanguagePopover';

const TOP_NAV_HEIGHT = 150;
const pages = [
  {
    name: 'home',
    path: '/',
    child: []
  }, 
  {
    name: 'aboutus',
    path: '/aboutus',
    child: []
  }, 
  {
    name: 'chocking_compound',
    path: '/chocking_compound',
    child: []
  }, 
  {
    name: 'auxiliary_machinery',
    path: '/auxiliary_machinery',
    child: [
      {
        id: 1,
        name: 'Boss Oily water separator'
      },
      {
        id: 2,
        name: 'Sewage treatment'
      },
      {
        id: 3,
        name: 'Water Maker RO'
      }
    ]
  }, 
  {
    name: 'viega_pipe_fittings',
    path: '/viega_pipe_fittings',
    child: []
  }, 
  {
    name: 'viton_fkm_rubber_packing_sheet',
    path: '/viton_fkm_rubber_packing_sheet',
    child: []
  },
  {
    name: 'news',
    path: '/news',
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
          backgroundColor: (theme) => theme.color.grayLight,
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
                              cursor: "pointer"
                            }}
                        >
                          <Link href={'/'} legacyBehavior>
                              <img src={'./mms_logo.png'} alt='mms logo' width={120} />
                          </Link>
                      </Typography>
                      <Link href={'/'} legacyBehavior>
                        <Typography
                          variant="label"
                          noWrap
                          sx={{
                            fontFamily: (theme) => theme.typography.header,
                            display: { xs: "none",md: "none", lg: "flex" },
                            fontWeight: 700,
                            color:  (theme) => theme.color.darkBlue,
                            textDecoration: "none",
                            fontSize:"14px",
                            cursor: "pointer"
                          }}
                        >
                          MEKONG MARINE SUPPLY CO., LTD
                        </Typography>
                        </Link>
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
                      {pages.map((text) => (
                        <>
                          <ListItem key={text.name} disablePadding>
                            <ListItemButton>
                              <Link href={text.path}>
                                <ListItemText primary={text.name} />
                              </Link>
                            </ListItemButton>
                          </ListItem>
                          {
                            text.child?.map((child)=>{
                              return (
                                <ul key={child.name} disablePadding>
                                    <ListItem key={child.name} disablePadding>
                                      <ListItemButton>
                                        <Link href={`${text.path}/${child.id}`}>
                                          <ListItemText primary={child.name} />
                                        </Link>
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
            <Stack sx={{display: { xs: "block",md: "block", lg: "none" }}}>
              <Link href={'/'} legacyBehavior>
                    <img src={'./mms_logo.png'} alt='mms logo' width={60} />
              </Link>
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
                    <MenuNav key={page.path} page={page}/>
                  );
                })}
              </Box>
            </Stack>
            <LanguagePopover/>
          </Stack>
      </Container>
      </Box>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
