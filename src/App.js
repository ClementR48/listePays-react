import React from 'react';
import Home from './pages/Home';
import{ BrowserRouter,Switch, Route } from "react-router-dom"
import About from './pages/About';


const App = () => {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
   </BrowserRouter>
  );
};

export default App;