import type { Category } from "../types/category";
const API_URL = import.meta.env.VITE_API_URL;

export async function getCategories(
    userId: string
): Promise<Category[]> {
    const response = await fetch( `${API_URL}/categories?userId=${userId}`,);
    if (!response.ok) {
    throw new Error("Failed to get categories");
    }

    return response.json();
}