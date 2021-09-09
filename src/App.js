import logo from './logo.svg';
import './App.css';
import ListScreen from './components/ListScreen/ListScreen.js';
import DetailScreen from './components/DetailScreen/DetailScreen.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/"
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ListScreen} />
            <Route path="/detailscreen" component={DetailScreen} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
