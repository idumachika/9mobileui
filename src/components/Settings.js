import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import Icon from './Icons'

const Setting = ({ title, action, sound, dark, showSound }) => {
    return (
        <TouchableOpacity onPress={action} style={{
            backgroundColor: '#fefff2', flexDirection: 'row-reverse', alignItems: 'center', borderBottomColor: dark ? 'rgba(0, 0, 0, 0.12)' : null, borderBottomWidth: dark ? 1 : null,
            justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20
        }}>
            {showSound ?
                <Switch
                    trackColor={{ false: "#00696b", true: "#1FDE00" }}
                    thumbColor="#FFF"
                    ios_backgroundColor="#4A6EBC"
                    value={sound}
                    onValueChange={action}
                />
                :
                <Icon.MaterialIcons name="keyboard-arrow-right" size={24} color={"rgba(66, 82, 110, 0.87)"} />}
            <View style={{ flex: 1 }}>
                {
                    title == "Touch ID" ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon.MaterialIcons name="fingerprint" size={24} color={"rgba(0, 0, 0, 0.6)"} />
                            <Text style={{
                                color: 'rgba(0, 0, 0, 0.6)', fontSize: 20
                            }}>{title}</Text>
                        </View> :
                        <Text style={{
                            color: 'rgba(66, 82, 110, 0.87)', fontSize: 16
                        }}>{title}</Text>
                }

            </View>
        </TouchableOpacity>
    )
}

export default Setting