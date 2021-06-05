import './ExpenseItem.css';
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    console.log("hi")
    console.log(props.date.toISOString())
    console.log("bye")

    const month = props.date.toLocaleString('en-US', { month: "long" });
    const day = props.date.toLocaleString('en-US', { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
        </Card>);
}

export default ExpenseItem;