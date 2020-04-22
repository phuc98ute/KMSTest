import React from 'react';
import { View, Text, Image, ShadowPropTypesIOS } from 'react-native';
import { SharedStyle } from '../../styles/SharedStyle';
import StatusBar from '../ShareComponent/Statusbar/StatusBar';
import { Container, Content, Header, Item, Input, Left, Body, Right, Button, Icon, Title, Tab, Tabs, TabHeading, List, ListItem, Thumbnail, Card, CardItem } from 'native-base';

const logo_url='https://images-na.ssl-images-amazon.com/images/I/318pS6vsuxL._SY355_.png';

export function ReadLaterScreen() {
    return (
        <Container>
            <StatusBar ScreenName="Lưu trữ"/>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: logo_url }} />
                            <Body>
                                <Text>Read Later News</Text>
                                <Text note>April 22, 2019</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 100, width: 100, flex: 1 }} />
                            <Text>
                            //Your new hear
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="ios-person" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>

        //     </View>
        // </View>
    )
}