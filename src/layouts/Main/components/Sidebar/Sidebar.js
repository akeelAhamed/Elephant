import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  img: {
    width: 180,
    paddingBottom:10
  },
  drawer: {
    width: 240,
    background: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    }
  },
  root: {
    backgroundColor: theme.palette.background,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '10px 0px'
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.color,
    height: 2
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  sideBar:{
    minHeight: '61vh'
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Post',
      href: '/personal-feed',
      icon: <PostAddIcon />
    },
    {
      title: 'Friends',
      href: '/friends',
      icon: <PermIdentityIcon />
    },
    {
      title: 'Saved post',
      href: '/saved',
      icon: <TurnedInNotIcon />
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        
        <RouterLink to="/">
          <img
            className={classes.img}
            alt="Logo"
            src={"/images/logos/logo.png"}
          />
        </RouterLink>

        <Divider className={classes.divider} />

        <div className={classes.sideBar}>
          <Profile />

          <SidebarNav
            className={classes.nav}
            pages={pages}
          />
        </div>
        
        <Divider className={classes.divider} />

        <UpgradePlan />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
