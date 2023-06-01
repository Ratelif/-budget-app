import { useContext } from "react"
import { GlobalContext } from "../context/Globalstate"

const ExpenseTransactions = ({expenseTransactions}) => {
const {deleteTransaction} = useContext(GlobalContext)

  return (
     <li className="transaction">
         <span className="transaction-text">{expenseTransactions.expenseText}</span>
         <span className="transaction-amount">{expenseTransactions.expenseAmount} Ft.</span>
         <button className="delete-btn" onClick={()=> deleteTransaction(expenseTransactions.id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
         </button>
      </li>
  )
}

export default ExpenseTransactions
