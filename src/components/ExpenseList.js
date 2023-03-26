import React from "react";
import ExpenseItem from "./ExpenseItem";
import DeleteIcon from '@mui/icons-material/Delete';

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">

        {expenses.map( expense => {
          return <ExpenseItem key={expense.id}  expense={expense} />;
        })}


      </ul>
      
      {expenses.length > 0 && (
        <button className="btn">
          clear expenses 
          <DeleteIcon className="btn-icon"/>
        </button>
      )}
    </>
  );
};

export default ExpenseList;
