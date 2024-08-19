import logo from './logo.svg';
import './App.css';
import Game from "./Game";
import FourInLine from "./FourInLine";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";

function App() {

  return (
    <div className={"App"}>
        <BrowserRouter>
            <NavLink to={"/"} style={{marginRight:"10px"}}>X-O Game</NavLink>
            <NavLink to={"/fourInLine"}>Four in line</NavLink>
            <Routes>
                <Route path={"/"} element={<Game/>}></Route>
                <Route path={"/FourInLine"} element={<FourInLine/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
