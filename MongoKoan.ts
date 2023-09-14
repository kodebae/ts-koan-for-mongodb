import { productsData } from "./products";
import { Product, ProductWithId } from "./Product";
import { MongoClient, Db, Collection, FindOneAndUpdateOptions, UpdateFilter, InsertManyResult, IntegerType, IndexInformationOptions, DeleteResult, InsertOneResult, UpdateResult, ModifyResult, ReturnDocument } from "mongodb";

export class MongoKoan {
  private dbName: string = "StageZero";
  private collectionName: string = "Koan_products";
  private uri: string = "mongodb://root:example@localhost:27017/?tls=false&directConnection=true";
  private client: MongoClient;
  private db!: Db; 
  private collection!: Collection;

  constructor() {
    this.client = new MongoClient(this.uri);
    }

  public async connect(): Promise<Array<IndexInformationOptions> | {error: any}> {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      this.collection = this.db.collection(this.collectionName);

      return this.collection.listIndexes().toArray();
      // throw("To Be Implemented")
    } catch (error) {
      return {"error": error};
    }
  }

  public async loadAll(): Promise<InsertManyResult<ProductWithId> | { error: any }> {
    try {
      return await this.collection.insertMany(productsData);
      // throw("To Be Implemented")
    } catch (error) {
      return { error };
    }
  }

  public async getAll(): Promise< Array<ProductWithId> | {error: any}> {
    try {
      return await this.collection.find({}).toArray() as Array<ProductWithId>;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async countAll(): Promise< number | {error: any}> {
    var result: number | { error: any };
    try {
      return await this.collection.countDocuments({});
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async addOne(product: Product): Promise<InsertOneResult<Product> | { error: any }> {
    try {
      return await this.collection.insertOne(product);
      // throw("To Be Implemented")      
    } catch (error) {
      return {"error": error };
    }
  }

  public async getOne(id: string): Promise<ProductWithId | {error: any}> {
    try {
      return await this.collection.findOne({"id": id}) as ProductWithId;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async setInStock(id: string, quantity: IntegerType): Promise<ProductWithId | {error: any}> {
    try {
      const filter = { "id": id };
      const update = { $set: {"instock":quantity} };
      const option = { returnDocument: ReturnDocument.AFTER };

      return await this.collection.findOneAndUpdate(filter, update, option) as ProductWithId;
    } catch (error) {
      return {"error":error};
    } 
  }

  public async decrementInventoryQuantity(id: string, quantity: IntegerType): Promise<ProductWithId | {error: any}> {
    try {
      const selector = { "id": id };
      const updater = {$inc:{inventoryQuantity:-quantity}};
      const option = { returnDocument: ReturnDocument.AFTER };

      return await this.collection.findOneAndUpdate(selector,updater, option) as ProductWithId;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async addTags(id: string, tags: Array<string>): Promise<ProductWithId | {error: any}> {
    try {
      const filter = {"id":id};
      const update = {$set:{"tags":tags}};
      const option = { returnDocument: ReturnDocument.AFTER };

      return await this.collection.findOneAndUpdate(filter, update, option) as ProductWithId;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async pushTag(id: string, tag: string): Promise<ProductWithId | {error: any}> {
    try {
      const filter = {"id":id};
      // const update: UpdateFilter<ProductWithId> = { $push: { tags: tag } };
      const update = {$push:{"tags":tag}} as any;
      const option = { returnDocument: ReturnDocument.AFTER };

      return await this.collection.findOneAndUpdate(filter, update, option) as ProductWithId;
    } catch (error) {
      return {"error":error};
    }
  }

  public async pushTags(id: string, tags: Array<string>): Promise<ProductWithId | {error: any}> {
    try {
      const filter = {"id":id};
      const update = {$push:{tags: {$each:tags}}} as any;
      const option = { returnDocument: ReturnDocument.AFTER };
      return await this.collection.findOneAndUpdate(filter, update, option) as ProductWithId;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async deleteOne(id: string): Promise<DeleteResult | {error: any}>{
    try {
      const filter = {"id":id};
      return await this.collection.deleteOne(filter);
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async getWithProjection(minimumName: string, fields: Array<string>): Promise<Array<ProductWithId> | {error: any}> {
    try {
      const selector: { [key: string]: any } = {name: {$gte:minimumName}};
      const projection: { [key: string]: any } = {_id:0};
      fields.forEach((field) => {projection[field] = 1;});

      return await this.collection.find(selector).project(projection).toArray() as Array<ProductWithId>;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async elemMatch(description: string, minimumCredit: IntegerType): Promise<Array<ProductWithId> | {error: any}> {
    try {
      const filter = {
        transactions: {
          $elemMatch: {
            "description": description,
            "credit": {$gt: minimumCredit}
          }
        }
      };
      return await this.collection.find(filter).toArray() as Array<ProductWithId>;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async inMatch(statsOptions: Array<string>): Promise<Array<ProductWithId> | {error: any}> {
    try {
      const filter = {status: {$in: statsOptions}};
      return await this.collection.find(filter).sort({"name":1}).toArray() as Array<ProductWithId>;
      // const cursor = this.collection.find(filter);
      // throw(cursor);
      // return cursor.toArray() as Array<ProductWithId>;
      // throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async aggregateSortAdd() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async aggregateGroupCount() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async createIndex() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async listIndexs() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async dropIndex() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async cursorIterate() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }
  
  public async nonUniqueAddOne() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }
  
  public async deleteAll() {
    try {
      return await this.collection.deleteMany({});
      // throw("To Be Implemented"); 
    } catch (error) {
      return {"error":error};
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await this.client.close();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Failed to disconnect from MongoDB:", error);
    }
  }

  public async update(filter: object, update: object): Promise<void> {
    try {
      const result = await this.collection.updateOne(filter, { $set: update });
      console.log(`Matched ${result.matchedCount} and modified ${result.modifiedCount} documents`);
    } catch (error) {
      console.error("Failed to update document:", error);
    }
  }
}
