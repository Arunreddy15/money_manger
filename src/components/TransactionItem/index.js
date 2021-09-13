// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, title, amount, type} = historyItem

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <div>
      <hr />
      <li className="history-item">
        <p className="data">{title}</p>
        <p className="data">{amount}</p>
        <p className="data">{type}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    </div>
  )
}
export default TransactionItem
