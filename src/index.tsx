import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './index.css';
import App from './App';

import makeServer from './server';

makeServer();

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

