import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
/*global talkify*/ // To disable any eslint 'talkify not defined' errors

const useStyles = makeStyles({
 root: {
  maxWidth: 345,
  minHeight: 100
 }
});
talkify.config.remoteService.host = 'https://talkify.net';
talkify.config.remoteService.apiKey = '3250c4b0-3b78-4be5-aca2-2e1ca9041987';

function sayColor(colorName) {
 var player = new talkify.TtsPlayer();
 player.playText(colorName);
}

export default function ImgMediaCard(props) {
 const classes = useStyles();
 let validColor = props.color.tags && props.color.tags[0]

 if (validColor) {
  return (<Card className={classes.root} onClick={() => sayColor(props.color.tags[0].name)} style={{
    backgroundColor: '#' + props.color.hex
   }}>
   <CardActionArea>
    <CardContent>
     <Typography variant="h5" component="h2">
      {props.color.tags[0].name}
     </Typography>
    </CardContent>
   </CardActionArea>
  </Card>)

 } else {
  return <p>No color data</p>
 }
}