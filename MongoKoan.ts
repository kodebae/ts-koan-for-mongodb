import { productsData } from "./products";
import { Product, ProductWithId } from "./Product";
import { MongoClient, Db, Collection, UpdateFilter, InsertManyResult, IntegerType } from "mongodb";

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

  public async connect(): Promise<void> {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      this.collection = this.db.collection(this.collectionName);
      console.log("Connected to MongoDB");
      // throw("To Be Implemented")
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }

  public async loadAll(): Promise<InsertManyResult<Product> | { error: any }> {
    try {
      const result = await this.collection.insertMany(productsData);
      return result;
      // throw("To Be Implemented")
    } catch (error) {
      return { error };
    }
  }

  public async getAll(): Promise< Array<ProductWithId> | {error: any}> {
    try {
      // return await this.collection.find({}).toArray() as Array<ProductWithId>;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async countAll(): Promise< number | {error: any}> {
    var result: number | { error: any };
    try {
      result = await this.collection.countDocuments({});
      // throw("To Be Implemented")
    } catch (error) {
      result = {"error":error};
    }
    return result;
  }

  public async addOne(product: Product): Promise<ProductWithId | { error: any }> {
    try {
      // return await this.collection.addOne(product);
      throw("To Be Implemented")      
    } catch (error) {
      return { error };
    }
  }

  public async getOne(): Promise<ProductWithId | {error: any}> {
    try {
      // return await this.collection.find({}).toArray() as Array<Product>;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async setInStock(id: string, quantity: IntegerType): Promise<Product | {error: any}> {
    try {
      // return await this.collection.findOneAndUpdate({ "id": id },{}) as ProductWithId;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    } 
  }

  public async decrementInventoryQuantity(id: string, quantity: IntegerType): Promise<ProductWithId | {error: any}> {
    try {
      // return await this.collection.findOneAndUpdate({ "id": id },{}) as ProductWithId;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async addTags(id: string, tags: Array<string>): Promise<ProductWithId | {error: any}> {
    try {
      // return await this.collection.findOneAndUpdate({ "id": id },{}) as ProductWithId;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async pushTag(id: string, tag: string): Promise<ProductWithId | {error: any}> {
    try {
      // return await this.collection.findOneAndUpdate({ "id": id }, {}) as ProductWithId;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async pushTags(id: string, tags: Array<string>): Promise<ProductWithId | {error: any}> {
    try {
      // return await this.collection.findOneAndUpdate({ "id": id }, {}) as ProductWithId;
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async deleteOne() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async getWithProjection() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async elemMatch() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async inMatch() {
    try {
      // return await this.collection.deleteMany({});
      throw("To Be Implemented")
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
      // throw("To Be Implemented")
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
