import React, { } from 'react';
import { View, Text, StyleSheet, StatusBar, Switch, Dimensions, Image } from 'react-native'
import Icon from '../components/Icons'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';

const barWidth = Dimensions.get("screen").width / 1.2;

const Layout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
}

const Colors = {
    theme: "#018786",
    white: "#fff",
    greyish: "#a4a4a4"
}

const dashboardData = [
    { product: "Product Sold", quantity: 50 },
    { product: "Total Sales", quantity: "N25,234" },
    { product: "Earnings", quantity: "N25,234" }
]

const dashboardItem = [
    {
        item: "Airtime",
        Icon: <Icon.Feather name={'smartphone'} size={25} color={'#b4c403'} />
    },
    {
        item: "E-Pin",
        Icon: <Image source={require('../assets/image/fiber_pin_24px.png')} />
    },
    {
        item: "Data",
        Icon: <Icon.Ionicons name={'ios-wifi-outline'} size={25} color={'#018786'} />

    },
    {
        item: "H-Pin",
        Icon: <Icon.MaterialCommunityIcons name={'qrcode-scan'} size={25} color={'#018786'} />

    }
]



export default class More extends React.Component {

    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            language: 'java',
        };
    }


    render() {

        return (
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle="light-content"
                    backgroundColor={Colors.theme}
                />
                <LinearGradient
                    colors={[
                        '#d5e806',
                        '#006e52',
                        '#006e52',
                        '#006e52',
                        '#006e52'

                    ]} style={styles.content}>
                    <View
                        style={{
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'

                        }}

                    >
                        <Icon.MaterialIcons name="menu" color={"#b4c403"} size={30} />

                        <Text style={{ color: "#fff", fontSize: 18 }}>Hi Chika,</Text>
                        <Icon.MaterialIcons name="notifications" color={"#b4c403"} size={24} />

                    </View>
                </LinearGradient>

                <View style={styles.card}>
                    <View style={styles.Greetings}>
                        <Text style={{ textAlign: "center", fontSize: 16, color: '#000000' }}>Good Evening</Text>
                    </View>
                    <View style={styles.pickerBoxContainer}>
                        <View style={styles.pickerBoxInner}>
                            <Icon.MaterialIcons style={styles.refreshIcon} name={'refresh'} />
                            <Picker
                                selectedValue={this.state.language}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })

                                }
                                style={styles.pickerStyle}
                            >
                                <Picker.Item label="08119399569" value="java" />
                            </Picker>

                            <Icon.MaterialIcons
                                name="arrow-drop-down"
                                size={20}
                                style={styles.pickerBoxIcon}
                            />

                        </View>


                    </View>

                    <View style={styles.productContainer}>
                        {
                            dashboardData.map((user) => (
                                <View style={styles.productContent}>
                                    <Text style={{ color: "#172b4d", fontSize: 16 }}>{user.quantity}</Text>
                                    <Text style={{ color: "#7a869a", fontSize: 12 }}>{user.product}</Text>
                                </View>
                            ))

                        }

                    </View>


                </View>
                <View style={{ flex: 1, margin: 15 }}>
                    <Text style={{
                        color: "rgba(66, 82, 110, 0.87)",
                        fontSize: 20,
                        letterSpacing: 0.15
                    }}>Quick Sale</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        {

                            dashboardItem.map((user) => (

                                <View style={{ justifyContent: "center", alignItems: "center" }}>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.cardTab}>
                                        {user.Icon}
                                    </TouchableOpacity>

                                    <Text style={{ color: "#172b4d", fontSize: 12 }}>{user.item}</Text>



                                </View>



                            ))

                        }




                    </View>
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
    content: {
        backgroundColor: Colors.theme,
        paddingBottom: Layout.height * 0.13,

    },
    cardTab: {
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 8,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    card: {
        backgroundColor: Colors.white,
        marginHorizontal: 15,
        borderRadius: 15,
        elevation: 8,
        marginBottom: 16,
        marginTop: -Layout.height * 0.12
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 30,
        marginHorizontal: 15
    },
    // picker box style
    pickerBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        marginTop: 10,
    },
    pickerBoxInner: {
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        height: 43,
        backgroundColor: 'rgba(150, 204, 127, 0.35)'
    },
    pickerBoxIcon: {
        position: 'absolute',
        right: 22,
        fontSize: 25,
        color: '#b4c403',
    },
    pickerStyle: {
        width: '500%',
        transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }],
        left: -0,
        position: 'absolute',
        color: '#00696b',
        fontSize: 18,
    },
    refreshIcon: {
        position: 'absolute',
        left: 22,
        color: "#b4c403",
        fontSize: 25,

    },
    Greetings: {
        marginTop: 10
    },

    productContent: {
        backgroundColor: "#f4f5f7",
        justifyContent: "center",
        borderRadius: 15,
        alignItems: 'center',
        width: 110,
        height: 70,
        marginBottom: 16
    }
})










