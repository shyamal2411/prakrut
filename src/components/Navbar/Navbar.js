import { Component } from "react";
import ReactDOM from "react-dom";
import { MenuItems } from "./MenuItems";
// import { Button } from "./NavButton/NavButton";
import { BrowseRouter as Router, Link, NavLink } from "react-dom";
// import signUp from "../../pages/signUp/signUp";
// import contactUs from "../../pages/contactUs/contactUs";
// import Products from "../../pages/Products/Products";
// import Services from "../../pages/Services/Services";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  // change between menu items and wrong btn
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Prakrut
          {/* <i className="fa fa-react"></i> */}
        </h1>
        {/* condition for cross and menu navigation */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {/* <Link to=`${item.url}`> {item.title}  </Link>; */}
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}

          {/* <Link>
        <NavLink to='/Products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/Services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contactUs' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/signUp' activeStyle>
            Sign Up
          </NavLink>
        </Link> */}

          {/* old code extracting names and links of nav sections from MenuItems.js  */}
          {/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
              <Link to={`/${item.url}`} component={item.cName}>
                {/* <a className={item.cName} href={item.url}> */}
          {/* {item.title} */}
          {/* </Link> */}
          {/* </a> */}
          {/* </li> */}
          {/* ); */}
          {/* } */}
          {/* )};  */}
        </ul>
        {/* <Button>Sign Up</Button> */}
      </nav>
    );
  }
}

export default Navbar;
