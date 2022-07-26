import Home from "./pages/Home"
import './App.scss';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login"
import List from "./pages/List"
import New from "./pages/New"
import Single from "./pages/Single"
import {userInput, productInput} from "./inputSource"
import {useContext, useMemo} from "react"
import {ThemeContext} from "./darkTheme/themeContextProvider"
import { useSelector } from "react-redux";

function App() {
  const context = useContext(ThemeContext);
  const user= useSelector(state=> state.user)
    
  return (
    <div className={`app ${context.state}`}>
      <Routes>
        <Route path="/"  >
          {/* the nest Router request a Outline component of react-router-dom inside the wrapper component */}
            <Route index element={user?<Home/>:<Navigate to="login"/>} />
            <Route path= "login" element= {<Login />} />

            {user&&<>
              
            <Route path= "user" >
                <Route index element= {<List path="user" />} />
                <Route path=":userId" element= {<Single/>}/>
                <Route path="new" element= {<New input={userInput} title="Add New User"/>}/>
            </Route>

            <Route path= "movie" >
                <Route index element= {<List path="movie" />} />
                <Route path=":movieId" element= {<Single/>}/>
                <Route path="new" element= {<New input={productInput} title="Add New Product"/>}/>
            </Route>
            </>
            } 
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
