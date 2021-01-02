import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from './Icons';



class AccordionView extends Component {
    state = {
        isSelected: false,
    };

    onPress = () => {
        this.setState((prevState, prevProps) => ({
            isSelected: !prevState.isSelected
        }))
    }

    renderDetails = () => {
        return (
            <View>
                <Text style={styles.description}>We will only have access to:</Text>
                <Text style={styles.description}>Full Name</Text>
                <Text style={styles.description}>Phone Number</Text>
                <Text style={styles.description}>Date of Birth</Text>



            </View>
        )

    }





    render() {
        const { isSelected } = this.state
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View style={styles.titleContainer}>
                        <Icon.FontAwesome name="lock" size={30} color="#663399" />
                        <Text style={styles.title}>Why we need your BVN</Text>
                        {
                            isSelected ?
                                <Icon.MaterialIcons name="keyboard-arrow-down" size={30} color="#663399" /> :
                                <Icon.MaterialIcons name="keyboard-arrow-right" size={30} color="#663399" />
                        }

                    </View>
                </TouchableWithoutFeedback>

                {isSelected && this.renderDetails()}

            </View>



        );
    }
}
export default AccordionView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 5

    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16

    },
    description: {
        fontSize: 15,
        color: 'black',
        // textAlign: 'center',
        padding: 10,
        // paddingTop: 10,
    },
    image: {
        width: 20,
        height: 20

    },
    title: {
        fontSize: 18,
        color: '#663399',
        fontWeight: 'bold'


    }

});