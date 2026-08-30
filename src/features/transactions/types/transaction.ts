import type { Category } from "./category";

export type TransactionType = "INCOME" | "EXPENSE";

export type TransactionSource = "MANUAL" | "RECURRING";



export interface Transaction {
    id: string;

    type: TransactionType;
    name: string;
    amount: string;

    date: string;

    source: TransactionSource;

    categoryId: string;
    userId: string;

    recurringTransactionId: string | null;

    category: Category;
}

export interface CreateTransactionDto {
    type: TransactionType;
    name: string;
    amount: number;
    date: string;
    categoryId: string;
    userId: string;
};
