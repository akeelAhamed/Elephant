import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MarketUpdate from "../Common/MarketUpdate";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  table: {
    marginBottom: theme.spacing(1)
  }
}));

const rows = [
  {
    company: 'Relaince',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'Torrent pharma',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'Zydus pharma',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'Cipla pharma',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'HDFC Bank',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'ICICI Bank',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'Infosys',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
  {
    company: 'Wipro',
    market: 1998.25,
    avg: 1700.13,
    myavg: 1666.02,
    fsom: 17000,
    secsof: 1590.30,
    high: 2200.02,
    low: 1200.21
  },
];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      ><Grid
          item
          sm={8}
          xs={12}
        >
          <Paper style={{overflow: 'auto'}}>
            <Table className={classes.table} aria-label="dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Company</TableCell>
                  <TableCell>Market Price</TableCell>
                  <TableCell>Avg.Price</TableCell>
                  <TableCell>My Avg</TableCell>
                  <TableCell>FSOM</TableCell>
                  <TableCell>SECSOF</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  rows.map((row, i) =>(
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {row.company}
                      </TableCell>
                      <TableCell scope="row">
                        {row.market}
                      </TableCell>
                      <TableCell scope="row">
                        {row.avg}
                      </TableCell>
                      <TableCell scope="row">
                        {row.myavg}
                      </TableCell>
                      <TableCell scope="row">
                        {row.fsom}
                      </TableCell>
                      <TableCell scope="row">
                        {row.secsof}
                      </TableCell>
                      <TableCell scope="row">
                        {row.high}
                      </TableCell>
                      <TableCell scope="row">
                        {row.low}
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>

            <Table className={classes.table} aria-label="dashboard">
            <TableHead>
              <TableRow>
                <TableCell colSpan={5}>Relaince ind</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={'th'} component="th">Industric value</TableCell>
                <TableCell className={'th'}>Purchase Price</TableCell>
                <TableCell className={'th'}>Present value</TableCell>
                <TableCell className={'th'}>Not Present value</TableCell>
                <TableCell className={'th'}>Internal rate of value</TableCell>
              </TableRow>

              {
                rows.map((row, i) => {
                  if(i > 2){
                    return(<TableRow key={i}></TableRow>)
                  }
                  return(
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {row.company}
                    </TableCell>
                    <TableCell scope="row">
                      {row.market}
                    </TableCell>
                    <TableCell scope="row">
                      {row.avg}
                    </TableCell>
                    <TableCell scope="row">
                      {row.myavg}
                    </TableCell>
                    <TableCell scope="row">
                      {row.fsom}
                    </TableCell>
                  </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
          </Paper>
        </Grid>
        
        <MarketUpdate />
      </Grid>
    </div>
  );
};

export default Dashboard;
