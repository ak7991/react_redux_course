import { useState } from 'react';

import './Expenses.css';

import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpenseList from "./ExpenseList"

function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState("");

  const filterHandler = (event) => {
    console.log(event.target.value)
    setExpenseYear(event.target.value)
  }
  const filteredExpenses = props.expenseItems.filter(expense => expense.date.getFullYear().toString() === expenseYear)
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onApplyFilter={filterHandler} />
        <ExpenseList expenses={filteredExpenses}/>

      </Card>
    </div>
  );
}

export default Expenses;