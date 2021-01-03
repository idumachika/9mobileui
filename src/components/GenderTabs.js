import React from 'react'
import { TouchableOpacity, Text, View } from "react-native";

const TabButton = ({ active, title, onPress }) => {
    const style = {
        button: {
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: 'gray',
            backgroundColor: active ? "#00FF99" : "#B8BCB8",
        },
        text: {
            color: active ? "#000" : "gray",
            textAlign: 'center',
            fontSize: 20
        },
    };
    return (
        <View>
            <TouchableOpacity style={{ ...style.button, margin: 15 }} onPress={onPress}>
            </TouchableOpacity>
            <Text style={style.text}>{title}</Text>
        </View>

    );
};
export {
    TabButton
}