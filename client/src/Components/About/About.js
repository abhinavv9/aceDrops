import classes from "./About.module.css";
import aboutPng from "../../Assets/about.png";

const About = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>About Us</h2>
      <div className={classes.section}>
        <img className={classes.aboutPng} src={aboutPng} alt="about us" />
        <div className={classes.infoDiv}>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <button className={classes.btn}>more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
