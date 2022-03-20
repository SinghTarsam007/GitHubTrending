import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorDotsLoader, TextLoader } from 'react-native-indicator';
import { useDispatch } from 'react-redux';
import { getrepos, setLoader } from '../redux/action';

const Loader = () => {

    const dispatch = useDispatch();
    const netInfo = useNetInfo();

    useEffect(() => {
        if (netInfo.isConnected) {
            dispatch(getrepos());
        }
        else {
            const timer = setTimeout(() => dispatch(setLoader()),
                5000
            );
            return () => clearTimeout(timer);
        }
    });

    return (
        <View style={styles.body}>
            <ColorDotsLoader size={40} betweenSpace={15} color2={'blue'} />
            <TextLoader text={'Loading'} textStyle={styles.text} />
        </View>

    )
}

export default Loader;

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        marginTop: 250
    },
    text: {
        fontSize: 40,
        color: '#000000',
        marginTop: 20
    }
})

