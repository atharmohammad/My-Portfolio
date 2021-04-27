import {Button,Typography,Box,AppBar,Toolbar,IconButton,Grid,Container,Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Codechef from '../../Assets/codechef.png'
import Codeforces from '../../Assets/codeforces.png'

const useStyles = makeStyles((theme) => ({
  img:{
    height:'10vh',
    [theme.breakpoints.down('sm')]: {
      height:'6vh',
   },
  },
  root: {
     color: "#302c2c",
     marginLeft:'5rem',
   },
   toolbar:{
     textAlign:'center',
     backgroundColor:'black',
     minHeight:'30vh'
   },
  box:{
    marginLeft:'10vh',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'0'
   },
  },
  typ:{
    color:"#fff",
    fontFamily: ['Akaya Telivigala','cursive',].join(','),
    [theme.breakpoints.down('sm')]: {
      fontSize:'2vh',
   },
  }

}));
export default function Start() {
  const classes = useStyles();

  return (
         <Grid container item direction='row' justify="center" alignItems="center" className={classes.toolbar}>
               <Grid  item  xs={12} sm={12} md={2}>
                  <Link href='https://www.codechef.com/users/athar_12' style={{textDecoration:'none'}}>
                    <Button >
                        <img src={Codechef} alt="codechef" className={classes.img}/>
                    </Button>
                  </Link>
               </Grid>
               <Grid  item className={classes.box} xs={12} sm={12} md={2}>
                 <Link href='https://codeforces.com/profile/KickAss' style={{textDecoration:'none'}}>
                    <Button >
                        <img src={Codeforces} alt="codeforces" className={classes.img}/>
                    </Button>
                  </Link>
               </Grid>

               <Grid  item className={classes.box} xs={12} sm={12} md={2}>
                  <Typography className={classes.typ}>
                      This Website is designed by : <br/>
                                                Mohd Athar
                  </Typography>
               </Grid>
         </Grid>
  );
}
