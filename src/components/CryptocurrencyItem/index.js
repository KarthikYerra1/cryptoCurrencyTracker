import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details

  return (
    <li className="currency-list-item-container">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo-pic" />
        <p className="currency-detail">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="currency-detail">{usdValue}</p>
        <p className="currency-detail">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
