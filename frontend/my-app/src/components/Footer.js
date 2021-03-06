import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  background: #515959;
`;

const Explore = styled.div`
  display: flex;
  height: 100%;
  color: white;
  margin-left: 8%;
  padding: 20px;
  width: 5%;
  justify-content: center;
  .button{
    border-radius: 5px;
    width: auto;
    :hover{
      background: green;
      color: white
    }
  }
`;

const ActionDescription = styled.div`
  display: flex;
  height: 100%;
  background: #dcdcdc;
  color: #505858;
  padding: 20px;
  width: 45%;
  justify-content: center;
  margin: auto;
  border-radius: 5px;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-right: 5%;
  padding: 20px;

`;

const Action = styled.div`
  display: flex;
  height: 100%;
  color: white;
  margin-right: 15px;
  
  .button{
    border-radius: 5px;
    min-width: 50px;
    :hover{
      background: green;
      color: white
    }
  }
  
`;


class Footer extends Component {
  
  render() {
    let {direction, autoTraversal, messages} = this.props
    //You have flown south. Flight bonus: -10% CD. Wise ExplorerL -50% CD.
    return (
      <FooterContainer>
        <Explore> <button className = "button" onClick={() => autoTraversal()} > Auto Explore </button> </Explore>
        <ActionDescription>
          {messages}
        </ActionDescription> 
        <ActionsContainer>
          <Action><button className = "button" onClick={() => direction('n')} > N</button> </Action>
          <Action><button className = "button" onClick={() => direction('s')} > S</button> </Action>
          <Action><button className = "button" onClick={() => direction('e')} > E</button> </Action>
          <Action><button className = "button" onClick={() => direction('w')} > W</button> </Action>
          <Action>Store</Action>
          <Action>$</Action>
          <Action>Drop</Action>
        </ActionsContainer>
       
      </FooterContainer>
    );
  }
}

export default Footer;