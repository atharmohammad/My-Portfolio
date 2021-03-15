import Me from '../../Assets/ME.jpg'
import Fb from '../../Assets/fb.png'
import Github from '../../Assets/github.png'
import LinkedIn from '../../Assets/linkedin.png'
import Twitter from '../../Assets/twitter.png'
import A from '../../Assets/A.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import {Button,Typography,Box,AppBar,Toolbar,IconButton} from '@material-ui/core'
import {useHistory} from 'react-router-dom';
import styles from './Resume.module.css'
const useStyles = makeStyles((theme) => ({
  img:{
    height:'40vh',
    borderRadius:'15px',
    marginTop:'30px'
  },
  root: {
     color: "black",
     marginLeft:'5rem',
   },

}));

export default function Resume() {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Grid container spacing={0} direction="column" spacing="1" style={{ minHeight: '100vh' }}>
    <AppBar position="static" style={{ background: 'black',minHeight:'10vh' }}>
      <Toolbar variant="dense">
      <Button variant="h6" color="inherit" className={styles.logo} onClick={()=>history.push('/')}>
        <img src={A} alt="Home" style={{height:'45px',margin:'5px' }} />
      </Button>
        <Box container display="flex" flexWrap="nowrap" style={{marginLeft:'50rem'}}>
          <Button variant="h6" color="inherit" className={styles.button}>
            <Typography style={{  fontFamily: ['Pacifico','cursive',].join(',')}}>
              Projects
            </Typography>
          </Button>
            <Grid style={{textAlign:'right'}}>
              <Button variant="h6" color="inherit" className={styles.logo}>
                <img src={Fb} alt="Facebook" style={{height:'25px',margin:'5px' }} />
              </Button>
              <Button variant="h6" color="inherit" className={styles.logo}>
                <img src={Github} alt="Github" style={{height:'40px',margin:'5px' }} />
              </Button>
              <Button variant="h6" color="inherit" className={styles.logo}>
                <img src={LinkedIn} alt="LinkedIn" style={{height:'35px',margin:'5px' }} />
              </Button>
              <Button variant="h6" color="inherit" className={styles.logo}>
                <img src={Twitter} alt="Twitter" style={{height:'30px',margin:'5px' }} />
              </Button>
            </Grid>
        </Box>

      </Toolbar>
    </AppBar>
      <Box container display="flex" flexWrap="nowrap" xs={12} sm={12} md={4} style={{margin:'70px'}}>
        <Grid item xs={12} sm={12} className={`${classes.root} ${styles.textdiv}`}>
          <Typography variant='h2' style={{margin:'20px',textAlign:'left',
          fontFamily: [
            'Pacifico',
            'cursive',
          ].join(','),}}>
            About Me
          </Typography>
            <Typography style={{margin:'20px',textAlign:'left',fontSize:'20px',
            fontFamily: [
              'Syne Mono',
              'monospace',
            ].join(','),}}>
              I am a passionate engineering undergraduate with a demonstrated academic record ,
              I have a strong hold on Data structures and algorithms and eager
              to gain professional work experience,I enjoy turning complex problems into
              simple intiutive solutions
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={styles.Imgdiv}>
          <img src={Me} className={classes.img} />
        </Grid>
      </Box>
    </Grid>
  );
}
