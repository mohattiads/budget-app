import { useState,useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";

// const initialExpenses = [];
const initialExpenses =localStorage.getItem("expenses")?
JSON.parse(localStorage.getItem("expenses")):[];  


function App() {
  //! ************************ state values*************************
  //! all expenses, add expense

  const [expenses, setExpenses] = useState(initialExpenses);
  //* single expense
  const [charge, setCharge] = useState("");

  //? single amount
  const [amount, setAmount] = useState("");

  //?  edit
  const [edit, setEdit] = useState(false);

  //?  edit item
  const [id, setId] = useState(0);

  //?  alert

  const [alert, setAlert] = useState({ show: false });
  //!: ************************ useEffect*************************
  useEffect(()=>{

      console.log("we called useEffect")
      localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])
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
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "you didn't add any item " });
    }
  };

  //? clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: " All item deleted" });
  };

  //? handle delete items
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  //? handle edit items
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    console.log(expense);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
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
          edit={edit}
        />
        <ExpenseItem />
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
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
