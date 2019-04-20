import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route component={Default} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
