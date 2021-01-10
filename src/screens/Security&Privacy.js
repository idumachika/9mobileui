import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar';
import Setting from '../components/Settings'
import PinModal from '../components/Pin'





export default class SecuriyPrivacy extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }
    toggleModal = () => {
        this.setState({ isVisible: true })
    }

    HideModal = () => {
        this.setState({ isVisible: false })

    }

    render() {
        const { isVisible } = this.state
        return (

            <View style={styles.container}>
                <TopBar text="Securiy & Privacy" />
                <Setting
                    title="Touch ID"
                    action={this.props.sound ? () => this.props.toggleSound(false) : () => this.props.toggleSound(true)}
                    sound={this.props.sound}
                    showSound
                />
                <Setting
                    title="Create new password"
                    action={this._onShare}
                    dark
                />
                <Setting
                    title="Create new pin"
                    action={() => this.toggleModal()}
                    dark
                />

                <PinModal isVisible={isVisible} onPress={() => this.HideModal()} />


            </View>

        );

    }




}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fefff2"
    },





});
