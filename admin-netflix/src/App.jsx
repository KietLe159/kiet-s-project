import Home from "./pages/Home"
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import List from "./pages/List"
import New from "./pages/New"
import Single from "./pages/Single"
import {userInput, productInput} from "./inputSource"
import {useContext} from "react"
import {ThemeContext} from "./darkTheme/themeContextProvider"

function App() {
  const context = useContext(ThemeContext);
  
  return (
    <div className={`app ${context.state}`}>
      <Routes>
        <Route path="/"  >
          {/* the nest Router request a Outline component of react-router-dom inside the wrapper component */}
            <Route index element={<Home/>} />
            <Route path= "login" element= {<Login />}/>

            <Route path= "user" >
                <Route index element= {<List path="user" />} />
                <Route path=":userId" element= {<Single/>}/>
                <Route path="new" element= {<New input={userInput} title="Add New User"/>}/>
            </Route>

            <Route path= "product" >
                <Route index element= {<List path="product" />} />
                <Route path=":productId" element= {<Single/>}/>
                <Route path="new" element= {<New input={productInput} title="Add New Product"/>}/>
            </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
