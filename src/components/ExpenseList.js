import React from "react";
import ExpenseItem from "./ExpenseItem";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              charge={expense.charge}
              amount={expense.amount}
              handleEdit={handleEdit}
              handleDelete={handleDelete}

            />
          );
        })}
      </ul>

      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
          <DeleteIcon className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
