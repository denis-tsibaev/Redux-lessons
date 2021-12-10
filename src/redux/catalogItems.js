import faker from 'faker';

const data = [];

for (let i = 0; i < 48; i += 1) {
    const item = {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
    };

    data.push(item);
}

console.log(data);

export default data;
