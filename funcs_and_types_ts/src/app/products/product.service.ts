import { faker } from '@faker-js/faker';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';
import { Product } from './product.model';
const products: Product[] = [];

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

const getProduct = (id: Product['id']): Product | undefined => {
  return products.find((product) => product.id === id);
};
const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

const findProducts = (dto: FindProductDto): Product[] => {
  return products;
};
export { products, addProduct, updateProduct, findProducts };
