import { useContext } from "react"
import { GlobalContext } from "../context/Globalstate"
import ExpenseTransactions from "./ExpenseTransactions"

const ExpenseList = () => {
   const {expenseTransactions} = useContext(GlobalContext)
   return (
    <div className='transactions transactions-expense'>
      <h2>Előzmények</h2>   
      <ul className="transaction-list">
         {expenseTransactions.map(expenseTransaction => (
           <ExpenseTransactions expenseTransactions={expenseTransaction} key={expenseTransaction.id}/>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList


