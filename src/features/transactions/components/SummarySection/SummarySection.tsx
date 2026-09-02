import styles from "./SummarySecition.module.css"
import type { Transaction, TransactionType } from "../../types/transaction"

interface SummarySection{
    transactions: Transaction[];
}

const SummarySection = ({transactions}: SummarySection) => {
    console.log(transactions);
    const income = sumAmount(transactions, "INCOME");
    const expenses = sumAmount(transactions, "EXPENSE");
  return (
    <div className={styles.summarySecition}>
        <div>
            <p>Income</p>
            <p>{income}</p>
        </div>
        <div>
            <p>Expenses</p>
            <p>{expenses}</p>
        </div>
        <div>
            <p>Remaining</p>
            <p>{income - expenses}</p>
        </div>
        
    </div>
  )
}

function sumAmount(transactions: Transaction[], type: TransactionType) { 

    return transactions.reduce((sum, transaction) => {
        if (transaction.type === type){
            return sum + Number(transaction.amount);
        }
        return sum;
    }, 0);
}

export default SummarySection