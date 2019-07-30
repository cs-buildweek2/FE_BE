import React, { Component } from 'react';
import GameMap from './GameMap';
import RoomDetails from './RoomDetails';
import PlayerDetails from './PlayerDetails';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const BodyRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;


class Body extends Component {
  
  render() {
    console.log('Body')
    console.log(this.props)
    let {map, currentRoom, currentPlayer, currentRoomMapIndex, curRoom} = this.props
    return (
      <BodyContainer>
          <GameMap gameMap={map} currentRoom={currentRoom} currentRoomMapIndex={currentRoomMapIndex} />
          <BodyRightContainer>
            <RoomDetails room={currentRoom} curRoom={curRoom} />
            <PlayerDetails player={curRoom.players} />
          </BodyRightContainer>
      </BodyContainer>
    );
  }
}

export default Body;