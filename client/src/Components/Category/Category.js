import classes from "./Category.module.css";
import categoryPng from "../../Assets/categories.png";

const Category = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Categories</h2>
      <div className={classes.section}>
        <img className={classes.png} src={categoryPng} alt="categories" />
        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit int vulputate libero et velit int
        </p>
      </div>
    </div>
  );
};

export default Category;
