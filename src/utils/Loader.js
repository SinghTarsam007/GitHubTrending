import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import { useDispatch } from 'react-redux';
import { setLoader } from '../redux/action';

const Loader = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => dispatch(setLoader()),
            10000
        );
        return () => clearTimeout(timer);
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

