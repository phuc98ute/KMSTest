import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableHighlight, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import { SharedStyle } from '../../styles/SharedStyle';
import StatusBar from '../ShareComponent/Statusbar/StatusBar';
import { Content, Header, Item, Input, Left, Right, Button, Icon, List, ListItem,  Label } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

async function getListWebRss(){
    return await AsyncStorage.getItem('listWebRss'); 
}

export function AddContentScreen() {
    const [listSite, setListSite] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [itemModal, setItemModal] = useState();
    const [newRssName, setNewRssName] = useState();
    const [newRssLink, setNewRssLink] = useState();
    const [newRssId, setNewRssId] = useState();
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getListWebRss().then((data)=>{
            let listWebRss = JSON.parse(data);
            setListSite(listWebRss);
        })
    }, [])

    const renderListRss = (item) => {
        if (item != undefined) {
            return (
                <View style={{ width: (Dimensions.get('window').width) * 0.7 }}>
                    <Label>Tên trang mới: </Label>
                    <TextInput placeholder="Nhập tên trang"
                        onChangeText={text => setNewRssName(text)}
                    ></TextInput>
                    <Label>Id trang mới: </Label>
                    <TextInput placeholder="Nhập id trang"
                        onChangeText={text => setNewRssId(text)}
                    ></TextInput>
                    <Label>Link RSS</Label>
                    <TextInput placeholder='Nhập link'
                        onChangeText={text => setNewRssLink(text)}
                    ></TextInput>
                </View>
            )
        }
        else {
            return (
                <View style={{ width: (Dimensions.get('window').width) * 0.7 }}>
                    <Label>Thêm trang nội dụng</Label>
                    <TextInput placeholder="Nhập tên báo"
                        onChangeText={text => setNewRssName(text)}
                    ></TextInput>
                    <Label>Key work</Label>
                    <TextInput placeholder='Nhập link'
                        onChangeText={text => setNewRssLink(text)}
                    ></TextInput>
                </View>

            )
        }

    }

    const handlerModal = (async() => {
        if (itemModal === undefined) {
            let tempListSite = listSite;
            if (newRssName != undefined)
                tempListSite = [{ name: newRssName, item: [] }, ...tempListSite];
            setListSite(tempListSite);
            AsyncStorage.setItem('listWebRss', JSON.stringify(listSite));
            setReload(!reload);
        }
        else {
            if (newRssName != undefined && newRssLink != undefined) {
                let tempListSite = listSite;
                let resultList = tempListSite.map((item) => {
                    if (item.name == itemModal.name) {
                        item.item = [{ title: newRssName, link: newRssLink, id: newRssId }, ...item.item]
                    }
                    return item;
                })
                setListSite(resultList);
                await AsyncStorage.setItem('listWebRss', JSON.stringify(listSite));
                console.log('Add Asyncstore thanh cong')
                setReload(!reload);
            }
        }
        setItemModal(undefined);
        setNewRssId(undefined);
        setNewRssLink(undefined);
        setNewRssName(undefined)
        setModalVisible(!modalVisible);
    })

    const loadListWebRSS = () => {
        if (listSite != undefined) {
            const contentTest = listSite.map((listWeb) => {
                if (listWeb != undefined) {
                    const component = listWeb.item.map((RSS) => {
                        return (
                            <ListItem>
                                <TouchableOpacity onPress={() => { alert('Click') }}>
                                    <Text>{RSS.title}: </Text>
                                    <TextInput defaultValue={RSS.link}></TextInput>
                                </TouchableOpacity>
                            </ListItem>
                        )
                    })
                    return (
                        <List >
                            <ListItem itemHeader first itemDivider
                                onPress={() => {
                                    setItemModal(listWeb);
                                    setModalVisible(true);

                                }}
                            >
                                <Left>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{listWeb.name}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            {component}
                        </List>
                    )
                }
            })
            return contentTest;
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {console.log('call render')}
            <StatusBar ScreenName="Thêm nội dung" />
            <View>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent onPress={() => {  }}>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Button style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true)
                    }}>
                    <Text style={styles.textStyle}>Thêm nội dung RSS</Text>
                </Button>
            </View>
            <Content>
                {loadListWebRSS()}
            </Content>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {renderListRss(itemModal)}
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                handlerModal();
                            }}
                        >
                            <Text style={styles.textStyle}>Lưu</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: (Dimensions.get('window').width) / 2,
        alignItems: 'center',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});