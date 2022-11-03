import React from 'react'
import { makeStyles } from '@mui/styles'
import ImageCard from './imageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        
        
    },
})
);

export default function () {

const classes = useStyles();
const checked = useWindowPosition('header');

return (
<div className={classes.root} id="place-to-visit">
<ImageCard place={places[0]} checked={checked}> </ImageCard>
<ImageCard place={places[1]} checked={checked}> </ImageCard>
</div>
);
}