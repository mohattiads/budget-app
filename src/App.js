import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';


const initialExpenses=[
  {id:uuidv4(),charge:"rent",amount:1600},
  {id:uuidv4(),charge:"car peyment",amount:200},
  {id:uuidv4(),charge:"credit card bill",amount:100},
]


function App() {
  const [expenses,setExpenses]= useState(initialExpenses);

  return (
    <div>
    <Alert/>
    <h1>budget calculator</h1>
    <main className="App">
        <ExpenseForm/>
        <ExpenseItem/>
        <ExpenseList expenses={expenses} />
    </main>
    <h1>
    total spending : {""} 
    <span className="total">
    ${" "}
    {expenses.reduce((acc,curr)=>{
      return (acc+= curr.amount);
    },0)}
    </span>
    </h1>

   </div>
  );
}

export default App;
