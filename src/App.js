import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function formatLocation(house){
  return house.building + ' ' + house.location;
}

function formatCity(user){
  return user.city;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function getCity(user){
  return <h3>{formatCity(user)}</h3>
}

const user = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  building: 'Pineapple',
  location: 'Under the Sea',
  city: 'Bikini Bottom'

};

const name = (
  <h1>
    Hello, {formatName(user)}
  </h1>
);

const greeting =(
  <h1>
    {getGreeting(user)}
  </h1>
);

const whereisspongebob =(
  <h1>
    {formatLocation(user)}
  </h1>
);

const city =(
  <h1>
    {getCity(user)}
  </h1>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>{name} from {whereisspongebob}</h4>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <h5>{greeting}</h5>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h5>{city}</h5>
        </p>
        <p>
          <h5>Spongebob lives in a  {whereisspongebob}</h5>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
