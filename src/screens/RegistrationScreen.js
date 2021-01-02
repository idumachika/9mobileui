import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import HeaderIconsContainer from '../components/HeaderIconsContainer'
import HeaderIconButton from '../components/HeaderIconButton'


export default function RegistrationScreen({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderIconsContainer>
                    <HeaderIconButton
                    // name={'keyboard-arrow-left'}
                    // onPress={() => {
                    //     // switchTheme();
                    // }}
                    />

                </HeaderIconsContainer>
            ),
            headerLeft: () => (
                <HeaderIconsContainer>

                    <HeaderIconButton
                        name={'keyboard-arrow-left'}
                    // onPress={() => this.props.navigation.navigate.goBack()}
                    />
                </HeaderIconsContainer>

            ),
        });
    }, [navigation]);


    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', }}>
                    Start
                </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>Open a Kuda account with a few details
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: 15, }}>Your password must have at least 8 characters including letters and a number</Text>

            </View>

            <Input
                style={styles.input}
                placeholder={'Email Address'}
                keyboardType={'email-address'} />
            <Input
                style={styles.input}
                placeholder={' Enter Password'}
                secureTextEntry />

            <Input
                style={styles.input}
                placeholder={'Re-Enter Password'}
                secureTextEntry />
            <Input
                style={styles.input}
                placeholder={'Referral Code(Optional)'}
                secureTextEntry />

            <Text style={{
                color: "#000", textAlign: 'center', paddingHorizontal: 20
            }}>For information on what we do with your data, please read our </Text>
            <Text style={{ textAlign: 'center', fontSize: 15, color: "green" }}>
                Privacy Notice
            </Text>

            <FilledButton
                title={'Continue'}
                style={styles.loginButton}
                onPress={() => navigation.navigate("BvnVerification")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 20,
        // alignItems: 'center',
        backgroundColor: "#fff"
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
