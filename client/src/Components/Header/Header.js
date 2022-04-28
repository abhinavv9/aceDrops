import classes from "./Header.module.css";
import headPng from "../../Assets/header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.conatiner}>
      <img className={classes.headerPng} src={headPng} alt="header" />
      <Link to="/download">
        <button className={classes.btn}>Download Our App</button>
      </Link>
    </div>
  );
};

export default Header;
