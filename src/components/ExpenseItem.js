import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseItem = ({expense}) => {
  
  
  return (
    <li className="item">
      <div className="info">
          <span className="expense">{expense &&expense.charge}</span>
          <span className="amount">$ {expense &&expense.amount}</span>
      </div>
      
     <div>
       <button className="edit-btn" aria-label="edit button">
         <EditIcon />
       </button>
      
       <button className="clear-btn" aria-label="delete button">
         <DeleteIcon />{" "}
       </button>
     </div>
     
    </li>
  );
};

export default ExpenseItem;
