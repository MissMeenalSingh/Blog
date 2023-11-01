import HomePage from "./components/pages/homePage/homePage.jsx";
import Login from "./components/pages/login/login.jsx";
import Register from "./components/pages/register/register.jsx";
import Settings from "./components/pages/settings/settings.jsx";
import SinglePage from "./components/pages/singlePage/singlePage.jsx";
import WritePage from "./components/pages/writePage/writePage.jsx";
import Topbar from "./components/topbar/topbar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Context } from './context/Context.js'
import { useContext } from 'react'

function App() {

  const { user } = useContext(Context)

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/login" element={user ? <HomePage/> : <Login/>} />
        <Route exact path="/register"element={user ? <HomePage/> : <Register/>} />
        <Route exact path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route exact path="/write" element={user ? <WritePage/> : <Register/>} />
        <Route exact path="/post/:postId" element={<SinglePage/>} />
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </Router>
      
    // <HomePage/> */ }
  // <WritePage/> */ }
  // <Settings/> */ }
  // <Login/> */ }
  // <Register />
  );
}

export default App;
