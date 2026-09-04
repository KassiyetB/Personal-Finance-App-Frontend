import type { Transaction, CreateTransactionDto, UpdateTransactionDto } from "../types/transaction";

const API_URL = import.meta.env.VITE_API_URL;


export async function getTransactions(
    userId: string,
    month: string,
): Promise<Transaction[]> {
    const response = await fetch( `${API_URL}/transactions?userId=${userId}&month=${month}`,);
    if (!response.ok) {
    throw new Error("Failed to get transactions");
    }

    return response.json();
}

export async function createTransaction(
    data: CreateTransactionDto
): Promise<CreateTransactionDto> {
    const response = await fetch( `${API_URL}/transactions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error("Failed to create transaction");
    }

    return response.json();
}

export async function editTransaction(
    userId: string,
    transactionId: string,
    data: UpdateTransactionDto
): Promise<Transaction> {
    const response = await fetch( `${API_URL}/transactions/${transactionId}?userId=${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error("Failed to update transaction");
    }
    
    return response.json();
}

