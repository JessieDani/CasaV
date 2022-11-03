import React, { useEffect, useState } from 'react'
import {makeStyles} from '@mui/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent:'center',
        alingItems:'center',
        height: '200vh',
    },
    appBar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto'

    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon:{
        color: '#fff',
        fontSize: '2rem'
    },
    colorText: {
        color: 'red'
    },
    container:{
        textAlign: 'center',
    },
    title:{
        color: '#fff',
        fontSize: '4.5rem'
    },
    goDownIcon: {
        color: '#fff',
        fontSize : '4rem',
    },
})
);
export default function Header() {

const classes = useStyles();
const [checked, setChecked] = useState(false);
useEffect(() => {
    setChecked(true)
}, []);

return (
<div className={classes.root} id="header">
    <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
            <h1 className={classes.appbarTitle}>CasaVenezuela <span className={classes.colorText}>Valencia</span>
            </h1>
        <IconButton>
        <SortIcon className={classes.icon}></SortIcon>
        </IconButton>

        </Toolbar>
    </AppBar>
    <Collapse in={checked} {...(checked ? {timeout : 1000} : {})} collapseheight={50}>
<div className={classes.container}>
    <h1 className={classes.title}> Bienvenido a <br /> CasaVenezuela En <span className={classes.colorText}>Valencia</span></h1>
    <Scroll to="place-to-visit" smooth={true}>
    <IconButton>
        <ExpandMoreIcon className={classes.goDownIcon}></ExpandMoreIcon>
    </IconButton>
    </Scroll>
    </div>
    </Collapse>
</div>
    );
}