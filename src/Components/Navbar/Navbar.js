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
import styles from '../About/About.module.css'
import bounceStyle from '../Languages/LanguageChart/LanguageChart.module.css'
const useStyles = makeStyles((theme) => ({
  img:{
    height:'45px',
    margin:'5px',
    fontSize:'17px',
    [theme.breakpoints.down('sm')]: {
       height:'24px',
       fontSize:'8px'
   },
  },
  root: {
     color: "black",
     marginLeft:'5rem',
   },
   component:{
     marginLeft:'80vh',
     [theme.breakpoints.down('sm')]: {
       marginLeft:'0'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft:'110vh'
   },
  },
  nav:{
    background: 'black',
    minHeight:'10vh',
    [theme.breakpoints.down('sm')]: {
      minHeight:'5vh'
   },
  }

}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory()
  return (
    <AppBar position="static" className={classes.nav}>
      <Toolbar variant="dense">
        <Link href='/' style={{textDecoration:'none'}}>
        <Button variant="h6" color="inherit" className={styles.logo} onClick={()=>history.push('/')}>
          <img src={A} alt="Home" className={classes.img}  />
        </Button>
        </Link>
        <Grid container direction='row' display="flex" flexWrap="nowrap" className={classes.component}>
          <Link href='https://drive.google.com/file/d/1yo_hDD8jZ_s2W9uMv5OtkBRPYuIyeOmP/view?usp=sharing' style={{textDecoration:'none'}}>
            <Button variant="h6" color="inherit" className={styles.button} style={{marginTop:'2vh'}}>
              <Typography className={classes.img} style={{ fontFamily: ['Akaya Telivigala','cursive',].join(','),color:'white'}}>
                Resume
              </Typography>
            </Button>
          </Link>
            <Grid style={{textAlign:'right'}}>
              <Link href='mailto:mohd.rule123@gmail.com' style={{textDecoration:'none'}}>
                <Button variant="h6" color="inherit" className={styles.logo}>
                  <img src={Gmail} alt="Gmail" className={classes.img} />
                </Button>
              </Link>
              <Link href='https://github.com/atharmohammad' style={{textDecoration:'none'}}>
                <Button variant="h6" color="inherit" className={styles.logo}>
                  <img src={Github} alt="Github" className={classes.img} />
                </Button>
              </Link>
              <Link href='https://www.linkedin.com/in/athar-mohammad-34068a157/' style={{textDecoration:'none'}}>
                <Button variant="h6" color="inherit" className={styles.logo}>
                  <img src={LinkedIn} alt="LinkedIn" className={classes.img}  />
                </Button>
              </Link>

            </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}
