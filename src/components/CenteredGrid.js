import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './ImgMediaCard';
import {connect} from 'react-redux';

class CenteredGrid extends React.Component {
 constructor(props) {
  super(props);
  console.log(props);

 }
 
 classes = this.useStyles();
 
 componentDidMount() {
  this.getColors()
 }
 
 getColors() {
  fetch('http://www.colr.org/json/colors/random/12')
  .then((data) => data.json())
  .then((parsedData) => {
   console.log(parsedData)
   this.props.setColores(parsedData.colors)
   // this.fillEmptyColors(parsedData.colors)
  })
 }
 
 // async fillEmptyColors(colors){
 //  let filledColors = await colors.map(async (color, index)=>{
 //   if (color.hex) {
 //    return color
 //   }else{
 //    return await this.getRandomColor()
 //   }
 //  })
 //  console.log({filledColors});
 // }
 
 // getRandomColor(){
 //  return fetch('http://www.colr.org/json/colors/random/1')
 //  .then((data) => data.json())
 //  .then((parsedData) => {
 //   console.log(parsedData.colors)
 //   return parsedData.colors
 //  })
 // }

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
   <Grid container={true} spacing={1}>
    {this.props.colores.map((color, index)=>{
     return(
     <Grid item={true} xs={3} key={index}>
      <Paper className={this.classes.paper}>
       <ImgMediaCard></ImgMediaCard>
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