import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, TextInput, Animated } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from '../../assets/styles/styles';

export default function SuccessScreen({ navigation }) {
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOneM]}> Compra Realizada </Text>
            </View>
            <SafeAreaView style={[styles.scrollContainer, styles.marginTopMore]}>
                <View style={styles.successTextContainer}>
                <Text style={styles.successText}>
                        Su compra ha sido realizada con éxito.
                        Se ha enviado un correo electrónico con su correspondiente factura.
                        Numero del Pedido: V-544
                    </Text>
                </View>
                <View style={styles.btnContainerThree}>
                    <TouchableOpacity style={styles.btnCrear} onPress={() => navigation.navigate('ListCandidate')}>
                        <Text style={styles.textCrear}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}