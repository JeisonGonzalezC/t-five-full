import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SellOrders from './components/SellOrders';
import SellOrderDetail from './components/SellOrderDetail';
import NewSellOrder from './components/NewSellOrder';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={SellOrders}/>
                <Route exact path="/sell-order/new" component={NewSellOrder}/>
                <Route exact path="/sell-order/:id" component={SellOrderDetail}/>
              </Switch>
            </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
