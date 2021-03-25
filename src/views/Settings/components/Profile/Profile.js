import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  TextField,
  Button,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background
  },
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Profile = props => {
  const { className, ...rest } = props;
  const user = useSelector(state => state._auth.data._user);

  const classes = useStyles();

  const [values, setValues] = useState({
    isLoaded: false,
    ...user
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Update Profile"
      />
      
      <Divider />

      <form>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                type="text"
                value={values.username}
                disabled
              />
            </Grid>

            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                type="email"
                value={values.email}
              />
            </Grid>

            <Grid item sm={6}>
              <TextField
                fullWidth
                label="First name"
                name="fname"
                onChange={handleChange}
                type="text"
                value={values.fname}
              />
            </Grid>

            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Last name"
                name="lname"
                onChange={handleChange}
                type="text"
                value={values.lname}
              />
            </Grid>

            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Mobile #"
                name="mobile"
                onChange={handleChange}
                type="number"
                inputProps={{min: 1}}
                value={values.mobile}
              />
            </Grid>

            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Pan #"
                name="pan"
                onChange={handleChange}
                type="number"
                inputProps={{min: 1}}
                value={values.pan}
              />
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Update
          </Button>
        </CardActions>
      </form>
      
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
