import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseItem = ({ amount, charge,id,handleDelete,handleEdit}) => {
  return (
    <>
      {
        (amount,
        charge && (
          <li className="item" hidden>
            <div className="info">
              <span className="expense">{charge}</span>
              <span className="amount">$ {amount}</span>
            </div>

            <div>
              <button className="edit-btn" aria-label="edit button" onClick={()=>handleEdit(id)}>
                <EditIcon />
              </button>

              <button className="clear-btn" aria-label="delete button" onClick={()=>handleDelete(id)}>
                <DeleteIcon />{" "}
              </button>
            </div>
          </li>
        ))
      }
    </>
  );
};

export default ExpenseItem;
