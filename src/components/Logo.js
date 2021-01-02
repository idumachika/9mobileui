import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{
                    width: 60, height: 60, resizeMode: 'contain'
                }}
                    source={require('../assets/image/kudaLogo.png')} />
                <Text style={styles.logoText}>Hey There!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 20,
        color: "#000",
        fontWeight: "bold"


    }
});