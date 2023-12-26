import "server-only";
import DbConnect from "./DbConnect";

export const getCategoriesFromDb = async () => {
    const db = await DbConnect();
    const categoriesCollection = db.collection("categories");
    const result = categoriesCollection.find({}).toArray();
    return result;
};
