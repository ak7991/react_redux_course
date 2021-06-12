import "./ExpenseList.css"

import ExpenseItem from "./ExpenseItem"

function ExpenseList (props) {
    //  Setting renderable expense items
    let expenseContent = <h2 className="expense-list__fallback">No Expense items for the year selected</h2>;
    if (props.expenses.length > 0) {
        expenseContent = <ul className="expense-list">
            {props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </ul>
    }

    return expenseContent
}

export default ExpenseList;