import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Loader = () => {
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
        fontSize: 40,
        color: '#000000'
    }
})
 
