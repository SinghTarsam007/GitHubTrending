import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { getrepos } from '../redux/action';

const Error = () => {

    const dispatch = useDispatch();
    const netInfo = useNetInfo();

    const reset = () => {
        if (netInfo.isConnected) {
            dispatch(getrepos());
        }
    }

    return (
        <View style={styles.body}>
            <Image source={require('../assets/error.png')} style={{ width: 200, height: 200, marginTop: 100 }} />
            <Text style={styles.header}>Something went wrong...</Text>
            <Text style={styles.text}>An alien is probably blocking your signal</Text>
            <Button title="try Again" onPress={reset} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 20
    },
    text: {
        fontSize: 15,
        margin: 20
    }
});

export default Error;
