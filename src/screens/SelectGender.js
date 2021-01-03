import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FilledButton from '../components/FilledButton';
import HeaderIconsContainer from '../components/HeaderIconsContainer'
import HeaderIconButton from '../components/HeaderIconButton'
import { TabButton } from '../components/GenderTabs';
import DateTimePicker from '@react-native-community/datetimepicker';




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
                    />

                </HeaderIconsContainer>
            ),
            headerLeft: () => (
                <HeaderIconsContainer>

                    <HeaderIconButton
                        name={'keyboard-arrow-left'}
                        onPress={() => navigation.navigate("BvnVerification")}
                    />
                </HeaderIconsContainer>

            ),
        });
    }, [navigation]);

    const switchToMale = () => {
        setActiveTab("male")
    }
    const switchToFemale = () => {
        setActiveTab("female")

    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const formatDate = (date, time) => {
        return `${date.getDate()}/${date.getMonth() +
            1}/${date.getFullYear()}`;
    };

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', }}>
                    A Bit More About You
                </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>We'll love to know u better
                </Text>
            </View>
            <View style={styles.genderCircleContainer}>
                <TabButton title="Male" active={activeTab === 'male'} onPress={switchToMale} />
                <TabButton title="Female" active={activeTab === 'female'} onPress={switchToFemale} />
            </View>
            <View style={styles.input}>
                <TouchableOpacity onPress={showDatepicker} style={styles.inputStyle}>
                    <Text style={styles.title}>{formatDate(date)}</Text>
                </TouchableOpacity>
                {show && (
                    <React.Fragment>
                        <DateTimePicker
                            value={date}
                            minimumDate={Date.parse(new Date())}
                            display='default'
                            mode={mode}
                            onChange={onChange}
                        />

                    </React.Fragment>
                )}

            </View>



            <FilledButton
                title={'Continue'}
                style={styles.loginButton}
                onPress={() => navigation.navigate("Pinlogin")}
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
