import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const CardCustom = (props) => {
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image style={styles.image} source={{'uri': props.image}}/>
                {/* { props.children} */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 1, height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: '10%',
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    image: {
        width: '100%', 
        aspectRatio: 1,
    }
});

export default CardCustom;