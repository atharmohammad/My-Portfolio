import Me from '../../Assets/ME.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button,Typography} from '@material-ui/core'
import { palette } from '@material-ui/system';
import styles from './Start.module.css';
import Typical from '../../Typical/index';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  img:{
    height:'30vh',
    border:"5px solid black",
    borderRadius:'15px',
    margin:'20px',
  },
  root: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(1),
     color: "secondary"
   },

}));

export default function Start() {
  const classes = useStyles();
  const history = useHistory();
  const resumeHandler = ()=>{
      history.push('/portfolio')
  }
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <div className={styles.floating} onClick={resumeHandler}>
        <img src={Me} className={classes.img} />
      </div>
      <Button variant="contained" color="secondary" onClick={resumeHandler}>Click on Image</Button>
      <Typography className={classes.root} variant="h3" component="body1" >
        Hi , I am Mohd Athar
      </Typography>
      <Typography variant="body1" component="p" >
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
