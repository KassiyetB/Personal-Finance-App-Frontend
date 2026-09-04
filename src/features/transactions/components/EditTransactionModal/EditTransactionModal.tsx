import { useState, useEffect } from "react"
import { editTransaction } from "../../api/transaction-api"
import type { Transaction, UpdateTransactionDto } from "../../types/transaction";
import { useCategoryStore } from "../../stores/category-store";
import Modal from "@/components/ui/Modal/Modal";
import styles from "./EditTransactionModal.module.css"

const TEST_USER_ID = import.meta.env.VITE_TEST_USER_ID

interface editTransactionModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    transaction: Transaction;
    onSuccess?: () => void;
}

const EditTransactionModal = ({isModalOpen, setIsModalOpen, transaction, onSuccess}: editTransactionModalProps) => {
    const [transactionData, setTransactionData] = useState<UpdateTransactionDto>({
        type: transaction.type,
        name: transaction.name,
        amount: Number(transaction.amount),
        date: transaction.date,
        categoryId: transaction.categoryId
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    // Fetch Categories
    const { 
        categories,
        loading: categoryLoading,
        error: categoryError,
        fetchCategories,
    } = useCategoryStore();

    useEffect(() => {
        fetchCategories(TEST_USER_ID);
      }, [
        fetchCategories
    ]);


    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setTransactionData(prev => ({
            ...prev,
            [name]: name === "amount" ? Number(value) : value,
        }));
    }

    const handleClose = () => {
        setError("");
        setIsModalOpen(false);
    };

    const handleSubmit = async (
        event: React.SubmitEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            setIsLoading(true);
            setError("");

            await editTransaction(
                TEST_USER_ID,
                transaction.id,
                transactionData
            );

            handleClose();
            onSuccess?.();
        } catch(error){
            setError("Failed to create transaction!");
            setIsLoading(false);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
            <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Edit Transaction"
                content={
                    <form className={styles.transactionForm} onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Name" 
                            value={transactionData.name}
                            onChange={handleChange}
                        />
                        <select id="category" name="categoryId" onChange={handleChange}>
                            <option value="">Category</option>
                            {categories.map(category => {
                                return <option key={category.name} value={category.id}>{category.name}</option>
                            })}
                        </select>
                        {categoryError && <p>{categoryError}</p>}

                        <select id="type" name="type" onChange={handleChange}>
                            <option value="EXPENSE">Expense</option>
                            <option value="INCOME">Income</option>
                        </select>
                        
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={
                                Number(transactionData.amount) == 0 ? "" : transactionData.amount
                            }
                            onChange={handleChange}
                        />

                        {error && <p>{error}</p>}

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Editing..." : "Edit"}
                        </button>
                    </form>
                } 
            />
        
    )
}

export default EditTransactionModal