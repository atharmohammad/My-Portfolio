import {Button,Typography,Box,AppBar,Toolbar,IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chart from './LanguageChart/LanguageChart'
import Webtexh from './WebTech/Webtech';
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
export default function Start() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} direction="column" spacing="1" style={{ minHeight: '100vh' }}>
    <Grid Item style={{marginLeft:'70px'}}>
        <Chart/>
        <Webtexh/>
      </Grid>
    </Grid>
  );
}
