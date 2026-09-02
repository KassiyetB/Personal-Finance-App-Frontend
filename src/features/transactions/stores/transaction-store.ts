import { create } from "zustand";
import { getTransactions } from "../api/transaction-api";
import type { Transaction } from "../types/transaction";
const now = new Date();

interface TransactionState {
  transactions: Transaction[];
  selectedMonth: string;

  loading: boolean;
  error: string | null;

  fetchTransactions: (
    userId: string,
    month: string,
  ) => Promise<void>;

  setSelectedMonth: (month: string) => void;
}



export const useTransactionStore =
  create<TransactionState>((set) => ({
    transactions: [],
    selectedMonth: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`,

    loading: false,
    error: null,

    fetchTransactions: async (
      userId,
      month,
    ) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const transactions =
          await getTransactions(
            userId,
            month,
          );

        set({
          transactions,
          selectedMonth: month,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          loading: false,
          error:
            "Failed to load transactions",
        });
      }
    },

    setSelectedMonth: (month) => {
      set({
        selectedMonth: month,
      });
    },
  }));