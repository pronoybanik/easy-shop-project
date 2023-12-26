import { getProductByIdFromDb } from "@/services/product.service";
import { cache } from "react";
import "server-only";

const getProductById = cache(getProductByIdFromDb);

export default getProductById;
