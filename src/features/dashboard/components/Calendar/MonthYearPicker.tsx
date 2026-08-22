const MonthYearPicker = () => {
    const currentYear = new Date().getFullYear();
    const yearsBack = 56;
    const minYear = currentYear - yearsBack;
    
    const currentMonth = new Date().getMonth();
    const getMonthName = (month: number): string => {
        return new Date(2000, month, 1).toLocaleString("en-US", {
            month: "long",
        });
    };

    return (
        <div>
            <select defaultValue={currentYear}>
                {Array.from({ length: yearsBack + 1 }, (_, i) => {
                    const year = minYear + i;

                    return (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    );
                })}
            </select>
            <div>
                {Array.from({ length: 12 }, (_, i) => (
                    i == currentMonth 
                    ? <button key={i} style={{color: "blue"}}>{getMonthName(i)}</button> 
                    : <button key={i}>{getMonthName(i)}</button>
                ))}
            </div>
        </div>
    )
}

export default MonthYearPicker