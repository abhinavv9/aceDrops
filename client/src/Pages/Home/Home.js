import classes from "./Home.module.css";

//import components
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Category from "../../Components/Category/Category";
import SellerSection from "../../Components/Seller/SellerSection";

const Home = () => {
  return (
    <div className={classes.container}>
      <Header />
      <About />
      <Category />
      <SellerSection />
    </div>
  );
};

export default Home;
