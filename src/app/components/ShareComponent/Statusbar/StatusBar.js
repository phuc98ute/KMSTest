import React, { useState, useEffect } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default function StatusBar(props) {
  const [data,setData] = useState();

  useEffect(()=>{
    
  })
    return (
        <Header style={{backgroundColor:'ffffff'}}>
          {/* <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left> */}
          <Body>
        <Title>{props.ScreenName}</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right> */}
        </Header>
    );
}