import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car peyment", amount: 200 },
  { id: uuidv4(), charge: "credit card bill", amount: 100 },
];

function App() {
  //! ************************ state values*************************
  //! all expenses, add expense

  const [expenses, setExpenses] = useState(initialExpenses);
  //* single expense
  const [charge, setCharge] = useState("");

  //? single amount
  const [amount, setAmount] = useState("");

  //?  alert
  const [alert, setAlert] = useState({ show: false });

  //todo: ************************ functionality*************************

  //? handle charge

  const handleCharge = (e) => {
    console.log(`charge ${e.target.value}`);
    setCharge(e.target.value);
  };

  //? handle amount

  const handleAmount = (e) => {
    console.log(`amount ${e.target.value}`);
    setAmount(e.target.value);
  };
  //? handle alert

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 4000);
  };

  //? handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
      handleAlert({ type: "success", text: "item added" });
    } else {
      // todo://///////////////////////////////
      handleAlert({ type: "danger", text: "you didn't add any item " });
    }
  };

  // TODO: ************************ functionality*************************

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseItem />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending : {""}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
