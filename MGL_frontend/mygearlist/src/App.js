import React, { Component } from 'react';
import GearList from './components/GearList';
import NewItem from './components/NewItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to My Gear List</h2>
          <p>Store a list of your outdoor gear to stay organized!</p>
        </div>
        <NewItem />
        <GearList />
      </div>
    );
  }
}

export default App;
