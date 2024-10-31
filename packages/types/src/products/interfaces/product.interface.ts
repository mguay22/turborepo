import { CreateProductRequest } from "../dto/create-product.request";

export interface Product extends CreateProductRequest {
  id: string;
}
