import React from 'react';
import { View, Text } from 'react-native';
import { SharedStyle } from '../../styles/SharedStyle';
// import { Container, Text } from 'native-base';
import { StatusBar } from '../ShareComponent/Statusbar/StatusBar';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';

export function TodayScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            {/* <StatusBar/> */}
            <View style={SharedStyle.container}>
                <Tabs>
                    <Tab heading="Tab1">
                        <Text> Tab 1</Text>
                    </Tab>
                    <Tab heading="Tab2">
                    <Text> Tab 2</Text>
                    </Tab>
                    <Tab heading="Tab3">
                    <Text> Tab 3</Text>
                    </Tab>
                </Tabs>
            </View>
        </View>

    )
}