import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/homepage/Home';
import './pages/homepage/Home.css';
// import Navbar from "../src/components/navbar/navbar";
import Career from './pages/careerpage/Career';
import Story from '../src/components/story/story';
import Soon from './components/soon/soon';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/career/:id" component={Story} />
        <Route exact path="/feed" component={Soon} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
