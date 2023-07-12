import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptosList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({cryptosList: updatedData, isLoading: false})
  }

  render() {
    const {cryptosList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cc-list-container">
            <h1 className="cc-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cc-image"
            />
            <div className="list-container">
              <div className="list-headings-container">
                <h1 className="currency-heading">Coin Type</h1>
                <div className="currency-container">
                  <h1 className="currency-heading">USD</h1>
                  <h1 className="currency-heading">EURO</h1>
                </div>
              </div>
              <ul className="currency-list-container">
                {cryptosList.map(eachCurrency => (
                  <CryptocurrencyItem
                    key={eachCurrency.id}
                    details={eachCurrency}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
