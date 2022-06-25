import classes from "./Header.module.css";
import headPng from "../../Assets/header2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.conatiner}>
      <img className={classes.headerPng} src={headPng} alt="header" />
      <div className={classes.content}>
        <p className={classes.para}>
          A Marketplace for social media sellers is here
        </p>
        <Link to="/download">
          <button className={classes.btn}>Download Our App</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
