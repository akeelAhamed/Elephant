import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import packageJson from '../../../package.json';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    textAlign: 'center'
  },
  image: {
    marginTop: 30,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  },
  link: {
    color: theme.palette.color,
    border: '1px solid',
    padding: theme.spacing(1, 2)
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h5">
              <Link to="/" className={classes.link}>Go Home</Link>
            </Typography>

            <Typography variant="h1" style={{marginTop: 10}}>
              404: The page you are looking for isn’t here
            </Typography>

            <img
              alt="Not found"
              className={classes.image}
              src={packageJson.homepage+"images/undraw_page_not_found_su7k.svg"}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
