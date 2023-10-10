import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link';
import useTrans from '@/hooks/useTrans';
import { convertPath } from './top-nav';

export default function MenuNav(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
  const trans = useTrans()
    return (
    <Box
        sx={{minWidth:'115px'}}
        position={"relative"} 
        onMouseEnter={handleOpen} 
        onMouseLeave={handleClose}
    >
        <Link href={props.page.path}>
            <Typography
                key={props.page.name}
                sx={{
                    m: 1,
                    px: 1,
                    py:1,
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
                {trans[props.page.name]}
            </Typography>
        </Link>
        {
            props.childs?.length > 0 &&
            <ul 
                style={{
                    position:'absolute',
                    display: open ? 'block' : 'none',
                    color:  '#06486B',
                    margin: '0',
                    background: '#eaf1f4',
                    padding: 0,
                    minWidth: '210px'
                }}
            >
                {
                    props.childs?.map((child)=>{
                        return (
                            <Link key={`${props.page.path}/${convertPath(child.name)}`} href={`${props.page.path}/${convertPath(child.name)}-${child.id_product}`}>
                                <li 
                                    className={styles.menu__li}
                                >
                                    {child.name}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        }
    </Box>
  )
}
