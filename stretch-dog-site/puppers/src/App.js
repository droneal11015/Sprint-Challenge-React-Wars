import React, { Component } from 'react';
import './App.css';
import Chars from './components/characters';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Chars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breed/hound/images');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ Chars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">You Aint Nothin But a Hound Dog</h1>
        <Chars data={this.state.Chars} />
      </div>
    );
  }
}

export default App;
