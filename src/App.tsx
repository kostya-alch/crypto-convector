import { AmountBlock } from './components/AmountBlock';
import svg from './assets/img/dollar.svg';
import './index.scss';

function App() {
  return (
    <div className="App">
      <h3 className="app-title">Выберете Вашу валюту</h3>
      <AmountBlock subtitle={'You pay'} currencyName={'USD'} currencyIcon={'usd'} value={100} />
    </div>
  );
}

export default App;
