import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './ImgMediaCard';
import {connect} from 'react-redux';
import './CenteredGrid.css'

class CenteredGrid extends React.Component { 
 classes = this.useStyles();
 
 componentDidMount() {
  this.getColors()
 }
 
 getColors() {
  fetch('http://www.colr.org/json/colors/random/20')
  .then((data) => data.json())
  .then((parsedData) => {
   this.fillEmptyColors(parsedData.colors)
  })
 }
 
 fillEmptyColors(colors){
  let filledColors = colors.map(async (color, index)=>{
   if (color.hex) {
    return color
   }else{
    return await this.getRandomColor()
   }
  })
  Promise.all(filledColors).then(values=>{
   this.props.setColores(values)
  })
 }
 
 getRandomColor(){
  return fetch('http://www.colr.org/json/colors/random/1')
  .then((data) => data.json())
  .then((parsedData) => {
   return parsedData.colors[0]
  })
 }

 useStyles() {
  return makeStyles((theme) => ({
   root: {
    flexGrow: 1
   },
   paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
   }
  }));
 }

 render() {
  return (
   <div className={this.classes.root}>
   <Grid container spacing={1}>
    {this.props.colores.map((color, index)=>{
     return(
     <Grid item xs={3} key={index}>
      <Paper className={this.classes.paper+' pointer'}>
       <ImgMediaCard color={color}></ImgMediaCard>
      </Paper>
     </Grid>)
     })}
   </Grid>
  </div>);
 }
}

const mapStateToProps = state => ({colores: state.colores})

const mapDispatchToProps = dispatch => ({
 setColores(colores){
  dispatch({
   type:'SET_COLORES',
   colores
  })
 }
})

export default connect(mapStateToProps, mapDispatchToProps)(CenteredGrid)