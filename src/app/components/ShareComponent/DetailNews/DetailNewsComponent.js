import React, {useEffect, useState} from 'react';
import { View, Text, Image, Dimensions, AsyncStorage } from 'react-native';
import { SharedStyle } from '../../../styles/SharedStyle';
import StatusBar from '../Statusbar/StatusBar';
import HTML from 'react-native-render-html';
import axios from 'axios';
import { WebView } from 'react-native-webview';

export function DetailNewsComponent(props) {
    const [htmlWeb,setHtmlWeb] = useState();
    var RSS= props.route.params.item;

    return (
        <View style={{flex:1}}>
            <StatusBar ScreenName={RSS.title[0]}/>
            <WebView source={{ uri: RSS.link[0] }} />
        </View>
    )
}