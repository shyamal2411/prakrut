import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter,
  useParams
} from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/GalleryMain";
import signUp from "./pages/signUp/signUp";
import Landing from "./pages/Landing/Landing";
import contactUs from "./pages/contactUs/contactUs";
// import Login from "./pages/Login/Login";

const App = () => {
  return (
    // <Router>
    <div>
      <Navbar />
      {/* <Landing/> */}
      <Gallery />
      {/* <BarLoader loading/> */}
      {/* NOTE: ROUTES WORKING AS THEY'RE SHOWING UP ON PAGE BUT NOT SHOWING THE CONTENT SO COMMENTED TEMPORARILY */}
      {/* <Routes>
           <Route path="/" exact component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Landing" component={Landing} />
          <Route path="/contactUs" component={contactUs} />
          <Route path="/signUp" component={signUp} /> 
          </Routes>  */}
    </div>
    // </Router>
  );
};

export default App;
