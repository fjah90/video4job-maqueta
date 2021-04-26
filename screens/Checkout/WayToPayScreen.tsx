import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import { SelectMultipleButton } from 'react-native-selectmultiple-button'
import styles from '../../assets/styles/styles';
import { arrowBlackLeft } from '../../assets/icons/icon';

import { paypal, visaMastercard, wireTransfer } from '../../assets/images/image';

export default function WayToPayScreen({ navigation }) {
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.goBack(null)}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOneM]}> Resumen de Candidatos </Text>
            </View>
            <SafeAreaView style={[styles.scrollContainer, styles.marginTopMore]}>
                {/* <SelectMultipleButton
                    buttonViewStyle={{
                        borderRadius: 10,

                        height: 40
                    }}
                    textStyle={{
                        fontSize: 15
                    }}
                    highLightStyle={{
                        borderColor: "gray",

                        backgroundColor: "transparent",

                        textColor: "gray",

                        // borderTintColor: ios_blue,

                        // backgroundTintColor: ios_blue,

                        textTintColor: "white"
                    }}
                    multiple={true}
                    value={interest}
                    selected={this.state.multipleSelectedData.includes(interest)}
                    singleTap={valueTap => this._singleTapMultipleSelectedButtons(interest)}
                />; */}
                <View style={styles.inputContentLogin}>
                    <TouchableOpacity style={[styles.button, styles.btEm]}>
                        <Text style={[styles.buttonText, styles.greyText]}>Tarjeta Credito/Debito</Text>
                        <Image source={visaMastercard} style={[styles.btnFont]}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.btEm]}>
                        <Text style={[styles.buttonText, styles.greyText]}>Paypal</Text>
                        <Image source={paypal} style={[styles.btnFont]}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.btEm]}>
                        <Text style={[styles.buttonText, styles.greyText]}>Transferencia Bancaria</Text>
                        <Image source={wireTransfer} style={[styles.btnFont]}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainerThree}>
                    <TouchableOpacity style={styles.btnCrear} onPress={() => navigation.navigate('Success')}>
                        <Text style={styles.textCrear}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}