import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import tabs from "../../../tabs";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.background2,
    borderRadius: theme.palette.borderRadius,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 260px)',
      marginRight: '10px'
    }
  },
  flexGrow: {
    flexGrow: 4,
    display: 'flex',
    justifyContent: 'space-around'
  },
  flexGrow2: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-around'
  },
  tab: {
    fontSize: theme.spacing(1.5),
    border: '1px solid ' + theme.palette.color,
    borderRadius: theme.spacing(0.5),
    padding:  theme.spacing(1, 2),
    color: theme.palette.color2,

    '&.active': {
      color: theme.palette.background,
      background: theme.palette.color,
      fontWeight: 500
    }
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);
  const location = useLocation();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <div className={classes.flexGrow}>
          {
            tabs.map((tab, i) => {
              let active = tab.to === location.pathname?' active':'';
              return(
                <Link key={i} className={classes.tab + active} to={tab.to}>
                  <span>{tab.name}</span>
                </Link>
              )
            })
          }
        </div>

        <div className={classes.flexGrow2}>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Link to="/search">
                <SearchIcon />
              </Link>
            </IconButton>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>

      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
