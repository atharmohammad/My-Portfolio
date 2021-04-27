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
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px'
    },

  },
  box:{
    marginTop:'10vh',
    [theme.breakpoints.down('sm')]: {
      marginTop:'5vh',
      width:'10vh'
    },
  },
  head:{
     minHeight: '90vh',
     backgroundColor:'white',
     marginLeft:'80px' ,
    [theme.breakpoints.down('sm')]: {
      margin:'0',
      minHeight:'50vh'
    },
  },
  skill:{
    textAlign:'left',
    fontFamily: ['Lobster','cursive',].join(','),
    [theme.breakpoints.down('sm')]: {
      fontSize:'20px'
    },
  },
  Imgdiv:{
    textAlign:'left',
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px',
      marginLeft:'0',
      width:'20%'
    },
  },
  Languages:{
    marginTop:'4vh',
    fontFamily: [
      'Akaya Telivigala',
      'cursive',
    ].join(','),
    fontSize:'7vh',
    height:'12vh',
    [theme.breakpoints.down('sm')]: {
      fontSize:'4vh',
    },
  },
  img:{
    height:'10vh',
    [theme.breakpoints.down('sm')]: {
      height:'8vh',
    },
  }

}));


export default function Chart() {

    const classes = useStyles();
    return (
    <Grid id="chart" container spacing={0} sm={12} md={12} direction="column" spacing="1" className={classes.head} >
      <Typography variant='h2' className={`${entryStyle.textdiv} ${classes.skill}`}>
        Skills I have
      </Typography>
        <Grid container direction="column" spacing="1" style={{width:'60%'}} className={entryStyle.textdiv}>
            <Box container display="flex" flexWrap="nowrap" className={classes.box}>
              <img src={Cplus} alt="c++"  className={`${bounceStyle.bounce2} ${classes.img}`}/>
              <Grid item style={{backgroundColor:'black',height:'5vh',width:'65%',margin:'2.4vh 0 0 6vh',borderRadius:'5px'}}></Grid>
              <Typography className={classes.typography}>85%</Typography>
            </Box>
            <Box container display="flex" flexWrap="nowrap" className={classes.box}>
              <img src={Js} alt="Js"  className={`${bounceStyle.bounce2} ${classes.img}`} />
              <Grid item style={{backgroundColor:'black',height:'5vh',width:'58%',margin:'2.4vh 0 0 6vh',borderRadius:'5px'}}></Grid>
              <Typography className={classes.typography}>80%</Typography>
            </Box>
            <Box container display="flex" flexWrap="nowrap" className={classes.box}>
              <img src={Python} alt="Python" className={`${bounceStyle.bounce2} ${classes.img}`} />
              <Grid item style={{backgroundColor:'black',height:'5vh',width:'50%',margin:'2.4vh 0 0 6vh',borderRadius:'5px'}}></Grid>
              <Typography className={classes.typography}>70%</Typography>
            </Box>
          </Grid>


      </Grid>
    );
  }
