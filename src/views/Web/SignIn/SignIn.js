import { useState } from 'react';
import { useLocation, useHistory, useParams, Link } from 'react-router-dom'
import logo from "../../../img/Logo.png";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    center:{
      justifyContent: 'center'
    },
    card: {
      width: 450,
      minHeight: 400,
      margin: 'auto',
      padding: theme.spacing(2),
      borderRadius: theme.spacing(0.5),
      background: theme.palette.background2T,
    }
}));

function SignIn() {
  const location = useLocation();
  const { result } = useParams();
  const history = useHistory();
  const classes = useStyles();
  let [search, setSearch] = useState(result);

  const onSubmit = (e) => {
    e.preventDefault();

    if(search !== ''){
      history.push('./'+search)
    };
  };

  return (
    <div id="search-wrapper">
      <div className="header">
        <nav className={classes.center + " nav"}>
        <ul>
          <li>
            <img className="logo" src={logo} alt="logo" />
          </li>
        </ul>
        </nav>
      </div>

      <div className="content-wapper">
        <div className="content e">
          <div className={classes.card}>
            <Typography variant="h2" color="inherit" style={{textAlign:'center'}}>Login</Typography>
            <form autoComplete="off">

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;