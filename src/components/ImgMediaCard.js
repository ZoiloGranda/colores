import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
 root: {
  maxWidth: 345,
  minHeight:100
 }
});

export default function ImgMediaCard(props) {
 const classes = useStyles();
 let validColor = props.color.tags && props.color.tags[0]

 // return ({
  if(validColor) {
   return (<Card
    className={classes.root}
    style={{backgroundColor:'#'+ props.color.hex}}
    >
    <CardActionArea>
     <CardContent>
      <Typography variant="h5" component="h2">
       {props.color.tags[0].name}
      </Typography>
     </CardContent>
    </CardActionArea>
   </Card>)

  }else {
   return <p>No color data</p>
  }
 // });
}