import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

export const getProductsFromDb = async (categoryId) => {
    const db = await DbConnect();
    const productsCollection = db.collection("product");
    const query = {};
    if (categoryId) {
      query.categoryId = categoryId;
    }
    return productsCollection.find(query).toArray();
  };
  
  export const getProductByIdFromDb = async (id) => {
    const db = await DbConnect();
    const productsCollection = db.collection("product");
    const query = {
      _id: new ObjectId(id),
    };
    return productsCollection.findOne(query);
  };
