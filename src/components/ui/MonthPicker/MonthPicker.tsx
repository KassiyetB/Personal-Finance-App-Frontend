import styles from "./MonthPicker.module.css"

interface MonthPickerProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
}

const MonthPicker = ({selectedMonth, setSelectedMonth}: MonthPickerProps) => {
    
    const date = new Date(`${selectedMonth}-01`);

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });


    const handlePrevious = () => {
        const previous = new Date(date);
        previous.setMonth(previous.getMonth() - 1);

        setSelectedMonth(
        `${previous.getFullYear()}-${String(
            previous.getMonth() + 1
        ).padStart(2, "0")}`
        );
    };

    const handleNext = () => {
        const next = new Date(date);
        next.setMonth(next.getMonth() + 1);

        setSelectedMonth(
        `${next.getFullYear()}-${String(
            next.getMonth() + 1
        ).padStart(2, "0")}`
        );
    };

    return (
        <div className={styles.MonthPicker}>
            <button type="button" onClick={handlePrevious}>
                &lt;
            </button>

            <p>{formattedDate}</p>
            
            <button type="button" onClick={handleNext}>
                &gt;
            </button>
        </div>
    )
}




export default MonthPicker