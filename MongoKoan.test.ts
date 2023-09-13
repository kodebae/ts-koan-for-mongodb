import { MongoKoan } from './MongoKoan';
import { Product } from './Product';
import { EventTrace } from './EventTrace';

describe('MongoKoan', () => {
  let mongoKoan: MongoKoan; 

  beforeAll(async () => {
    mongoKoan = new MongoKoan();
    await mongoKoan.connect();
    await mongoKoan.loadAll();
  });

  test('test countAll', async () => {
    const response = await mongoKoan.countAll();
    expect(response).toEqual(36);
  });

  test('get all documents', async () => {
    const response = await mongoKoan.getAll() as Array<Product>;
    expect(response.length).toBe(36);
  });

  test('test addOne', async () => {
    const product: Product = {
      "id": "",
      "name": "",
      "description": "",
      "inventoryQuantity": 1,
      "status": "",
    };

    const status = await mongoKoan.addOne(product);
    expect(status).toMatchObject({});
    const newProduct = await mongoKoan.getOne();
    expect(newProduct).toMatchObject(product);
  });

  test('test setInStock', async () => {
    const id: string = "";
    const response = await mongoKoan.setInStock(id,20);
    expect(response).toMatchObject({});
  });

  test('test add tags attribute', async () => {
    const id = "329149de-50fb-11ee-be56-0242ac120002";
    const response = await mongoKoan.addTags(id, ["one","two"]) as Product;
    expect(response).toMatchObject({tags:["one","two"]});
  });

  test('test push one tag', async () => {
    const id = "329150d2-50fb-11ee-be56-0242ac120002";
    const response = await mongoKoan.pushTag(id, "three") as Product;
    expect(response).toMatchObject({tags:["one", "two", "three"]});
  });

  test('test push tags', async () => {
    const id = "329150d2-50fb-11ee-be56-0242ac120002";
    const response = await mongoKoan.pushTags(id, ["Yellow","Green"]) as Product;
    expect(response).toMatchObject({tags:["Red", "Blue", "Yellow", "Green"]});
  });

  test('test deleteOne', async () => {
    const id: string = "";
    const response = await mongoKoan.deleteOne();
    expect(response).toMatchObject({});
  });

  test('test getWithProjection', async () => {
    const id: string = "";
    const response = await mongoKoan.getWithProjection();
    expect(response).toMatchObject({});
  });

  test('test elemMatch', async () => {
    const id: string = "";
    const response = await mongoKoan.elemMatch();
    expect(response).toMatchObject({});
  });

  test('test inMatch', async () => {
    const id: string = "";
    const response = await mongoKoan.inMatch();
    expect(response).toMatchObject({});
  });

  test('test aggregateSortAdd', async () => {
    const id: string = "";
    const response = await mongoKoan.aggregateSortAdd();
    expect(response).toMatchObject({});
  });

  test('test aggregateGroupCount', async () => {
    const id: string = "";
    const response = await mongoKoan.aggregateGroupCount();
    expect(response).toMatchObject({});
  });

  test('test createIndex', async () => {
    const id: string = "";
    const response = await mongoKoan.createIndex();
    expect(response).toMatchObject({});
  });

  test('test listIndexs', async () => {
    const id: string = "";
    const response = await mongoKoan.listIndexs();
    expect(response).toMatchObject({});
  });

  test('test dropIndex', async () => {
    const id: string = "";
    const response = await mongoKoan.dropIndex();
    expect(response).toMatchObject({});
  });

  test('test nonUniqueAddOne', async () => {
    const id: string = "";
    const response = await mongoKoan.nonUniqueAddOne();
    expect(response).toMatchObject({});
  });

  test('test cursorIterate', async () => {
    const id: string = "";
    const response = await mongoKoan.cursorIterate();
    expect(response).toMatchObject({});
  });

  afterAll(async () => {
    await mongoKoan.deleteAll();
    await mongoKoan.disconnect();
  });
});

