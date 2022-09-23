import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import UserContextProvider from './Context/UserContext';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


const defaultOptions= {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri:'https://fruits-api.netlify.app/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,

});


/* const client = new ApolloClient({
  uri:'https://fruits-api.netlify.app/graphql',
  cache: new InMemoryCache({
    UnconventionalRootQuery: {
      queryType: true,
    }


  }),  
}) */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
