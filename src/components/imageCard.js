import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles'
import { Collapse } from '@mui/material';



const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize:'1.1rem',
        color: '#ddd'

    },

})

export default function ImageCard({place, checked}) {

    const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? {timeout : 1000} : {})}>
    <Card className={classes.root}
    background={'rgba(0,0,0,0.5'}>
      <CardMedia
        component="img"
        height="440"
        image={place.imageUrl}
        alt={place.title}
      />
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h1" >
          {place.title}
        </Typography>
        <Typography className={classes.desc} variant="body2" color="textSeccondary" component="p" >
          {place.description}
        </Typography>
      </CardContent>
      
    </Card>
    </Collapse>
  );
}