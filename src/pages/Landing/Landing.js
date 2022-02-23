import React from "react";
import "./Landing.css";
import { makeStyles } from "@material-ui/core/styles";
import flash from "./hero.png";

const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   backgroundColor: "#fff"
  // },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1489183988443-b37b7e119ba6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvcml6b250YWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
}));

function Landing() {
  const classes = useStyles(); // this is navbar part,remove this, if asked (BLOG | MOMAN.AI)
  return (
    <div className="landing-container">
      <div className="first-component">
        <div data-aos="fade-down-right" className="first-left">
          <p className="first-header">
            The mango was first grown in 1931 by Junagadh Wazir Sale Bhai in
            Vanthali. About 75 grafts were then planted in the foothills of
            Girnar at the Junagadh Laal Dhori Farm. The mango is said to have
            been known as "KESAR" since 1934 when the Nawab of Junagadh Muhammad
            Mahabat Khan III said "This is KEASAR" after looking at the orange
            pulp of the KESAR Mango fruit. The Kesar being hindi for Saffron.
          </p>
        </div>

        <div className="first-right">
          <img src={flash} className="flash-image" alt="hero"/>
        </div>
      </div>
      {/* Second component */}
      <div className="second-component">
        <div className="second-left">
          <img src={flash} className="flash-image1" alt="hero"/>
        </div>

        {/* <div data-aos="fade-down-left" className="second-right"> */}
        <div className="second-right">
          <p className="second-header">
            The mango was first grown in 1931 by amdavad Wazir Sale Bhai in
            Vanthali. About 75 grafts were then planted in the foothills of
            Girnar at the Junagadh Laal Dhori Farm. The mango is said to have
            been known as "KESAR" since 1934 when the Nawab of Junagadh Muhammad
            Mahabat Khan III said "This is KEASAR" after looking at the orange
            pulp of the KESAR Mango fruit. The Kesar being hindi for Saffron.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
