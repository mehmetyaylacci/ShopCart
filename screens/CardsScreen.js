import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }];

const CardsScreen = () => {
    return(
        <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider/>
        {
            users.map((u, i) => {
                return (
                    <View>
                    <Image
                        resizeMode="cover"
                        source={{ uri: u.avatar }}
                    />
                    <Text> {u.name} </Text>
                    </View>
                );
            })
        }
    </Card>
);
};

export default CardsScreen;