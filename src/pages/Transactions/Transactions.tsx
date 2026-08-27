import { useEffect } from "react";
import { useTransactionStore } from "@/features/transactions/stores/transaction-store";
import { Table } from "@/components/ui/Table/Table";
import MonthPicker from "@/components/ui/MonthPicker/MonthPicker";

const TEST_USER_ID = import.meta.env.VITE_TEST_USER_ID

const Transactions = () => {
  const {
    transactions,
    selectedMonth,
    loading,
    error,
    fetchTransactions,
    setSelectedMonth,
  } = useTransactionStore();

  useEffect(() => {
    fetchTransactions(
      TEST_USER_ID,
      selectedMonth,
    );
  }, [
    selectedMonth,
    fetchTransactions,
  ]);

  // Pick the nessecary data and buttons
  const tableData = transactions.map((row, index) => ({
    name: row.name,
    amount: row.amount,
    type: row.type,
    date: new Date(row.date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    source: row.source,
    category: row.category.name,
    Action: (
      <div>
        <button onClick={() => console.log("edit", row)} id={String(index)}>
          Edit
        </button>

        <button onClick={() => console.log("delete", row)} id={String(index)}>
          Delete
        </button>
      </div>
    ),
  }));

  return (
    
    <div>
      <MonthPicker selectedMonth={selectedMonth}  setSelectedMonth={setSelectedMonth} />
      {loading && <p>Loading</p>}
      <Table id="TransactionsTable" data={tableData} />
      {error && <p>{error}</p>}
    </div>
  )
}
export default Transactions