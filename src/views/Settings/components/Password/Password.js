import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background
  }
}));

const Password = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    old_password: '',
    password: '',
    password_confirmation: ''
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
        title="Update Password"
      />
      <Divider />
      <form>
        <CardContent>
          <TextField
            fullWidth
            label="Old Password"
            name="old_password"
            onChange={handleChange}
            type="password"
            value={values.old_password}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            style={{ marginTop: '1rem' }}
          />
          <TextField
            fullWidth
            label="Confirm password"
            name="password_confirmation"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            style={{ marginTop: '1rem' }}
          />
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

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
