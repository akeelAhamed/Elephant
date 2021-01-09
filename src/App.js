import "./index.css";
import logo from "./img/Logo.png";
import search from "./search.svg";

function App() {
  return (
    <div id="wrapper">
      <div className="header">
        <nav className="nav">
        <ul>
          <li><a className="active" href="#h">Dashboard</a></li>
          <li><a href="#n">Company</a></li>
          <li><a href="#c">Personal</a></li>
          <li><a href="#a">Elephant Wall</a></li>
          <li>
            <img className="logo" src={logo} alt="logo" />
          </li>
        </ul>
        </nav>
      </div>

      <div className="content-wapper">
        <div className="search-container">
          <form autoComplete="off">
              <label htmlFor="search">Search for stock</label>
              <input id="search" placeholder="Reliance Industries Ltd" />
              <button type="submit"><img src={search} alt="Logo" /></button>
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

export default App;
