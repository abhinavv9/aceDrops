import classes from "./SellerPage.module.css";

import Header from "../../Assets/Seller_header.png";
import Seller from "../../Assets/Group_31.png";
import ellipse from "../../Assets/Ellipse.png";
import becomeASeller from "../../Assets/become a seller.png";

const SellerPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.heading}>Get Your Own Store</h3>
        <img className={classes.headerImg} src={Header} alt="category" />
        <div className={classes.sellerDiv}>
          <img className={classes.sellerDivImg} src={Seller} alt="Seller" />
          <div className={classes.sellerInfo}>
            <h3>Become a seller</h3>
            <p>
              lorem ipsum dolor sit amet con et justo lorem ipsum dolor sit amet
              con et justo ipsum dolor sit amet con et justo
            </p>
          </div>
        </div>
      </div>
      <div className={classes.pricing}>
        <h3 className={classes.pricingHeading}>Pricing</h3>
        <div className={classes.pricingInfo}>
          <img className={classes.pricingImg} src={ellipse} alt="ellipse" />
          <p className={classes.pricingPara}>
            lorem ipsum dolor sit amet con et justo lorem ipsum dolor sit amet
            con et justo lorem ipsumd
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
