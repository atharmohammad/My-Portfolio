import Me from '../../Assets/ME.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button,Typography,Link} from '@material-ui/core'
import { palette } from '@material-ui/system';
import styles from './Start.module.css';
import Typical from '../../Typical/index';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  img:{
    height:'30vh',
    border:"5px solid black",
    borderRadius:'50%',
    margin:'20px',
  },
  root: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(1),
     color: "secondary",
     fontFamily: ['Lobster','cursive',].join(','),
     [theme.breakpoints.down('sm')]: {
       fontSize:'5vh'
    },
   },

}));

export default function Start() {
  const classes = useStyles();
  const history = useHistory();
  const arr = [];

  const resumeHandler = ()=>{
        history.push('/portfolio')
  }
  return (
    <Grid className={styles.bg} container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
        <div className={styles.floating} onClick={resumeHandler}>
          <img src={Me} className={classes.img} />
        </div>
        <Button variant="contained" onClick={resumeHandler} style={{backgroundColor:"#fff",color:"#242323",boxShadow: '0 5px 15px 0px rgba(0,0,0,0.5)',
        fontFamily: ['Akaya Telivigala','cursive',].join(',')}}>Click Me</Button>
      <Typography className={`${classes.root} ${styles.bg} ${styles.heading}`} variant="h3" component="body1" >
        Hi , I am Mohd Athar
      </Typography>
      <Typography className={styles.heading} variant="body1" component="p" style={{  fontFamily: ['Pacifico','cursive',].join(',')}}>
        I am a {" "}
        <Typical loop={Infinity} wrapper='b'
                 steps={[
                    'Developer',1000,
                    'Designer',1000,
                    'Open Sourcer',1000,
                    'Competitive Programmer',1000
                 ]}
          />
        </Typography>
    </Grid>
  );
}
