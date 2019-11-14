import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function List(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {props.arr.map(value => (
            <>
              <Grid item xs={props.itemSize} key={value}>
                <Paper className={classes.paper}>
                  <Typography align="center" variant="h5" component="h3">{value}</Typography>
                </Paper>
              </Grid>
              <span className="split">{props.split}</span>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}