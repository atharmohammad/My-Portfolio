import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rreact from '../../../Assets/react.png'
import Dj from '../../../Assets/dj.png'
import Css from '../../../Assets/css.png'
import Html from '../../../Assets/html.png'
import Mongodb from '../../../Assets/mongodb.png'
import Nodejs from '../../../Assets/nodejs.png'

import {Button,Typography,Box,Grid} from '@material-ui/core'
import entryStyle from '../../About/About.module.css'
import bounceStyle from '../LanguageChart/LanguageChart.module.css'

const useStyles = makeStyles((theme) => ({
  typography:{
    paddingTop:'2.5vh',
    fontSize:'15px',
    fontWeight:'bold',
    fontFamily: [
      'Syne Mono',
      'monospace',
    ].join(','),
  },
  web:{
    marginLeft:'15vh',
    [theme.breakpoints.down('sm')]: {
      margin:'5vh 0 0 1vh',
    }
  },
  root:{
    minHeight: '40vh',
    backgroundColor:'white',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'0',
      paddingRight:'4vh'
    }
  },
  tech:{
    marginTop:'5vh',
    textAlign:'center',
    fontFamily: [
      'Akaya Telivigala',
      'cursive',
    ].join(','),
    fontSize:'7vh',
    height:'12vh',
    width:'80%',
    [theme.breakpoints.down('sm')]: {
      fontSize:'4vh',
      marginTop:'10vh'
    }
  },
  img:{
    height:'9vh',
    [theme.breakpoints.down('sm')]: {
      height:'5vh'
    }
  }

}));


export default function Webtexh() {

    const classes = useStyles();
    return (
    <Grid id="chart" container sm={12} spacing={0} direction="column"  className={classes.root}>
        <Grid container sm={12} direction='row' className={classes.box} className={entryStyle.textdiv}>
          <Grid item  direction="column" className={classes.web}>
            <img src={Rreact} alt="React" className={`${bounceStyle.bounce2} ${classes.img}`}/>
            <Typography className={classes.typography}>Reactjs</Typography>
          </Grid>
          <Grid item  direction="column" className={classes.web}>
            <img src={Nodejs} alt="Nodejs" className={`${bounceStyle.bounce2} ${classes.img}`} />
            <Typography className={classes.typography}>Nodejs</Typography>
          </Grid>
          <Grid item  direction="column" className={classes.web}>
            <img src={Dj} alt="Djagno" className={`${bounceStyle.bounce2} ${classes.img}`}/>
            <Typography className={classes.typography}>Django</Typography>
          </Grid>
          <Grid item  direction="column" className={classes.web}>
            <img src={Mongodb} alt="Material-ui" className={`${bounceStyle.bounce2} ${classes.img}`} />
            <Typography className={classes.typography}>MongoDB</Typography>
          </Grid>
          <Grid item  direction="column"  className={classes.web}>
            <img src={Css} alt="css"  className={`${bounceStyle.bounce2} ${classes.img}`}/>
            <Typography className={classes.typography}>Css</Typography>
          </Grid>
          <Grid item  direction="column"  className={classes.web}>
            <img src={Html} alt="Html" className={`${bounceStyle.bounce2} ${classes.img}`}/>
            <Typography className={classes.typography}>Html5</Typography>
          </Grid>
      </Grid>
      <Typography variant='h2' className={`${entryStyle.Imgdiv} ${classes.tech}`}>
      WebTechnologies
      </Typography>
    </Grid>
    );
  }
