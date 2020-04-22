import React, { useEffect, useState } from 'react';
import { View, Text, RefreshControl, AlertIOS } from 'react-native';
import { Content, Spinner, List } from 'native-base';
import { CustomListItem } from './ListItem';

const image_url = 'https://dankhang.vn/wp-content/uploads/2019/11/Logo-VNE-_Converted_-1.jpg';

export function ListNews(props) {
    const [refreshing, setRefreshing] = useState(false);
    var renderlist;

    const alert2 = (() => {
        console.log('refreshing '),
            setTimeout(function () {
                alert('Đã cập nhật!');
                setRefreshing(false);
            }, 1000);
    })

    if (props.listNews != undefined) {
        renderlist = props.listNews.map(function (item) {
            return <CustomListItem navigation={props.navigation} item={item} image={image_url} />;
        })
    }

    return (
        <Content
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                    setRefreshing(true),
                        alert2();
                }} />
            }
        >
            <List>
                {renderlist}
            </List>
        </Content>
    )
}


