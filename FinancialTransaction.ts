import { IntegerType } from "mongodb";

export interface FinancialTransaction {
    date: string;
    description: string;
    debit: IntegerType;   // Financial Amount in cents
    credit: IntegerType;  // Financial Amount in cents
  }