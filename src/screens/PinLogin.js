import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilledButton from '../components/FilledButton';
import HeaderIconsContainer from '../components/HeaderIconsContainer';
import HeaderIconButton from '../components/HeaderIconButton';
import PinInput from '../components/PinKeyPad'




export default function BvnVerificationScreen({ navigation }) {
    const [activeTab, setActiveTab] = React.useState('male')
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date('2020-06-12T14:42:42'));





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
                        onPress={() => navigation.navigate("SelectGender")}
                    />
                </HeaderIconsContainer>

            ),
        });
    }, [navigation]);



    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', }}>
                    Confirm Your BVN
                </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>
                    We sent a code to the phone number linked to your BVN. if you don't use that phone number anymore, skip this step
                </Text>
            </View>
            <View style={styles.input}>
                <Text style={{ textAlign: "center" }}>Please, type in the code we sent you</Text>
                <PinInput />

            </View>



            <FilledButton
                title={'Continue'}
                style={styles.loginButton}
                onPress={() => navigation.navigate("")}
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

    input: {
        marginVertical: 10,
    },
    loginButton: {
        // marginVertical: 100,
        // position: 'relative'
    },
    genderCircleContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    genderCircle: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'gray',
    },
    inputStyle: {
        width: '100%',
        height: 60,
        padding: 20,
        borderRadius: 5,
        color: '#000',
        backgroundColor: "#F1F2F1"
    },

    title: {
        textAlign: "center",
        fontSize: 20
    }



});
