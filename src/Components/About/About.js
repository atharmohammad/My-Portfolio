import Me from '../../Assets/ME.jpg'
import Gmail from '../../Assets/gmail.png'
import Github from '../../Assets/github.png'
import LinkedIn from '../../Assets/linkedin.png'
import Twitter from '../../Assets/twitter.png'
import A from '../../Assets/A.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import {Button,Typography,Box,AppBar,Toolbar,IconButton} from '@material-ui/core'
import {useHistory} from 'react-router-dom';
import styles from './About.module.css'
import bounceStyle from '../Languages/LanguageChart/LanguageChart.module.css'
import Navbar from '../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  img:{
    height:'40vh',
    borderRadius:'15px',
    marginTop:'30px',
    [theme.breakpoints.down('sm')]: {
       height:'0',
       marginTop:'15px',
   },
  },
  root: {
     color: "black",
     marginLeft:'5rem',
     [theme.breakpoints.down('md')]: {
        margin:'0',
    },
   },
   desc:{
     margin:'20px',
     textAlign:'left',
     fontSize:'20px',
     fontFamily: [
       'Noto Sans JP',
       'sans-serif',
     ].join(','),
     [theme.breakpoints.down('sm')]: {
        fontSize:'12px',
        margin:'2vh 2vh 0 0',
        width:'40vh'

    },
   },
   title:{
     margin:'20px',
     textAlign:'left',
     fontFamily: ['Lobster','cursive',].join(','),
     [theme.breakpoints.down('md')]: {
        fontSize:'20px',
        margin:'0'
    },
   },
   scroll:{
     fontFamily: [
       'Syne Mono',
       'monospace',
     ].join(',') ,
      marginRight:'4vh',
      [theme.breakpoints.down('md')]: {
        fontSize:'9px'
     },
   },
   arrow:{
     [theme.breakpoints.down('md')]: {
        transform:'scale(0,0)'
    },
  },
  header:{
    minHeight: '80vh',
    [theme.breakpoints.down('md')]: {
      minHeight: '60vh',
   },
  }

}));

export default function About() {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Grid container spacing={0} direction="column" spacing="1" className={classes.header} >
      <Navbar/>
      <Box container display="flex" flexWrap="nowrap" xs={12} sm={12} md={4} style={{margin:'70px'}}>
        <Grid item xs={12} sm={12} className={`${classes.root} ${styles.textdiv}`}>
          <Typography variant='h2' className={classes.title}>
            About Me
          </Typography>
            <Typography className={classes.desc}>
              I am a passionate engineering undergraduate with a demonstrated academic record ,
              I have a strong hold on Data structures and algorithms and eager
              to gain professional work experience,I enjoy turning complex problems into
              simple intiutive solutions
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} >
          <img src={Me} className={`${classes.img} ${styles.Imgdiv}`} />
        </Grid>
      </Box>
      <Typography className={classes.scroll}>Scroll down</Typography>
    
    </Grid>
  );
}
