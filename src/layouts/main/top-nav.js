import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => theme.color.prb,
          position: 'sticky',
          width: {lg: '100%'},
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <>
                <Link href={'/'}>
                <Typography
                    fontFamily={"var(--font-family)"}
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                    mr: 2,
                    display: { xs: "none",md: "none", lg: "flex" },
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    }}
                >
                    <img src={'./mms_logo.png'} width={65} />
                </Typography>
                </Link>

                
                <IconButton
                size="large"
                //   aria-label="account of current user"
                //   aria-controls="menu-appbar"
                //   aria-haspopup="true"
                //   onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0 ,display: { xs: "block",md: "block", lg: "none" }}}
                >
                <MenuIcon />
                </IconButton>
            </>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            menu
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
