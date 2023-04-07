// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    return RandomNumber
  }

  onGenerateNum = () => {
    const randomNumber = this.generateRandomNumber()
    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="randomNumber-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onGenerateNum}
            >
              Generate
            </button>
          </div>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
