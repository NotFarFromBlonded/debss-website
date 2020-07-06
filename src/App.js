import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import {AnimatePresence} from "framer-motion";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
              <AnimatePresence exitBeforeEnter>
                <Switch >
                  <Route 
                    exact={true}
                    path="/"
                    component={Home}
                  />

                  <Route 
                    path="/about"
                    component={About}
                  />

                  <Route 
                    path="/projects"
                    component={Projects}
                  />

                  <Route 
                    path="/blog"
                    component={Blog}
                  />

                  <Route 
                    path="/contact"
                    component={Contact}
                  />
                </Switch>
              </AnimatePresence>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
