import { MongoKoan } from './MongoKoan';
import { Product, ProductWithId } from './Product';
import { EventTrace } from './EventTrace';
import { IndexInformationOptions, InsertManyResult, InsertOneResult, UpdateResult } from 'mongodb';

describe('MongoKoan', () => {
  let mongoKoan: MongoKoan; 

  beforeAll(async () => {
    mongoKoan = new MongoKoan();
    const connectResult = await mongoKoan.connect() as Array<IndexInformationOptions>;
    expect(connectResult).toMatchObject([{"key": {"_id": 1}, "name": "_id_", "v": 2}]);

    const loadAllResult = await mongoKoan.loadAll() as InsertManyResult<ProductWithId>;
    expect(loadAllResult).toMatchObject({"insertedCount": 36});
  });

  test('test countAll', async () => {
    const response = await mongoKoan.countAll(); 
    expect(response).toEqual(36);
  });

  test('get all documents', async () => {
    const response = await mongoKoan.getAll() as Array<ProductWithId>;
    expect(response.length).toBe(36);
  });

  test('test addOne', async () => {
    const product: Product = {
      "id": "myNewProduct",
      "name": "This is a test product",
      "status": "draft",
    }; 

    const insertResult = await mongoKoan.addOne(product) as InsertOneResult<ProductWithId>;
    expect(insertResult).toHaveProperty("insertedId");

    const newProduct = await mongoKoan.getOne(product.id) as ProductWithId;
    expect(newProduct).toMatchObject(product);
    expect(newProduct._id).toEqual(insertResult.insertedId);

  });

  test('test setInStock', async () => {
    const id: string = "";
    const response = await mongoKoan.setInStock(id,20);
    expect(response).toMatchObject({"instock":20});
  });

  test('test add tags attribute', async () => {
    const id = "329149de-50fb-11ee-be56-0242ac120002";
    const response = await mongoKoan.addTags(id, ["one","two"]) as UpdateResult<ProductWithId>;
    expect(response).toMatchObject({tags:["one","two"]});
  });

  test('test push one tag', async () => {
    const id = "329150d2-50fb-11ee-be56-0242ac120002";
    const response = await mongoKoan.pushTag(id, "three") as UpdateResult<ProductWithId>;
    expect(response).toMatchObject({tags:["one", "two", "three"]});
  });

  test('test push tags', async () => {
    const id = "329150d2-50fb-11ee-be56-0242ac120002";
    const response = await mongoKoan.pushTags(id, ["Yellow","Green"]) as UpdateResult<ProductWithId>;
    expect(response).toMatchObject({tags:["Red", "Blue", "Yellow", "Green"]});
  });

  test('test deleteOne', async () => {
    const id: string = "";
    const response = await mongoKoan.deleteOne(id);
    expect(response).toMatchObject({});
  });

  test('test getWithProjection', async () => {
    const response = await mongoKoan.getWithProjection("W",["id","name"]) as Array<ProductWithId>;
    expect(response).toMatchObject({});
  });

  test('test elemMatch', async () => {
    const id: string = "";
    const response = await mongoKoan.elemMatch(id);
    expect(response).toMatchObject({});
  });

  test('test inMatch', async () => {
    const id: string = "";
    const response = await mongoKoan.inMatch(id);
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

