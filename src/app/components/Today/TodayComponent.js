import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { SharedStyle } from '../../styles/SharedStyle';
// import { Container, Text } from 'native-base';
import StatusBar from '../ShareComponent/Statusbar/StatusBar';
import { ListNews} from '../ShareComponent/ListNew/ListNews';
import { Content, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, TabHeading, List, ListItem, Thumbnail } from 'native-base';

export function TodayScreen() {

    const [listnew,setListnew] = useState();
    // const newlists=['name test1', 'test 2'];
    // setListnew(newlists);
    useEffect(()=>{
    //    getData();
    })

    // getData = () => {
    //     setListnew(['test1'])
    // };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar ScreenName="Tin mới"/>
            <View style={SharedStyle.container}>
                <Tabs style={{backgroundColor:'#ffffff'}}>
                    <Tab heading={<TabHeading style={{backgroundColor:'#ffffff'}}><Icon name="camera" /><Text>Me</Text></TabHeading>}>
                        <ListNews ListNews={['Test1 render','Test2', 'Test 3']} />
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'#ffffff'}}><Text>Explore</Text></TabHeading>}>
                        <Text> Tab 2 </Text>
                    </Tab>
                </Tabs>
            </View>
        </View>

    )
}