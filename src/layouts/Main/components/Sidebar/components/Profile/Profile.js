import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import packageJson from '../../../../../../../package.json';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 80,
    height: 80
  },
  name: {
    marginTop: theme.spacing(1),
    color: theme.palette.color2
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Suvas Barat',
    avatar: packageJson.homepage+'/images/avatars/avatar_11.png',
    bio: 'suvas@theelephant.com',
    idno: 'ELPHT263851'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
      <span>{user.idno}</span>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
