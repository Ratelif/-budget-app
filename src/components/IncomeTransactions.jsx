import { useContext } from "react"
import { GlobalContext } from "../context/Globalstate"

const IncomeTransactions = ({incomeTransaction}) => {
   const {deleteTransaction} = useContext(GlobalContext)
  return (
     <li className="transaction">
         <span className="transaction-text">{incomeTransaction.incomeText}</span>
         <span className="transaction-amount">{incomeTransaction.incomeAmount} Ft.</span>
         <button className="delete-btn" onClick={()=> deleteTransaction(incomeTransaction.id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
         </button>
      </li>
  )
}

export default IncomeTransactions
