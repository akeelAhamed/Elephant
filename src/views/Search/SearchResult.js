import { useState } from 'react';
import { useLocation, useHistory, useParams, Link } from 'react-router-dom'
import logo from "../../img/Logo.png";
import searchIcon from "../../search.svg";
import tabs from "../../layouts/tabs";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    buttons: {
      padding: theme.spacing(2),
      display: 'flex',

      '& a': {
        color: '#000',
        fontSize: theme.spacing(2.5), 
        margin: theme.spacing(1),
        padding: theme.spacing(1, 4),
        border: 'none',
        borderRadius: theme.palette.borderRadius
      }
    },
    buttonY:{
        background: '#08ea1e',
    },
    buttonN:{
        background: '#ff3e3e',
    }
}));

function SearchResult() {
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
        <div className="search-container">
          <form autoComplete="off" onSubmit={onSubmit}>
              <label htmlFor="search">Search for stock</label>
              <input id="search" placeholder="Reliance Industries Ltd" value={search} onChange={e => setSearch(e.target.value)} required/>
              <button type="submit"><img src={searchIcon} alt="Logo" /></button>
          </form>
        </div>

        <div className="content">
          <Typography variant="h2">Have you bought shares ?</Typography>
          <div className={classes.buttons}>
            <Link className={classes.buttonY} to={search+"/yes"}>Yes</Link>
            <Link className={classes.buttonN} to={search+"/no"}>No</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
