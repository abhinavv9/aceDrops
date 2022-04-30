import classes from "./About.module.css";
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

  return (
    <div className={classes.container}>
      <h2>About Us</h2>
      <div className={classes.mainDiv}>
        <img className={classes.logo} src={Logo} alt="logo" />
        <div>
          <span>Founded - </span>
          <span>December'21</span>
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
