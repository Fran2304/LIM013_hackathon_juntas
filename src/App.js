import './App.css';

import getBancos from './controllers/bancos.js';

const App = () => {
  return (
    <div>
      { getBancos() }
    </div>
  );
}

export default App;
