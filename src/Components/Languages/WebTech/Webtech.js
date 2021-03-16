import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rreact from '../../../Assets/react.png'
import Dj from '../../../Assets/dj.png'
import Css from '../../../Assets/css.png'
import Html from '../../../Assets/html.png'
import Mi from '../../../Assets/Mi.png'

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
  box:{
    marginTop:'10vh'
  },


}));


export default function Webtexh() {

    const classes = useStyles();
    return (
    <Grid id="chart" container spacing={0} direction="column" spacing="1" style={{ minHeight: '40vh',backgroundColor:'white',marginLeft:'80px' }}>
      <Box container display="flex" flexWrap="nowrap">
        <Box container display="flex" flexWrap="nowrap" className={classes.box} className={entryStyle.textdiv}>
          <Grid container  direction="column"  >
            <img src={Rreact} alt="React" style={{height:'10vh',}} className={bounceStyle.bounce2}/>
            <Typography className={classes.typography}>Reactjs</Typography>
          </Grid>
          <Grid container  direction="column" style={{marginLeft:'15vh'}}>
            <img src={Dj} alt="Djagno" style={{height:'10vh',}} className={bounceStyle.bounce2} />
            <Typography className={classes.typography}>Django</Typography>
          </Grid>
          <Grid container  direction="column"  style={{marginLeft:'15vh'}}>
            <img src={Css} alt="css" style={{height:'10vh',}} className={bounceStyle.bounce2}/>
            <Typography className={classes.typography}>Css</Typography>
          </Grid>
          <Grid container  direction="column"  style={{marginLeft:'15vh'}}>
            <img src={Html} alt="Html" style={{height:'10vh',}} className={bounceStyle.bounce2}/>
            <Typography className={classes.typography}>Html5</Typography>
          </Grid>
          <Grid container  direction="column"  style={{marginLeft:'15vh'}}>
            <img src={Mi} alt="Material-ui" style={{height:'10vh',}}className={bounceStyle.bounce2} />
            <Typography className={classes.typography}>Material-UI</Typography>
          </Grid>
        </Box>
        <Typography variant='h2' style={{marginLeft:'20vh',fontFamily: [
          'Akaya Telivigala',
          'cursive',
        ].join(','),fontSize:'7vh',height:'12vh'}} className={entryStyle.Imgdiv}>
          WebTechnologies
        </Typography>
      </Box>
    </Grid>
    );
  }
