import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './AboutPage'; // Import the AboutPage component

const App = () => {
  return (
    <Router>
      {/* Route for the AboutPage component */}
      <Route path="/" exact component={AboutPage} />
    </Router>
  );
};

export default App;
