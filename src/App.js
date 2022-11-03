import React from 'react'
import {makeStyles} from '@mui/styles'
import { CssBaseline } from '@mui/material';
import Header from './components/header';
import PlaceToVisit from './components/placeToVisit';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image-1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
  },
})
);

export default function App() {

const classes = useStyles();

return <div className={classes.root}>
  <CssBaseline/>
  <Header/>
  <PlaceToVisit/>
</div>

}