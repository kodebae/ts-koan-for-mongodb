import { Document, IntegerType, ObjectId, WithId } from 'mongodb';
import { EventTrace } from './EventTrace';

export interface ProductWithId extends Product, WithId<Product> {
  _id: ObjectId,
}

export interface Product extends Document {
    id: string,
    name: string,
    description: string,
    inventoryQuantity: IntegerType,
    status: string,
    lastUpdated?: EventTrace,
    tags?: Array<String>,
    many?: string
  }
  