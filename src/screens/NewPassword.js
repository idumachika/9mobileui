import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TopBar from '../components/TopBar'



export default class NewPassword extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar text="Create new password" />
                <View style={styles.InputContainer}>
                    <Input
                        style={styles.input}
                        placeholder={'New Password'}
                        secureTextEntry />
                    <Input
                        style={styles.input}
                        placeholder={'Confirm Password'}
                        secureTextEntry />

                    <FilledButton
                        title={'CONFIRM'}
                        style={styles.loginButton}
                        onPress={() => this.props.navigation.navigate("Pinlogin")}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fefff2"
    },
    InputContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        alignItems: 'center',
    },
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 10,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
