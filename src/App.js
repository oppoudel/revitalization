import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Neighborhood from './components/Neighborhood';
import List from './components/List';

class App extends Component {
  async componentDidMount() {
    const response = await (await fetch(
      'https://maps.baltimorecity.gov/egis/rest/services/CitiStat/Revitalization/MapServer/2/query?where=1%3D1&outFields=*&returnGeometry=false&f=pjson'
    )).json();
    console.log(response.features);
    this.setState({ neighborhoods: response.features });
  }
  state = {
    neighborhoods: []
  };
  render() {
    const { neighborhoods } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              path="/"
              render={() => <List neighborhoods={neighborhoods} />}
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
