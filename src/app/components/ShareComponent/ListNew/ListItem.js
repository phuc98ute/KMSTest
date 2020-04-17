import React from 'react';
import { View, Text, ProgressViewIOSComponent } from 'react-native';
import { Content, Left, Body, Right, Button, List, ListItem, Thumbnail } from 'native-base';

export function CustomListItem(props) {
    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: props.image }} />
            </Left>
            <Body>
                <Text>{props.name}</Text>
                <Text note numberOfLines={1}>{props.content}</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    )
}