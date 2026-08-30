import { create } from "zustand";
import { getCategories } from "../api/category-api";
import type { Category } from "../types/category";

interface CategoryState {
  categories: Category[];

  loading: boolean;
  error: string | null;

  fetchCategories: (
    userId: string,
  ) => Promise<void>;
}

export const useCategoryStore =
  create<CategoryState>((set) => ({
    categories: [],

    loading: false,
    error: null,

    fetchCategories: async (userId) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const categories =
          await getCategories(userId);

        set({
          categories,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          loading: false,
          error:
            "Failed to fetch categories",
        });
      }
    },
  }));