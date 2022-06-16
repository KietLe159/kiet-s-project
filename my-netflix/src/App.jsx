import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Watch from "./pages/Watch"

function App() {
  const user= true;
  
  return (
    <div className="App">
     <Routes>
        <Route path="/" element ={user? <Home />: <Register />} />        
        <Route path="/register" element ={<Register />} />
        <Route path="/login" element ={<Login />} />
      {user&&<>
        <Route path="/watch" element ={<Watch />} />
        <Route path="/series" element ={<Home type="series"/>} />
        <Route path="/movies" element ={<Home type="movies"/>} />
        </>
      }
        </Routes>
      

    </div>
        )
};


export default App;
