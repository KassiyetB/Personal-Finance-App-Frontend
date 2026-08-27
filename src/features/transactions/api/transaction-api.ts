import type { Transaction } from "../types/transaction";

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