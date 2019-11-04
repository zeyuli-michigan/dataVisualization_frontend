import React from 'react';
import './App.css';
import {Button, Form, Modal, Tabs, Tab} from 'react-bootstrap';
import {DataEntry} from './DataEntry'
import {DataVisual} from './DataVisual'
import {More} from './More';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Link to="/dataEntry">Data entry</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/dataVisual">Data visualization</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/more">About the author</Link>

          <Switch>
            <Route path="/dataEntry">
            <DataEntry></DataEntry>
            </Route>
            <Route path="/dataVisual">
              <DataVisual></DataVisual>
            </Route>
            <Route path="/more">
              <More></More>
            </Route>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
