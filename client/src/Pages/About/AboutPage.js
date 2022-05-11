import { useEffect } from "react";
import classes from "./AboutPage.module.css";
import Logo from "../../Assets/acedrops-logo-removebg-preview.png";

const About = () => {
  function Card() {
    return (
      <>
        <div className={classes.cardContainer}>
          <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        </div>
      </>
    );
  }

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>About Us</h2>
      <div className={classes.mainDiv}>
        <img className={classes.logo} src={Logo} alt="logo" />
        <div className={classes.infoDiv}>
          <div className={classes.data}>
            <span>Founded - </span>
            <span>December'21</span>
          </div>
          <ul className={classes.founderDiv}>
            <span>Founder - </span>
            <li>Vishal Shukla</li>
            <li>Prateek Srivastava</li>
          </ul>
        </div>
      </div>
      <div className={classes.cardDiv}>
        {Card()}
        {Card()}
        {Card()}
      </div>
    </div>
  );
};

export default About;
