import {Button,Typography,Box,Link} from '@material-ui/core'
import { makeStyles,Grid,} from '@material-ui/core';
import Burger from '../../Assets/burger.PNG'
import Social from '../../Assets/socialnet.png'
import Chat from '../../Assets/chat.PNG'
import Budget from '../../Assets/budget.PNG'
import entryStyle from '../About/About.module.css'
import bounceStyle from '../Languages/LanguageChart/LanguageChart.module.css'
import Pacman from '../Pacman/Pacman'

const useStyles = makeStyles((theme) => ({

  img:{
    height:'40vh',
    borderRadius:'15px',
    marginTop:'30px'
  },
  root: {
     minHeight:'100vh',
     marginLeft:'20vh' ,
     [theme.breakpoints.down('sm')]: {
        marginLeft:'0',
    },
   },
   box:{
     marginTop:'10vh',
     width:'400vh'
   },
   img:{
     height:'40vh',
     boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
     borderRadius:'10px',
     marginRight:'5vh',
     [theme.breakpoints.down('sm')]: {
      height:'30vh',
      marginLeft:'10vh'
    },
  },
  img2:{
    height:'40vh',
    boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
    borderRadius:'10px',
    marginLeft:'5vh',
    [theme.breakpoints.down('sm')]: {
     height:'20vh',
     margin:'2vh 0 0 10vh'
   },
  },
  typ:{
    margin:'2vh 0 0 20vh',
    textAlign:'left',
    fontSize:'16px',
    width:'100%',
    fontFamily: [
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
    [theme.breakpoints.down('sm')]: {
     fontSize:'15px',
     width:'10%',
     margin:'2vh 0 0 10vh'
   },
 },
 project:{
   textAlign:'left',
   fontFamily: ['Lobster','cursive',].join(','),
   [theme.breakpoints.down('sm')]: {
    fontSize:'30px',
    marginLeft:'10vh'
  },
 }

}));
export default function Project() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} direction="column" spacing="1" className={classes.root}>

    <Typography variant='h2' className={`${entryStyle.textdiv} ${classes.project}`}>
      My Projects
    </Typography>


      <Grid container sm={12} md={6} className={classes.box}>
        <Grid container item sm={12} md={2}>
          <Link href='https://burger-builder-react-92bac.web.app/' style={{textDecoration:'none'}}>
            <Grid item className={entryStyle.textdiv}><img src={Burger} alt="" className={classes.img}/></Grid>
          </Link>
        </Grid>
        <Grid container item sm={12} md={10}>
          <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`} >
            <span style={{fontFamily: [
              'Pacifico',
              'cursive',
            ].join(',')}}>Burger-Builder</span><br/><br/>
             It is built in ReactJs and Google firebase,a person can design his own burger
              can add ingredients of his choice any number of times and dynamically price will be shown
              all burgers orders are placed and stored on firebase and every user needs an authentication{""}
              <br/>
              <br/>
              <Link href='https://burger-builder-react-92bac.web.app/' style={{textDecoration:'none'}}>
                <Button container style={{color:"#3b3737",boxShadow: '0 5px 15px 0px rgba(0,0,0,0.7)',
                  fontFamily: ['Akaya Telivigala','cursive',].join(',')}}>Burger-Builder</Button>{""}
              </Link>
              <Link href='https://github.com/atharmohammad/BurgerBuilder' style={{textDecoration:'none'}}>
                <Button container style={{marginLeft:'5vh',color:"#3b3737",boxShadow: '0 5px 15px 0px rgba(0,0,0,0.7)',fontFamily: ['Akaya Telivigala','cursive',].join(',')}}>Github</Button>{""}
              </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid container sm={12} md={6} className={classes.box}>
          <Grid container item sm={12} md={10}>
            <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`} >
            <span style={{fontFamily: [
              'Pacifico',
              'cursive',
            ].join(',')}}>Social-Network</span><br/><br/>
                It is built using Django and Javascript ,It is a social media platform
                where people can join groups of certain topics and people who are in a group
                can see all post in those groups , a user can create multiple
                groups
                <br/>
                <br/>
                <Link href='https://github.com/atharmohammad/Social-Network' style={{textDecoration:'none'}}>
                  <Button container style={{color:"#3b3737",boxShadow: '0 5px 15px 0px rgba(0,0,0,0.7)',fontFamily: ['Akaya Telivigala','cursive',].join(',')}}>Github</Button>{""}
                </Link>
            </Typography>
          </Grid>
        <Grid container item sm={12} md={2}>
          <Link href='https://github.com/atharmohammad/Social-Network' style={{textDecoration:'none'}}>
            <Box className={entryStyle.Imgdiv}><img src={Social} alt="" className={classes.img2}/></Box>
          </Link>
        </Grid>
      </Grid>

      <Grid container sm={12} md={6} className={classes.box}>
      <Grid container item sm={12} md={2}>
          <Link href='https://github.com/atharmohammad/Django-Websocket-Channel' style={{textDecoration:'none'}}>
            <Box className={entryStyle.textdiv}><img src={Chat} alt=""className={classes.img}/></Box>
          </Link>
        </Grid>
        <Grid container item sm={12} md={10} style={{width:'100%'}}>
          <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`} >
          <span style={{fontFamily: [
            'Pacifico',
            'cursive',
          ].join(',')}}>Chat-E</span><br/><br/>
            A simple Chat app Built using Django Websockets integrated with ReactJs , There can be multiple
            Rooms and every one who are in same room can chat with one another , A person can join by any username into
            the room he type, if such room does'nt exist then it will be created or he will join the already existing room.
            <br/>
            <br/>
            <Link href='https://github.com/atharmohammad/Django-Websocket-Channel' style={{textDecoration:'none'}}>
              <Button container style={{color:"#3b3737",boxShadow: '0 5px 15px 0px rgba(0,0,0,0.7)',fontFamily: ['Akaya Telivigala','cursive',].join(',')}}>Github</Button>{""}
            </Link>
        </Typography>
        </Grid>
      </Grid>
      <Grid container sm={12} md={6} className={classes.box}>
      <Grid container item sm={12} md={10}>
        <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`} >
        <span style={{fontFamily: [
          'Pacifico',
          'cursive',
        ].join(',')}}>Budget-Calculator</span><br/><br/>
             Javascript based application , used to calculate your monthly budget, user can put
              their daily expense or income , and on that basis it tells how much they have left, and
              also tell how much percent of your total income spent on a item.
            <br/>
            <br/>
            <Link href='https://github.com/atharmohammad/Budget-App' style={{textDecoration:'none'}}>
              <Button container style={{color:"#3b3737",boxShadow: '0 5px 15px 0px rgba(0,0,0,0.7)',fontFamily: ['Akaya Telivigala','cursive',].join(',')}}>Github</Button>{""}
            </Link>
        </Typography>
        </Grid>
        <Grid container item sm={12} md={2}>
          <Link href='https://github.com/atharmohammad/Budget-App' style={{textDecoration:'none'}}>
            <Box className={entryStyle.Imgdiv}><img src={Budget} alt="" className={classes.img2}/></Box>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
