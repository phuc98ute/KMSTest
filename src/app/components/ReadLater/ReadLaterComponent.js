import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedStyle } from '../../styles/SharedStyle';
import StatusBar from '../ShareComponent/Statusbar/StatusBar';
import { Container, Content, Header, Item, Input, Left, Body, Right, Button, Icon, Title, Tab, Tabs, TabHeading, List, ListItem, Thumbnail, Card, CardItem } from 'native-base';

export function ReadLaterScreen() {
    return (
        <Container>
            <StatusBar ScreenName="Lưu trữ"/>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                            <Text>
                            //Your text here
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
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