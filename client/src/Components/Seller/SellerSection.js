import React from "react";
import Card from "../UI/Card/Card";

import classes from "./Seller.module.css";

const SellerSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.heading}>Become a seller</h2>
        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <button className={classes.btn}>Download Seller app</button>
      </div>
      <div className={classes.card}>
        <Card
          name="Get your own store"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
        />
        <Card
          name="Pricing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
        />
        <Card
          name="Required Documents"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero."
        />
      </div>
    </div>
  );
};

export default SellerSection;
