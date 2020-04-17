import React from 'react';
import { View, Text } from 'react-native';
import { Content, Left, Body, Right, Button, List, ListItem, Thumbnail } from 'native-base';

const image_url='https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/85128936_2122269877918941_7893333794722152448_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_oc=AQkJlPkbrdedfFMECxjVzM9qwEdKHCdweicpqp5ks4zvDQZ4n_v-9FTLWBirGRRWLWcGL6I7eF603LvaQtCv-1JL&_nc_ht=scontent.fsgn5-4.fna&oh=a137fa13aece60e2e7922ddf97c87871&oe=5EBCEA5F';

import { CustomListItem }  from './ListItem';

export function ListNews(props) {
    // console.log('set Listnews');
    // const []
    const renderlist = props.ListNews.map(function(item){
        return <CustomListItem name={item} content='Lorium content .......' image={image_url}/>;
    })
    
    return (
        <Content>
            <List>
                {renderlist}
            </List>
        </Content>
    )
}