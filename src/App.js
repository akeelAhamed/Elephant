import "./index.css";
import img from "./img/Logo.png";

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
            <img className="logo" src={img} alt="logo" />
          </li>
        </ul>
        </nav>
      </div>

      <div className="content-wapper">
        <div className="search-container">

        </div>

        <div className="content">

        </div>
      </div>
    </div>
  );
}

export default App;
