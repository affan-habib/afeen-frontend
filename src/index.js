import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// scroll bar
import 'simplebar/src/simplebar.css';

// apex-chart
import 'assets/third-party/apex-chart.css';
import 'assets/third-party/react-table.css';

// load mock apis


// project import
import App from './App';
import { store } from 'store';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
);


