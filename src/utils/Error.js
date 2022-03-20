import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { getrepos, resetRepos } from '../redux/action';

const Error = () => {

    const dispatch = useDispatch();
    const netInfo = useNetInfo();

    const reset = () => {
        if (netInfo.isConnected) {
            dispatch(resetRepos());
            dispatch(getrepos());
        }
        else{
            Alert.alert('Warning', 'No internet connection!');
        }
    }

    return (
        <View style={styles.body}>
            <Image source={require('../assets/error.png')} style={{ width: 300, height: 300, marginTop: 100 }} />
            <Text style={styles.header}>Something went wrong...</Text>
            <Text style={styles.text}>An alien is probably blocking your signal</Text>
            <Pressable style={({ pressed }) => [
                { backgroundColor: pressed ? '#65FB8B' : '#ffffff' },
                styles.button]} onPress={reset}>
                <Text style={styles.bt}>Try again</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: '#EDFEF6',
        height: 1000
    },
    header: {
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 30
    },
    text: {
        fontSize: 15,
        marginBottom: 20,
        marginTop: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor: '#09DF3F',
        borderWidth: 1,
        width: 260
    },
    bt: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Error;
