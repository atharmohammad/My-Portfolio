import {Button,Typography,Box,} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Pacman.module.css'
const useStyles = makeStyles((theme) => ({


}));
export default function Start() {
  const classes = useStyles();

  return (
    <Box container display="flex" flexWrap="nowrap" className={classes.box} xs={12} sm={12} md={6}>
      <div class={styles.laPacman}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
}
