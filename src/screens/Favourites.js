import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { useSelector } from "react-redux";
import CustomFlatlist from "../utils/CustomFlatList";

export default function Favourites({ navigation }) {

    const { favourites } = useSelector(state => state.userReducer);

    return (
        <View>
            {
                favourites.length > 0 ?
                    <FlatList style={styles.body}
                        data={favourites}
                        renderItem={({ item }) =>
                            <CustomFlatlist item={item} />
                        } />
                    :
                    <View style={styles.empty}>
                        <Image source={require('../assets/empty.jpg')} style={{ height: 300, width: 300, marginTop: 100 }} />
                        <Text style={styles.text}>Nothing in Favourites !</Text>
                        <Text>Add some repositories to favourites List</Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ffff'
    },
    empty: {
        alignItems: 'center',
        height: 1000,
        backgroundColor: '#EDFDFF'
    },
    text: {
        margin: 20,
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold'
    }
})