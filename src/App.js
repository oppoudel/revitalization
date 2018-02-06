import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Neighborhood from './components/Neighborhood';
import List from './components/List';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const response = await (await fetch(
      'https://maps.baltimorecity.gov/egis/rest/services/CitiStat/Revitalization/MapServer/3/query?where=1%3D1&outFields=*&returnGeometry=false&f=pjson',
    )).json();
    console.log(response.features);
    this.setState({ neighborhoods: response.features });
  }
  state = {
    neighborhoods: [],
  };
  render() {
    const { neighborhoods } = this.state;
    return (
      <div className="container">
        <Router>
          <div>
            <Route
              path="/"
              render={() => <List neighborhoods={neighborhoods} />}
            />
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <hr />
                  <h2 className="title">Please select a neighborhood! </h2>
                </div>
              )}
            />
            {neighborhoods.map((neighborhood, i) => (
              <div key={i}>
                <Route
                  path={`/${neighborhood.attributes.Name.toLowerCase()}`}
                  render={() => (
                    <Neighborhood attributes={neighborhood.attributes} />
                  )}
                />
              </div>
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
