import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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
  const state = useSelector(state => state._auth);

  const user = {...state.data._user};

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={!user.is_verified?"":<VerifiedUserIcon/>}
      >
        <Avatar
          alt={user.fname+' '+user.lname}
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/settings"
        />
      </Badge>

      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.fname+' '+user.lname}
      </Typography>
      <Typography variant="body2">@{user.username}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
