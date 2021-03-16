import {Button,Typography,Box,Link} from '@material-ui/core'
import { makeStyles,Grid,} from '@material-ui/core';
import Burger from '../../Assets/burger.PNG'
import Social from '../../Assets/socialnet.png'

import entryStyle from '../About/About.module.css'
import bounceStyle from '../Languages/LanguageChart/LanguageChart.module.css'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  img:{
    height:'40vh',
    borderRadius:'15px',
    marginTop:'30px'
  },
  root: {
     color: "black",
     marginLeft:'5rem',
   },
   box:{
     marginTop:'10vh'
   }

}));
export default function Project() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} direction="column" spacing="1" style={{ minHeight:'100vh',marginLeft:'20vh'  }}>
    <Typography variant='h2' style={{textAlign:'left',
      fontFamily: [
        'Pacifico',
        'cursive',
      ].join(','),}} className={entryStyle.textdiv}>
      My Projects
    </Typography>
      <Grid Item xs={6} sm={6} md={12} style={{marginTop:'5vh'}}>
        <Box container display="flex" flexWrap="nowrap" className={classes.box} xs={12} sm={12} md={6}>
          <Link href='https://burger-builder-react-92bac.web.app/' style={{textDecoration:'none'}}>
            <Box className={entryStyle.textdiv}><img src={Burger} alt="" style={{height:'40vh',
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            borderRadius:'10px'}}/></Box>
          </Link>
          <Typography className={entryStyle.Imgdiv} style={{margin:'2vh 40vh 0 10vh',textAlign:'left',fontSize:'20px',
          fontFamily: [
            'Syne Mono',
            'monospace',
          ].join(','),}}>
            (). It is built in ReactJs and Google firebase,a person can design his own burger
              can add ingredients of his choice any number of times and dynamically price will be shown
              all burgers orders are placed and stored on firebase and every user needs an authentication{""}
              <br/>
              <br/>
              <Link href='https://burger-builder-react-92bac.web.app/' style={{textDecoration:'none'}}>
                <Button contaner style={{backgroundColor:"#9F6243",color:"#fff"}}>Burger-Builder</Button>{""}
              </Link>
              <Link href='https://github.com/atharmohammad/BurgerBuilder' style={{textDecoration:'none'}}>
                <Button contaner style={{marginLeft:'5vh',backgroundColor:"#9F6243",color:"#fff"}}>Github</Button>{""}
              </Link>
          </Typography>
        </Box>
        <Box container display="flex" flexWrap="nowrap" className={classes.box} xs={12} sm={12} md={6}>
          <Typography className={entryStyle.textdiv} style={{margin:'2vh 5vh 0 0',textAlign:'left',fontSize:'20px',width:'92vh',
          fontFamily: [
            'Syne Mono',
            'monospace',
          ].join(','),}}>
            (). It is built using Django and Javascript ,It is a social media platform
              where people can join groups of certain topics and people who are in a group
              can see all post in those groups , a user can create multiple
              groups
              <br/>
              <br/>
              <Link href='https://github.com/atharmohammad/Social-Network' style={{textDecoration:'none'}}>
                <Button contaner style={{backgroundColor:"#9F6243",color:"#fff"}}>Github</Button>{""}
              </Link>
          </Typography>
          <Link href='https://github.com/atharmohammad/Social-Network' style={{textDecoration:'none'}}>
            <Box className={entryStyle.Imgdiv}><img src={Social} alt="" style={{height:'35vh',
            boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            borderRadius:'10px'}}/></Box>
          </Link>

        </Box>
      </Grid>
    </Grid>
  );
}
