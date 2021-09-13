/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyData: [],
    income: 0,
    expense: 0,
    selectedOption: transactionTypeOptions[0].displayText,
    inputTitle: '',
    inputAmount: '',
  }

  deleteHistoryItem = id => {
    const {historyData} = this.state
    const itemRemaining = historyData.filter(each => each.id !== id)
    this.setState({historyData: itemRemaining})
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  onSubmitAdd = event => {
    const {inputTitle, inputAmount, selectedOption} = this.state
    event.preventDefault()
    const newHistoryItem = {
      id: v4uuid(),
      title: inputTitle,
      amount: inputAmount,
      type: selectedOption,
    }
    if (selectedOption === 'Income') {
      console.log('income')
      this.setState(prevState => ({
        income: prevState.income + parseInt(inputAmount),
      }))
    } else {
      console.log(selectedOption)
      this.setState(prevState => ({
        expense: prevState.expense + parseInt(inputAmount),
      }))
    }
    this.setState(prevState => ({
      historyData: [...prevState.historyData, newHistoryItem],
      inputTitle: '',
      inputAmount: '',
    }))
    console.log(newHistoryItem)
  }

  render() {
    const {historyData, income, expense, inputTitle, inputAmount} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="head-profile">
            <h1 className="profile-heading">Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails income={income} expense={expense} />
          <div className="bottom-section">
            <div className="form-container">
              <h1 className="form-head">Add Transaction</h1>
              <form className="form-box" onSubmit={this.onSubmitAdd}>
                <div className="inputs-div">
                  <label>TITLE</label>
                  <br />
                  <input
                    type="text"
                    placeholder="TITLE"
                    onChange={this.onChangeTitle}
                    value={inputTitle}
                  />
                </div>
                <div className="inputs-div">
                  <label>AMOUNT</label>
                  <br />
                  <input
                    type="text"
                    placeholder="AMOUNT"
                    onChange={this.onChangeAmount}
                    value={inputAmount}
                  />
                </div>
                <div className="inputs-div">
                  <label>TYPE</label>
                  <br />
                  <select onChange={this.onChangeOption}>
                    {transactionTypeOptions.map(each => (
                      <option key={each.optionId}>{each.displayText}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="form-head">History</h1>
              <div className="history">
                <li className="heading-history">
                  <p className="table-heading">Title</p>
                  <p className="table-heading">Amount</p>
                  <p className="table-heading">Type</p>
                </li>
                <ul>
                  {historyData.map(each => (
                    <TransactionItem
                      key={each.id}
                      historyItem={each}
                      deleteHistoryItem={this.deleteHistoryItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
