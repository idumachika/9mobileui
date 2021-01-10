import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from './Icons'
import Modal from 'react-native-modal';




class NewPin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passcode: ['', '', '', '']
        }
    }

    _onPressNumber = num => {
        console.log('tag', this.state.passcode)
        let tempCode = this.state.passcode;
        for (var i = 0; i < tempCode.length; i++) {
            if (tempCode[i] == '') {
                tempCode[i] = num;
                break
            } else {
                continue
            }
        }
        this.setState({ passcode: tempCode }, () => console.log('this is passcode', this.state.passcode))
    }

    _onPressCancel = () => {
        let tempCode = this.state.passcode;
        for (var i = tempCode.length - 1; i >= 0; i--) {
            if (tempCode[i] != '') {
                tempCode[i] = '';
                break
            } else {
                continue
            }

        }
        this.setState({ passcode: tempCode })

    }


    render() {
        let numbers = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 0 },
        ]
        return (
            <Modal isVisible={this.props.isVisible} >

                <LinearGradient colors={[
                    '#b4c403',
                    '#006848',
                    '#006848']} style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity onPress={this.props.onPress} style={{}}>
                            <Icon.MaterialIcons name={"close"} color={'#fff'} size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.swipe}>
                        <View style={{ marginTop: 75 }}>
                            <View>
                                <Text style={styles.passcodeText}>Enter your PIN</Text>
                            </View>
                            <View style={styles.codeContainer}>
                                {
                                    this.state.passcode.map(p => {
                                        let style = p != '' ? styles.code2 : styles.code1
                                        return (
                                            <View style={{
                                                borderWidth: 1, borderColor: p != '' ? "#b4c403" : "#ffffff", borderRadius: 5, height: 48, width: 48, alignItems: 'center', justifyContent: 'center', margin: 15
                                            }}>
                                                <View style={style}></View>
                                            </View>
                                        )

                                    })
                                }
                            </View>

                        </View>

                    </View>


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.numberContainer}>
                            {
                                numbers.map(num => {
                                    return (

                                        <TouchableOpacity style={styles.number} key={num.id} onPress={() => this._onPressNumber(num.id)}>
                                            <Text style={styles.numberText}>{num.id}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            <TouchableOpacity style={{ position: 'absolute', right: 45, bottom: 15 }} onPress={() => this._onPressCancel()}>
                                <Icon.MaterialIcons name="backspace" color={'#ffffff'} size={24} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </LinearGradient>

            </Modal>




        );

    }

}

export default NewPin



const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },

    swipe: {
        height: 173,
        alignItems: 'center',
        justifyContent: 'center'
    },
    passcodeText: {
        fontSize: 24,
        color: "#FFFFFF",
        letterSpacing: -0.41,
        lineHeight: 22,
        textAlign: "center"

    },
    code1: {
        width: 13,
        height: 13,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    code2: {
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: '#b4c403'
    },

    codeContainer: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    number: {
        width: 75,
        height: 75,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    numberContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        width: 282,
        height: 348,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: 36,
        color: "#ffffff",
        letterSpacing: 0,
        textAlign: 'center'

    },
    buttons: {
        marginTop: 73,
        marginLeft: 46,
        marginRight: 46,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        // fontSize: 36,
        color: "#ffffff",
        letterSpacing: 0,
        textAlign: 'center'
    }





});
