import React, { useState, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext);

    const [income, setIncome] = useState({
        incomeText: "",
        incomeAmount: 0,
    });

    const { incomeText, incomeAmount } = income;
    const onChangeIncome = (e) => {
        setIncome({ ...income, [e.target.name]: e.target.value });
        //console.log(income);
    };
    const onSubmitIncome = (e) => {
        e.preventDefault();
        if (incomeText !== "") {
            const newIncomeTransaction = {
                id: uuid(),
                incomeText,
                incomeAmount: incomeAmount * 1,
            };
            addIncome(newIncomeTransaction);

            setIncome({
                incomeText: "",
                incomeAmount: 0,
            })
        }
        else{
            alert("plese SetIncome");
        }
    };
    const [expense, setExpense] = useState({
        expenseText: "",
        expenseAmount: 0,
    });
    const { expenseText, expenseAmount } = expense;
    const onChangeExpense = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
        //console.log(income);
    };
    const onSubmitExpense = (e) => {
        e.preventDefault();

        if (expenseText !== "") {
            const newExpenseTransaction = {
                id: uuid(),
                expenseText,
                expenseAmount: expenseAmount * 1,
            };
            addExpense(newExpenseTransaction);
            setExpense({
                expenseText: "",
                expenseAmount: 0,
            })
        }
        else{
            alert("plese SetExpense");
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome} >
                {/* <form> */}
                <div className="input-group income">
                    <input type="text" name="incomeText" value={incomeText} placeholder="Add Income." autoComplete="off" onChange={onChangeIncome} />
                    <input type="number" name="incomeAmount" value={incomeAmount} placeholder="Amount." autoComplete="off" onChange={onChangeIncome} />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text" name="expenseText" value={expenseText} placeholder="Add Expense." autoComplete="off" onChange={onChangeExpense} />
                    <input type="number" name="expenseAmount" value={expenseAmount} placeholder="Amount." autoComplete="off" onChange={onChangeExpense} />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
