import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://vascometh.com/api/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
