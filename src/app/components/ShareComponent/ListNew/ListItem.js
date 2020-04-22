import React from 'react';
import { View, Text, AsyncStorage, Dimensions,TouchableOpacity } from 'react-native';
import { Left, Body, Right, Button, Thumbnail, Card, CardItem, Icon } from 'native-base';
import HTML from 'react-native-render-html';

export function CustomListItem(props) {
    return (
        <TouchableOpacity onPress={()=>{
            props.navigation.navigate('DetailNews', {
                item:props.item
              });
              AsyncStorage.setItem('dataTest', 'Hello');
        }}>
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: props.image }} />
                        <Body>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color:'blue' }}>{props.item.title[0]}</Text>
                            <Text note>{props.item.pubDate[0].substring(0, 25)}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body style={{ alignItems: 'center' }}>
                        <HTML html={props.item.description[0]} imagesMaxWidth={Dimensions.get('window').width} />
                    </Body>
                </CardItem>
                <CardItem>
                    <Right>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <Icon name="ios-people" />
                            <Text>20 views</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            </TouchableOpacity>
    )
}