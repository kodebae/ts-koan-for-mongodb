import { Document, IntegerType, ObjectId, WithId } from 'mongodb';
import { EventTrace } from './EventTrace';
import { FinancialTransaction } from './FinancialTransaction';

export interface ProductWithId extends Product, WithId<Product> {
  _id: ObjectId,
}

export interface Product extends Document {
    id: string,
    name: string,
    description?: string,
    inventoryQuantity?: IntegerType,
    status: string,
    lastUpdated?: EventTrace,
    instock?: IntegerType,
    many?: string
    tags?: Array<String>,
    transactions?: Array<FinancialTransaction>;
  }
  