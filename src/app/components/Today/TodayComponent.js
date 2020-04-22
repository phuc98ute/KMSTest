import React, { useState, useEffect } from 'react';
import { View, Text, Alert, AsyncStorage, RefreshControl } from 'react-native';
import axios from 'axios';
import { Tab, Tabs, TabHeading, Spinner, Content, Toast } from 'native-base';
import { SharedStyle } from '../../styles/SharedStyle';
import StatusBar from '../ShareComponent/Statusbar/StatusBar';
import { ListNews } from '../ShareComponent/ListNew/ListNews';

var parseString = require('react-native-xml2js').parseString;

export function TodayScreen({ navigation }) {
    const [dataListNews, setDataListNews] = useState();
    const [refreshing, setRefreshing] = useState(false);

    const handlerRefresh = (() => {
        let arrayLinkRSS = [];
        getAsyncStoreage().then((listWebRSS) => {
            console.log(listWebRSS);
            listWebRSS.map((listRSS) => {
                listRSS.item.map((RSS) => {
                    arrayLinkRSS.push(RSS.link);
                })
            })
            callAxios(arrayLinkRSS).then((data) => {
                setDataListNews(data);
            })
        })
            setTimeout(function () {
                Toast.show({
                    text: 'Đã cập nhật!',
                    buttonText: 'Okay'
                  });
                setRefreshing(false);
            }, 1000);
    })

    useEffect(() => {
        let arrayLinkRSS = [];
        initListWebRss()
        getAsyncStoreage().then((listWebRSS) => {
            listWebRSS.map((listRSS) => {
                listRSS.item.map((RSS) => {
                    arrayLinkRSS.push(RSS.link);
                })
            })
            callAxios(arrayLinkRSS).then((data) => {
                setDataListNews(data);
            })
        })
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar ScreenName="Tin mới" />
            <View style={SharedStyle.container}>
                <Tabs style={{ backgroundColor: '#ffffff' }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#ffffff' }}><Text>Me</Text></TabHeading>}>
                        {
                            dataListNews != undefined ?
                                <Content
                                    refreshControl={<RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={() => {
                                            setRefreshing(true),
                                            handlerRefresh();
                                        }} />
                                    }>
                                    <ListNews listNews={dataListNews} navigation={navigation} />
                                </Content> : <Spinner></Spinner>
                        }
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#ffffff' }}><Text>Explore</Text></TabHeading>}>
                        <Text> Tab 2 </Text>
                    </Tab>
                </Tabs>
            </View>
        </View>
    )
}

async function initListWebRss() {
    let listWebRSS = [
        {
            name: 'VNExpress',
            item: [
                { title: 'Trang chủ', id: 'trangchu', link: 'https://vnexpress.net/rss/tin-moi-nhat.rss' },
            ],
            id: 'vnexpress'
        },
        {
            name: 'Tuổi trẻ', item: [
                { title: 'Trang chủ', id: 'trangchu', link: 'https://tuoitre.vn/rss/tin-moi-nhat.rss' },
            ],
            id: 'tuoitre'
        },
    ];
    await AsyncStorage.setItem('listWebRss', JSON.stringify(listWebRSS));
}

async function getAsyncStoreage() {
    return JSON.parse(await AsyncStorage.getItem('listWebRss'));
}

async function callAxios(arrayLink) {
    let resultGetAxios = [];
    for (const link of arrayLink) {
        await getAxios(link).then((listNews) => {
            resultGetAxios = [...listNews, ...resultGetAxios];
        })
    }
    return resultGetAxios;
}

async function getAxios(link) {
    let listNews;
    await axios
        .get(link)
        .then((dataResult) => {
            if (dataResult.data != undefined) {
                parseString(dataResult.data, function (err, result) {
                    listNews = result.rss.channel[0].item;
                });
            }
        });
    return listNews;
}