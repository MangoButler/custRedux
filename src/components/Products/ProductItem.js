import React from "react";
import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../hooks-store/store";

const ProductItem = React.memo((props) => {
  console.log("rendering");
  const dispatch = useStore(false)[1];
  const isLogin = useStore()[0].auth;

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        {isLogin && (
          <button
            className={!props.isFav ? "button-outline" : ""}
            onClick={toggleFavHandler}
          >
            {props.isFav ? "Un-Favorite" : "Favorite"}
          </button>
        )}
      </div>
    </Card>
  );
});

export default ProductItem;
