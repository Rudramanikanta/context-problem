
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom';
import Create from './Create';
import Blogs from './Blogs';
import { TrainerInfo } from './Context';
class App extends Component {

  render() {
    return (
      <TrainerInfo>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">



          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ padding: "20px" }}>
              <li className="nav-item" style={{ left: "10px", marginLeft: "0px" }}>
                <Link to="/">HOMEPAGE</Link>
              </li>
              <li className="nav-item" style={{ left: "400px", marginLeft: "200px" }}>
                <Link to="/create">ABOUTPAGE</Link>
              </li>
              <li className="nav-item" style={{ left: "900px", marginLeft: "400px" }}>
                <Link to="/blogs">NEW BLOGS</Link>
              </li>
            </ul>

          </div>
        </nav>
        <Routes>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        </Routes>
      </TrainerInfo>
    )
  }
}
export default App;