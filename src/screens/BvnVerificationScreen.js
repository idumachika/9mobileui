import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import AccordionView from '../components/BvnCollapsible';
import HeaderIconsContainer from '../components/HeaderIconsContainer'
import HeaderIconButton from '../components/HeaderIconButton'


const data = [
    {
        title: 'Why we need your BVN',
        description: 'We will only have access to:',
        name: 'Full name',
        phone: "Phone number",
        birth: "Date of Birth"
    },

];

export default function BvnVerificationScreen({ navigation }) {



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
                        onPress={() => navigation.navigate("Register")}
                    />
                </HeaderIconsContainer>

            ),
        });
    }, [navigation]);


    const renderItem = () => <AccordionView />


    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', }}>
                    What's Your BVN
                </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>We need your Bank Verification Number(BVN) to confirm who you are.
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: 16, }}>We will send a code to the phone number linked to your BVN.if you do not have access to that phone number, skip this step</Text>

            </View>

            <Input
                style={styles.input}
                placeholder={'22351237364'}
                keyboardType={'email-address'} />

            <View style={styles.ExpandableCard}>
                <FlatList data={data}
                    renderItem={renderItem}
                    keyExtractor={(index, _) => index + ''}
                />

            </View>
            <View style={{ padding: 10, }}>
                <Text style={{ color: "green", textAlign: 'center', fontWeight: "bold" }}>Skip this step</Text>
            </View>
            <FilledButton
                title={'Continue'}
                style={styles.loginButton}
                onPress={() => navigation.navigate("SelectGender")}
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
    ExpandableCard: {
        // flex: 1,
        backgroundColor: 'white',
    },
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 10,
    },
    loginButton: {
        // marginVertical: 100,
        position: 'relative'
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
