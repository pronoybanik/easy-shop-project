"use client";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartBtn = () => {


  return (
    <button
      //   onClick={() => handleAddToCart(id)}
      className="btn btn-primary mt-4"
    // disabled={isAlready !== -1 || isLoading}
    >
      <MdOutlineAddShoppingCart />
      {/* {isAlready !== -1 ? "Already added" : "Add To Cart"} */} add to card
    </button>
  );
};

export default AddToCartBtn;
