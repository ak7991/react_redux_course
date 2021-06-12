import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setAmountTitle] = useState('');
    const [enteredDate, setDateTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmountTitle(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDateTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("Enter title");
        setAmountTitle("Enter Amount");
        setDateTitle("");
    };
    return <form onSubmit={submitHandler}>
        <div className="expense-form__controls">
            <div className="expense-form__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="expense-form__control">
                <label>Amount</label>
                <input type="number" min="0.1" step="0.1" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="expense-form__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2100-01-01" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="expense-form__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>

}

export default ExpenseForm;