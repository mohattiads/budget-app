import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseItem = ({expense}) => {
  const {id,charge,amount}= expense
  
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge} </span>
        <span className="amount">$ {amount}</span>
      </div>
      
     <div>
       <button className="edit-btn" aria-label="edit button">
         <EditIcon />
       </button>
      
       <button className="delete-btn" aria-label="delete button">
         <DeleteIcon />{" "}
       </button>
     </div>
     
    </li>
  );
};

export default ExpenseItem;
