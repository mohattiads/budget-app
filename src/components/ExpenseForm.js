import React from "react";
import SendIcon from "@mui/icons-material/Send";
const ExpenseForm = ({
  handleAmount,
  handleCharge,
  handleSubmit,
  amount,
  charge}
) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        submit <SendIcon fontSize="small" className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
