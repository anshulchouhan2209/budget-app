import React,{Children, createContext,useReducer ,useEffect} from 'react'
import AppReducer from './AppReducer'
const initialstate={
    incomeTransaction:JSON.parse(localStorage.getItem('incomeTransaction'))||[],
    expenseTransaction:JSON.parse(localStorage.getItem('incomeTransaction'))||[],
    
};
export const GlobalContext = createContext(initialstate);
export const GlobalContextProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialstate)

    useEffect(()=>{
        localStorage.setItem("IncomeTransaction",JSON.stringify(state.incomeTransaction));
        localStorage.setItem("ExpenseTransaction",JSON.stringify(state.expenseTransaction));
    });

const addIncome=(incomeTransaction) =>{
    dispatch({
        type:"ADD_INCOME",
        payload:incomeTransaction,
    });
};

const addExpense=(expenseTransaction) =>{
    dispatch({
        type:"ADD_EXPENSE",
        payload:expenseTransaction,
    });
};

const deleteTransaction=(id)=>{
    dispatch({
        type:"DELETE_TRANSACTION",
        payload:id,
    });
};

    return (
        <GlobalContext.Provider value={{
            incomeTransaction:state.incomeTransaction,
            expenseTransaction:state.expenseTransaction,
            addIncome,
            addExpense,
            deleteTransaction,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
};
