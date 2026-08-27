export type TransactionType = "INCOME" | "EXPENSE";

export type TransactionSource = "MANUAL" | "RECURRING";

export interface Category {
    id: string;
    name: string;
}

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