import React, { Component }  from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { initTestMap ,initTestCurrentRoom , initTestCurrentPlayer } from './gameFunctions/';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { simpleAction } from './actions/index.js';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: initTestMap(),
      players: [],
      currentRoom: initTestCurrentRoom(),
      currentPlayer: initTestCurrentPlayer()
    };
  }

  render() {
    let {map, currentRoom, currentPlayer} = this.state
    console.log('**app.js**')
    return (
      <AppContainer>
        <Header />
        <Body map={map} currentRoom={currentRoom} currentPlayer={currentPlayer} />
        <Footer currentRoom={currentRoom} />
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
