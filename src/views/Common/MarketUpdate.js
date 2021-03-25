import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const MarketUpdate = () => {
  const classes = useStyles();

  return (
    <Grid
        item
        sm={4}
        xs={12}
    >
        <Table className={classes.table} aria-label="Market update">
        <TableHead>
            <TableRow>
            <TableCell align="center" colSpan={2}>Market update</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell scope="row">
                Img
            </TableCell>
            <TableCell scope="row">
                Burger king shares take first fall
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell scope="row">
                Img2
            </TableCell>
            <TableCell scope="row">
                Sensex nearing 42,000
            </TableCell>
            </TableRow>
        </TableBody>
        </Table>
    </Grid>
  );
};

export default MarketUpdate;
