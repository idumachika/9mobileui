import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '../components/Icons';
import LinearGradient from 'react-native-linear-gradient';


class TopBar extends React.Component {

    render() {
        return (
            <LinearGradient colors={[
                '#b4c403',
                '#006848',
                '#006848',

            ]} style={{
                flexDirection: 'row', alignItems: 'center', height: 56,
            }}>
                <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{ paddingRight: 20 }}>
                    <Icon.MaterialIcons name={"keyboard-arrow-left"} color={'#fff'} size={40} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff' }}>{this.props.text}</Text>

            </LinearGradient>
        )
    }
}

export default TopBar