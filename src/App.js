import Expenses from "./components/Expenses";
import ExpenseItem from "./components/Expenses";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "School Fee",
      amount: 400,
      date: new Date(2021, 4, 4),
    },
    {
      id: "e2",
      title: " Books",
      amount: 800,
      date: new Date(2021, 3, 3),
    },
    {
      id: "e3",
      title: "House Rent",
      amount: 1200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "e4",
      title: "Food",
      amount: 1600,
      date: new Date(2021, 1, 1),
    },
  ];

  return (
    <div>
      <h1 className='heading'>Let's get started</h1>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
