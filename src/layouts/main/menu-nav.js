import { Box, Menu, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

export default function MenuNav(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <Box position={"relative"} 
        onMouseEnter={handleOpen} 
        onMouseLeave={handleClose}
    >
        <Typography
            key={props.page.name}
            sx={{
                m: 1,
                px: 3,
                py:2,
                display: "block",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "unset",
                transition: "0.25s",
                fontFamily: (theme) => theme.typography.header,
                textTransform: 'uppercase',
                textAlign:"center",
                color:  (open ? ((theme) => theme.color.orange) : ((theme) => theme.color.darkBlue)),
                textDecoration: open ? 'underline' :'none',
                "&:hover": {
                    color:  (theme) => theme.color.orange,
                    textDecoration: 'underline',
                    cursor:"pointer"
                },
            }}
            
    
            >
            {props.page.name}
        </Typography>
        {
            props.page.child?.length > 0 &&
            <ul 
                style={{
                    position:'absolute',
                    display: open ? 'block' : 'none',
                    color:  '#06486B',
                    margin: '0',
                    background: '#efefef',
                    padding: 0
                }}
            >
                {
                    props.page.child.map((child)=>{
                        return (
                            <li 
                                className={styles.menu__li}
                                key={child.name}
                            >
                                {child.name}
                            </li>
                        )
                    })
                }
            </ul>
        }
    </Box>
  )
}