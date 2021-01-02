import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icons';

import { useTheme } from '@react-navigation/native';

export function IconButton({ name, style, onPress }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon.MaterialIcons name={name} color={"#663399"} size={30} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
});
