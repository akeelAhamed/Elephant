import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Paper
} from '@material-ui/core';

import { data, options } from './chart';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  chartContainer: {
    [theme.breakpoints.up('lg')] : {
      width: '80%',
    },
    height: 200,
    background: theme.palette.background3,
    paddingTop: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  tabContainer:{
    display: 'block',
    marginTop: theme.spacing(2)
  },
  tab: {
    fontSize: theme.spacing(1.5),
    border: '1px solid ' + theme.palette.color,
    borderRadius: theme.spacing(0.5),
    padding:  theme.spacing(0.5, 2),
    color: theme.palette.background,
    background: theme.palette.color,
    fontWeight: 500,
    margin: theme.spacing(1),
  }
}));

const ProfitLoss = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
    >
        <div className={classes.chartContainer}>
          <Line
            data={data}
            options={options}
          />
        </div>
    </Paper>
  );
};

ProfitLoss.propTypes = {
  className: PropTypes.string
};

export default ProfitLoss;
