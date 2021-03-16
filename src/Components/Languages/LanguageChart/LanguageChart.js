import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Cplus from '../../../Assets/C++.png'
import Js from '../../../Assets/Js.png'
import Python from '../../../Assets/python.png'
import {Button,Typography,Box,Grid} from '@material-ui/core'
import bounceStyle from './LanguageChart.module.css'
import entryStyle from '../../About/About.module.css'

const useStyles = makeStyles((theme) => ({
  typography:{
    paddingTop:'2.5vh',
    fontSize:'20px',
    fontWeight:'bold',
    marginLeft:'3vh',
    fontFamily: [
      'Syne Mono',
      'monospace',
    ].join(','),

  },
  box:{
    marginTop:'10vh'
  }

}));


export default function Chart() {

    const classes = useStyles();
    return (
    <Grid id="chart" container spacing={0} direction="column" spacing="1" style={{ minHeight: '90vh',backgroundColor:'white',marginLeft:'80px' }}>
      <Typography variant='h2' style={{textAlign:'left',
        fontFamily: [
          'Pacifico',
          'cursive',
        ].join(','),}} className={entryStyle.textdiv}>
        Skills I have
      </Typography>
      <Box container display="flex" flexWrap="nowrap">
        <Grid container direction="column" spacing="1" style={{width:'60%'}} className={entryStyle.textdiv}>
            <Box container display="flex" flexWrap="nowrap" className={classes.box}>
              <img src={Cplus} alt="c++" style={{height:'10vh',}} className={bounceStyle.bounce2}/>
              <Grid item style={{backgroundColor:'black',minHeight:'10vh',width:'80%',marginLeft:'40px'}}></Grid>
              <Typography className={classes.typography}>85%</Typography>
            </Box>
            <Box container display="flex" flexWrap="nowrap" className={classes.box}>
              <img src={Js} alt="Js" style={{height:'10vh',}} className={bounceStyle.bounce2} />
              <Grid item style={{backgroundColor:'black',minHeight:'10vh',width:'70%',marginLeft:'40px'}}></Grid>
              <Typography className={classes.typography}>80%</Typography>
            </Box>
            <Box container display="flex" flexWrap="nowrap" className={classes.box}>
              <img src={Python} alt="Python" style={{height:'10vh',}} className={bounceStyle.bounce2} />
              <Grid item style={{backgroundColor:'black',minHeight:'10vh',width:'60%',marginLeft:'40px'}}></Grid>
              <Typography className={classes.typography}>70%</Typography>
            </Box>
          </Grid>

          <Box className={entryStyle.Imgdiv}>
            <Typography style={{margin:"20vh 0 0 10vh",fontFamily: [
              'Akaya Telivigala',
              'cursive',
            ].join(','),fontSize:'7vh',height:'12vh'}}>Languages I Use</Typography>
          </Box>
        </Box>
      </Grid>
    );
  }
