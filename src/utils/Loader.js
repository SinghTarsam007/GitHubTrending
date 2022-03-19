import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
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
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
            <Text style={styles.text}>Loading...</Text>
        </AnimatedLoader>
    )
}

export default Loader;

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 30,
        color: '#000000'
    }
})

