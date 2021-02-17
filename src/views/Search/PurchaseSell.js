import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import logo from "../../img/Logo.png";
import tabs from "../../layouts/tabs";
import PurchaseDialog from "./PurchaseDialog";

const useStyles = makeStyles(theme => ({
    buttons: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',

      '& button': {
        color: '#FFFFFF',
        cursor: 'pointer',
        margin: theme.spacing(1),
        padding: theme.spacing(1, 3),
        border: 'none',
        borderRadius: theme.palette.borderRadius
      }
    },
    add:{
        background: 'rgb(48,222,171)',
        backgroundImage: 'linear-gradient(135deg, rgba(48,222,171,1) 10%, rgba(255,89,114,0.5) 50%, rgba(0,0,0,0.8) 100%)'
    },
    sell:{
        background: '#ff5e5e',
        backgroundImage: 'linear-gradient(135deg, #ff5e5e, #2b78bf)',
    },
    table: {
        border: '1px solid '+theme.palette.color,
        borderRadius: theme.palette.borderRadius
    }
}));

function PurchaseSell() {
  const location = useLocation();
  const classes = useStyles();
  const rows = [
    {
      company: '01/12/20',
      market: 2,
      avg: 1700.13,
      myavg: 1666.02,
      fsom: 17000,
      secsof: 1590.30,
      high: 2200.02,
      low: 1200.21
    },
    {
        company: '02/12/20',
        market: 1,
      avg: 1700.13,
      myavg: 1666.02,
      fsom: 17000,
      secsof: 1590.30,
      high: 2200.02,
      low: 1200.21
    },
    {
        company: '03/12/20',
        market: 3,
      avg: 1700.13,
      myavg: 1666.02,
      fsom: 17000,
      secsof: 1590.30,
      high: 2200.02,
      low: 1200.21
    },
    {
        company: '04/12/20',
        market: 2,
      avg: 1700.13,
      myavg: 1666.02,
      fsom: 17000,
      secsof: 1590.30,
      high: 2200.02,
      low: 1200.21
    },
    {
        company: '05/12/20',
        market: 5,
      avg: 1700.13,
      myavg: 1666.02,
      fsom: 17000,
      secsof: 1590.30,
      high: 2200.02,
      low: 1200.21
    }
  ];
  let [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div id="search-wrapper">
      <div className="header">
        <nav className="nav">
        <ul>
        {
            tabs.map((tab, i) => {
              let active = tab.to === location.pathname?' active':'';
              return(
                <li key={i}>
                  <Link className={active} key={i} to={tab.to}>
                    <span>{tab.name}</span>
                  </Link>
                </li>
              )
            })
          }
          <li>
            <img className="logo" src={logo} alt="logo" />
          </li>
        </ul>
        </nav>
      </div>

      <div className="content-wapper">

        <div className="content e">
          <div className={classes.buttons}>
            <button className={classes.add} onClick={toggle}>Add purchase</button>
            <button className={classes.sell} onClick={toggle}>Sell</button>
          </div>
        </div>

        <div className="content">
            <Table className={classes.table} aria-label="dashboard">
                <TableHead>
                    <TableRow className="borderBottom">
                        <TableCell className={'th'} component="th">Date</TableCell>
                        <TableCell className={'th'}>No.of Shares</TableCell>
                        <TableCell className={'th'}>Price per Shares</TableCell>
                        <TableCell className={'th'}>Brokerage</TableCell>
                        <TableCell className={'th'}>Total price</TableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
                {
                    rows.map((row, i) => {
                    return(
                    <TableRow key={i}>
                        <TableCell scope="row">
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
        </div>
        
        <PurchaseDialog open={open} toggle={toggle}/>

      </div>
    </div>
  );
}

export default PurchaseSell;
