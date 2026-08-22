import Table from "@/components/ui/Table/Table"
import "./Dashboard.css"
import MonthYearPicker from "@/features/dashboard/components/Calendar/MonthYearPicker";

const Dashboard = () => {

  // Sample Data
  const data = [
    {
      name: "rent",
      cost: 350,
      duration: "monthly"
    },
    {
      name: "groceries",
      cost: 200,
      duration: "monthly"
    },
    {
      name: "semester fee",
      cost: 400,
      duration: "6 months"
    },
  ]

  // Create Action column and include buttons
  const tableData = data.map((row, index) => ({
    ...row,
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
      <div className="Nav">
        <MonthYearPicker />
      </div>
      <div className="Main">
        <Table id="DashboardTable" columns={Object.keys(tableData[0])} data={tableData} />
      </div>
    </div>
  )
}

export default Dashboard