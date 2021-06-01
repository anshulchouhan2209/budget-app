import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import ExpenseTransaction from './ExpenseTransaction'

const ExpenseList= () => {
    const { expenseTransaction } = useContext(GlobalContext);
    console.log(expenseTransaction);
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
               {expenseTransaction.map( expenseTransaction=>(
                   <ExpenseTransaction expenseTransaction={expenseTransaction} />
               ))}
            </ul>

        </div>
    )
}
export default ExpenseList