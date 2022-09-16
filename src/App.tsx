import { AmountBlock } from './components/AmountBlock';

import './index.scss';

function App() {
  return (
    <div className="App">
      <h3 className="app-title">Выберете Вашу валюту</h3>
      <AmountBlock subtitle={'You Pay'} currencyName={'USD'} currencyIcon={'usd'} value={100} />
      <AmountBlock
        subtitle={'You Receive'}
        currencyName={'USDC EVMOS'}
        currencyIcon={'eth'}
        value={100}
      />
      <button className="btn">Buy now</button>
    </div>
  );
}

export default App;
