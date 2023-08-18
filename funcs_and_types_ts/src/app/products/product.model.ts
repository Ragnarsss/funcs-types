import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string | number;
  image: string;
  description: string;
  price: number;
  stock: number;
  size?: Sizes;
  color: string;
  category: Category;
  isNew: boolean;
  tags: string[];
}
