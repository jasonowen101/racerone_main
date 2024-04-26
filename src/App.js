import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
}

export default App;
