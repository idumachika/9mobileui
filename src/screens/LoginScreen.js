import React from 'react';
import { StyleSheet, Image } from 'react-native';
import HeaderIconsContainer from '../components/HeaderIconsContainer'
import HeaderIconButton from '../components/HeaderIconButton'
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import AuthContainer from '../components/AuthContainer';
import Logo from '../components/Logo'

function LoginScreen({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderIconsContainer>
                    <HeaderIconButton
                    />

                </HeaderIconsContainer>
            ),
            headerLeft: () => (
                <HeaderIconsContainer>
                    <HeaderIconButton
                        name={'keyboard-arrow-left'} />
                </HeaderIconsContainer>

            ),
        });
    }, [navigation]);

    return (
        <AuthContainer>
            <Logo />
            <Input
                style={styles.input}
                placeholder={'Email Address'}
                keyboardType={'email-address'}

            />
            <Input
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry

            />
            <FilledButton
                title={'Next'}
                style={styles.loginButton}
                onPress={() => navigation.navigate("Register")}
            />
            <TextButton
                title={'Change Password'}
                onPress={() => {
                    navigation.navigate('Registration');
                }}
            />
        </AuthContainer>
    );

}

export default LoginScreen

const styles = StyleSheet.create({
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 32,
    },
});
