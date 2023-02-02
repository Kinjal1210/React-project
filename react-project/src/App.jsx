import './App.css';
import { BrowserRouter, NavLink, Routes, Route, } from "react-router-dom"; 
import { FilmsPage, HomePage } from './pages';


function App(props) {
  
    return (
      <BrowserRouter>
      <nav>
        <div className="navBar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
           <NavLink to="films">Films</NavLink>
          </li>
        </ul>
        </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="films" element={<FilmsPage />} />
        </Routes>

      </BrowserRouter>
    );
  }



export default App;

