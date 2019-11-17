import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 140
  },
  paper: {
    height: 120,
    width: 90,
    backgroundColor: '#536dfe',
    margin: '0 auto'
  },
  control: {
    padding: theme.spacing(2),
  },
  typo: {
    lineHeight: 3.5
  },
  key1: {
    textAlign: 'left',
    backgroundColor: '#ffeb3b',
    fontStyle: 'italic',
    borderBottomRightRadius: 100,    
    maxWidth: 22 
  },
  key2: {
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor: '#ffeb3b',
    maxWidth: 'auto'
  },
  arrow: {
    fontSize: 40,
    marginTop: 40,
  }
}));

export default function List(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {props.arr.map((value, key) => (
            <React.Fragment key={key}>
              <Grid item xs={props.itemSize}>
                <Paper className={classes.paper}>
                  <Typography className={key <100 ? classes.key1 : classes.key2}>{key}</Typography>
                  <Typography className={classes.typo} align="center" variant="h6" component="h3">{value}</Typography>
                </Paper>
              </Grid>
              {props.split? <ArrowRightAltIcon className={classes.arrow} /> : ''}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}