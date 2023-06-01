import { useContext } from "react"
import { GlobalContext } from "../context/Globalstate"
import IncomeTransactions from "./IncomeTransactions"

const IncomeList = () => {

  const {incomeTransactions} = useContext(GlobalContext) 

  return (
    <div className='transactions transactions-income'>
      <h2>Előzmények</h2>   
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => (
           <IncomeTransactions incomeTransaction={incomeTransaction} key={incomeTransaction.id} />
        ))}
      </ul>
    </div>
  )
}

export default IncomeList
