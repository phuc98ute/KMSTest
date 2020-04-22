import React from 'react';
import { View, Text } from 'react-native';
import { SharedStyle } from '../../styles/SharedStyle';
import StatusBar from '../ShareComponent/Statusbar/StatusBar';
import { Content, Header, Item, Input, Left, Body, Right, Button, Icon, Title, Tab, Tabs, TabHeading, List, ListItem, Thumbnail } from 'native-base';

export function PowerSearchScreen(props) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar ScreenName="Tìm kiếm" />
            <View>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent 
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        props.navigation.navigate('DetailNews', {
                          itemId: 86,
                          otherParam: 'anything you want here',
                        });
                      }}
                    >
                        <Text>Search</Text>
                    </Button>
                </Header>
            </View>
            <View style={SharedStyle.container}>

            </View>

        </View>
    )
}