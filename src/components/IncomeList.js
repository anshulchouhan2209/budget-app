import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from "./IncomeTransactions"
const IncomeList = () => {
    const { incomeTransaction } = useContext(GlobalContext);
    console.log(incomeTransaction);
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransaction.map(incomeTransaction => (
                   <IncomeTransaction incomeTransaction={incomeTransaction}/>
                ))}
            </ul>
        </div>
    )
}
export default IncomeList
