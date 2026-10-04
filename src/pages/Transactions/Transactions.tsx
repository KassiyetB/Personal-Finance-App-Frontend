import { useState, useEffect } from "react";
import { useTransactionStore } from "@/features/transactions/stores/transaction-store";
import { Table } from "@/components/ui/Table/Table";
import type { Transaction } from "@/features/transactions/types/transaction";
import MonthPicker from "@/components/ui/MonthPicker/MonthPicker";
import CreateTransactionModal from "@/features/transactions/components/CreateTransactionModal/CreateTransactionModal";
import SummarySection from "@/features/transactions/components/SummarySection/SummarySection";
import EditTransactionModal from "@/features/transactions/components/EditTransactionModal/EditTransactionModal";

const TEST_USER_ID = import.meta.env.VITE_TEST_USER_ID

const Transactions = () => {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const {
    transactions,
    selectedMonth,
    loading,
    error,
    fetchTransactions,
    setSelectedMonth,
  } = useTransactionStore();

  const refreshTransactions = () => {
    fetchTransactions(TEST_USER_ID, selectedMonth);
  };

  useEffect(() => {
    refreshTransactions();
  }, [selectedMonth, fetchTransactions]);

  const handleCreateSuccess = () => {
    setIsCreateModalOpen(false);
    refreshTransactions();
  };

  const handleEditSuccess = () => {
    setSelectedTransaction(null);
    refreshTransactions();
  };

  // Pick the nessecary data and buttons
  const tableData = transactions.map((transaction) => ({
    name: transaction.name,
    amount: transaction.amount,
    type: transaction.type,
    date: new Date(transaction.date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    source: transaction.source,
    category: transaction.category.name,
    Action: (
      <div>
        <button onClick={() => setSelectedTransaction(transaction)}>
          Edit
        </button>

        <button onClick={() => console.log("delete", transaction)}>
          Delete
        </button>
      </div>
    ),
  }));

  console.log("selected month is:" + selectedMonth);
  return (
    
    <div>
      <MonthPicker selectedMonth={selectedMonth}  setSelectedMonth={setSelectedMonth} />
      <button onClick={() => setIsCreateModalOpen(true)}> Create Transaction </button>
      {isCreateModalOpen && (
        <CreateTransactionModal
          isModalOpen={isCreateModalOpen}
          setIsModalOpen={setIsCreateModalOpen}
          onSuccess={handleCreateSuccess}
        />
      )}

      {selectedTransaction && (
        <EditTransactionModal
          transaction={selectedTransaction}
          isModalOpen={Boolean(selectedTransaction)}
          setIsModalOpen={(isOpen) => {
            if (!isOpen) {
              setSelectedTransaction(null);
            }
          }}
          onSuccess={handleEditSuccess}
        />
      )}
      
      <SummarySection transactions={transactions} />
      {loading && <p>Loading</p>}
      <Table id="TransactionsTable" data={tableData} />
      {error && <p>{error}</p>}
    </div>
  )
}
export default Transactions