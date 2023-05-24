import "./App.css";
import CashWithdrawal from "./components/CashWithdrawal";

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Main Component</h1>
      <CashWithdrawal denominationsList={denominationsList} />
    </div>
  );
}

export default App;
