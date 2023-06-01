import { useState, useContext } from "react"
import {v4 as uuidv4} from "uuid"
import {GlobalContext} from '../context/Globalstate'

const AddTransaction = () => {
  const {addIncome, addExpense} = useContext(GlobalContext) 
  
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: ""
  })

  const {incomeText, incomeAmount} = income

  const onChangeIncome = (e) => {
    setIncome({...income, [e.target.name]: e.target.value})
    
  }

  const onSubmitIncome = (e) => {
    e.preventDefault()

    if( incomeText !== ""){
        const newIncomeTransAction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount*1,
        }
    
      addIncome(newIncomeTransAction)
      setIncome({
        incomeText: "",
        incomeAmount: ""
      })
   } 
  }
   
    const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: ""
  })

  const {expenseText, expenseAmount} = expense

  const onChangeExpense = (e) => {
    setExpense({...expense, [e.target.name]: e.target.value})
    
  }

  const onSubmitExpense = (e) => {
    e.preventDefault()
    
    if(expenseText !== "") {
      const newExpenseTransAction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount*1,
      }
    
      addExpense(newExpenseTransAction)
      setExpense({
        expenseText: '',
        expenseAmount: ""
      })
    }

  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={onSubmitIncome}>
         <div className="input-group income">
          <input type="text" name="incomeText" value={incomeText} id="" placeholder='Bevétel' autoComplete='off' onChange={onChangeIncome} />
          <input type="number" name="incomeAmount" value={incomeAmount} id="" placeholder='0' autoComplete='off' onChange={onChangeIncome} />
          <input type="submit" value="Hozzáad" />
         </div>
      </form>
      <form onSubmit={onSubmitExpense}>
         <div className="input-group expense">
          <input type="text" name="expenseText" value={expenseText} id="" placeholder='Kiadás' autoComplete='off' onChange={onChangeExpense}/>
          <input type="number" name="expenseAmount" value={expenseAmount} id="" placeholder='0' autoComplete='off' onChange={onChangeExpense}/>
          <input type="submit" value="Hozzáad" />
         </div>
      </form>
    </div>
  )
}

export default AddTransaction
