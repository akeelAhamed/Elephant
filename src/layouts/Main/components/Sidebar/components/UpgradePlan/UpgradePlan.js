import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Auth from '../../../../../../_services/Auth';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    
    '& > button':{
      padding: theme.spacing(1, 2),
      color: theme.palette.color2
    }
  },
}));

const UpgradePlan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
          <Button
            color="primary"
            variant="text"
            startIcon={<HelpOutlineIcon />}
          >
            Help
          </Button>
          <Button
            color="primary"
            variant="text"
            startIcon={<ExitToAppIcon />}
            onClick={() => Auth.logout()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string
};

export default UpgradePlan;
