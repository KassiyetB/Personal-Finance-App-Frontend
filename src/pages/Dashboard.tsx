import Table from "@/components/ui/Table/Table"

const Dashboard = () => {
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
      <div>
        <p>Month 1 | Month 2 | Month 3</p>
      </div>
      <Table columns={Object.keys(tableData[0])} data={tableData} />
    </div>
  )
}

export default Dashboard