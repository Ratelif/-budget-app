import { useContext } from "react"
import { GlobalContext } from "../context/Globalstate"

const Balance = () => {
  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)
  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount)
  
    const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount)

    const totalIncome = incomeAmounts.length > 0 && incomeAmounts.reduce((acc, item)=> (acc + item)).toFixed()

    const totalExpense = expenseAmounts.length > 0 && expenseAmounts.reduce((acc, item)=> (acc + item))

    return (
    <div className='balance'>
      <div className="income-expense">
         <div className="plus">
            <h3>Bevételek</h3>
            { (totalIncome) ? (<p> {totalIncome} Ft.</p>) : (<p> 0 Ft.</p>)}
         </div>
         <div className="minus">
            <h3>Kiadások</h3>
            { (totalExpense) ? (<p> -{totalExpense} Ft.</p>) : (<p> 0 Ft.</p>)}
         </div>
      </div>
      <h2>Aktuális egyenleg</h2>
      <h3>{totalIncome-totalExpense} Ft.</h3>
      
    </div>
  )
}

export default Balance
