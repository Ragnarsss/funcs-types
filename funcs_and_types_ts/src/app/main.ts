import { addProduct, findProducts } from '@products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: 'p1',
    color: faker.color.human(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: ['asd'],
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

findProducts({
  stock: 10,
  color: 'red',
});
