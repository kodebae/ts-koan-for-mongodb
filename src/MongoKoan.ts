import { productsData } from "./products";
import { Product, ProductWithId } from "./models/Product";
import { MongoClient, Db, Collection, InsertManyResult, IndexInformationOptions, DeleteResult, InsertOneResult, ReturnDocument } from "mongodb";

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
      // this method should:
      //  connect this.db
      //  initilize this.client
      //  return a list of indexes
      throw("To Be Implemented")
    } catch (error) {
      return {"error": error};
    }
  }

  public async loadAll(): Promise<InsertManyResult<ProductWithId> | { error: any }> {
    try {
      // this method should 
      //  load the productsData into the Koan_products collection 
      //  return the InsertManyResult array
      throw("To Be Implemented")
    } catch (error) {
      return { error };
    }
  }

  public async getAll(): Promise< Array<ProductWithId> | {error: any}> {
    try {
      // this method should
      //  find all the documents in the Koan_proudcts collection
      //  return them as an Array
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async countAll(): Promise< number | {error: any}> {
    try {
      // this method should
      //  count all the records in the Koan_products collection
      //  return the count
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async addOne(product: Product): Promise<InsertOneResult<Product> | { error: any }> {
    try {
      // this method should
      //  add the prodcut provided to the Koan_products collection
      //  return the result
      throw("To Be Implemented")      
    } catch (error) {
      return {"error": error };
    }
  }

  public async getOne(id: string): Promise<ProductWithId | {error: any}> {
    try {
      // this method should get a Product with the id provided
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async setInStock(id: string, quantity: number): Promise<ProductWithId | {error: any}> {
    try {
      // this method should
      //  find the product with the id provided
      //  add the inStock property
      //  set the inStock value to the quantity provided
      //  return the updated product
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    } 
  }

  public async decrementInventoryQuantity(id: string, quantity: number): Promise<ProductWithId | {error: any}> {
    try {
      // this method should
      //  find the product with the provided id
      //  decrement the inventoryQuantity by the amount provided
      //  return the updated document
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async addTags(id: string, tags: Array<string>): Promise<ProductWithId | {error: any}> {
    try {
      // this method should
      //  add a tags attribute to the product with the id provided
      //  set the value of that tags attribute to the array provided
      //  return the updated product
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async pushTag(id: string, tag: string): Promise<ProductWithId | {error: any}> {
    try {
      // this method should
      //  add a single value to the tags array
      //  return the updated product
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async pushTags(id: string, tags: Array<string>): Promise<ProductWithId | {error: any}> {
    try {
      // this method should
      //  add a list of values to the tags array
      //  return the updated product
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async deleteOne(id: string): Promise<DeleteResult | {error: any}>{
    try {
      // this method should
      //  delete the product with the id provided
      //  return the DeleteResult 
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async getWithProjection(minimumName: string, fields: Array<string>): Promise<Array<ProductWithId> | {error: any}> {
    try {
      // this method should
      //  find all products with a name greater than or equal to the minimumName provided
      //  create a projection that includes only the fields provided 
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async elemMatch(description: string, minimumCredit: number): Promise<Array<ProductWithId> | {error: any}> {
    try {
      // this method should
      //  find all products that have a transaction with
      //    the description matches the value provided
      //    a credit value greater than the minimumCredit value provided
      //  return the product array
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async inMatch(statsOptions: Array<string>): Promise<Array<ProductWithId> | {error: any}> {
    // this method should
    //  find all the products with a Status that is in the list of status provided in statusOptions
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async aggregateSortAdd(addTextValue: string, status: string): Promise<Array<{name: string, status: string, added: string}> | {error: any}> {
    // this method should use an Aggregation to
    //  find all products with a status of ?
    //  add a added attribute to the results, with a value provided in addTextValue
    //  create a projection that includes only the name, status, and added attributes
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async aggregateGroupCount(): Promise<Array<{"_id": string, count: number, inventory: number}> | {error: any}> {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }
  
  
  public async createUniqueNameIndex(): Promise<string | {error: any}> {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async listIndexs(): Promise<Array<IndexInformationOptions> | {error: any}> {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async dropIndex(name: string): Promise<any> {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async dropAllIndexs() {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async cursorIterate(status: string): Promise<number | {error: any}> {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }
    
  public async deleteAll() {
    try {
      throw("To Be Implemented")
    } catch (error) {
      return {"error":error};
    }
  }

  public async disconnect(): Promise<void> {
    try {
      throw("To Be Implemented")
    } catch (error) {
      console.error("Failed to disconnect from MongoDB:", error);
    }
  }

}
