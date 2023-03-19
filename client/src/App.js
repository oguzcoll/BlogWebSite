import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route
            path="/write"
            element={user ? <Write /> : <Register />}
          ></Route>
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          ></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
