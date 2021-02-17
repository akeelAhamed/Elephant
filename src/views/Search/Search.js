import { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom'
import logo from "../../img/Logo.png";
import searchIcon from "../../search.svg";
import tabs from "../../layouts/tabs";

function Search() {
  const location = useLocation();
  const history = useHistory();
  let [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if(search !== ''){
      history.push('./search/'+search)
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
              <input id="search" value={search} placeholder="Reliance Industries Ltd" onChange={e => setSearch(e.target.value)} required/>
              <button type="submit"><img src={searchIcon} alt="Logo" /></button>
          </form>
        </div>

        <div className="content">
          {
            ['Banking', 'Energy', 'Healthcare', 'FMGC', 'Automobile', 'Tele-communication', 'Media & Entertainment'].map((label, i) => {
              const active = (i === 0);
              return(
                <label key={i} className={active + " label"}>{label}</label>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Search;
