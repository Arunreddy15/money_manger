// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense} = props
  return (
    <div className="listOf">
      <li className="item-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="list-logo"
        />
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">
            Rs {parseInt(income) - parseInt(expense)}
          </p>
        </div>
      </li>

      <li className="item-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="Income"
          className="list-logo"
        />
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {income}</p>
        </div>
      </li>

      <li className="item-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="Expenses"
          className="list-logo"
        />
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expense}</p>
        </div>
      </li>
    </div>
  )
}
export default MoneyDetails
