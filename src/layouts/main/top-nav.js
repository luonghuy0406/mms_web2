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
    name: 'Home',
    path: '/',
    child: []
  }, 
  {
    name: 'About Us',
    path: '/aboutus',
    child: []
  }, 
  {
    id: '1',
    name: 'Chocking Compound',
    path: '/chocking_compound',
    child: []
  }, 
  {
    id: '2',
    name: 'Auxiliary Machinery',
    path: '/auxiliary_machinery',
    child: []
  }, 
  {
    id: '3',
    name: 'Viega Pipe & Fittings',
    path: '/viega_pipe_fittings',
    child: []
  }, 
  {
    id: '4',
    name: 'Viton/FKM rubber packing sheet',
    path: '/viton_fkm_rubber_packing_sheet',
    child: []
  },
  {
    name: 'News and Event',
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
                      {pages.map((page) => {
                        let childs =  props.products?.filter((product) => {
                          return page.id == product.id_group
                        })
                        return (
                        <div key={page.name+"nav-wrap"}>
                          <ListItem key={page.name+"nav"} disablePadding>
                            <ListItemButton>
                              <Link href={page.path}>
                                <ListItemText sx={[{color:(theme)=> theme.color.darkBlue, fontWeight: 700}, {'&:hover':{color:(theme)=>{theme.color.orange}}}]} primary={page.name} />
                              </Link>
                            </ListItemButton>
                          </ListItem>
                          {
                           childs?.map((child)=>{
                              return (
                                <ul key={child.name +"nav-child"} disablePadding>
                                    <ListItem disablePadding>
                                      <ListItemButton>
                                        <Link href={`${page.path}/${convertPath(child.name)}-${child.id_product}`}>
                                          <ListItemText sx={[{color:(theme)=> theme.color.darkBlue, fontWeight: 700}, {'&:hover':{color:(theme)=>{theme.color.orange}}}]} primary={child.name} />
                                        </Link>
                                      </ListItemButton>
                                    </ListItem>
                                </ul>
                              )
                            })
                          }
                        </div>
                      )})}
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
              sx={{margin:'40px !important',display: { xs: "none",md: "none", lg: "flex" },}}
              
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
                  
                  let childs =  props.products?.filter((product) => {
                    return page.id == product.id_group
                  })
                  return (
                    <MenuNav key={page.path+"page"} page={page} childs={childs}/>
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

export function convertPath(str) {
  return toSlug(str);
}
function toSlug(str) {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();     
 
	// xóa dấu
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
	str = str.replace(/(đ)/g, 'd');
 
	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, '');
 
	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, '-');
	
	// Xóa ký tự - liên tiếp
	str = str.replace(/-+/g, '-');
 
	// xóa phần dự - ở đầu
	str = str.replace(/^-+/g, '');
 
	// xóa phần dư - ở cuối
	str = str.replace(/-+$/g, '');
 
	// return
	return str;
}