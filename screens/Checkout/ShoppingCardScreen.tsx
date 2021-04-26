import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, TextInput, Text, View } from 'react-native';
import styles from '../../assets/styles/styles';
import { arrowBlackLeft } from '../../assets/icons/icon';

import ListItem from '../../components/ListItem';

export default function ShoppingCardScreen({ navigation }) {
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.goBack(null)}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOneM]}> Forma de Pago </Text>
            </View>
            <SafeAreaView style={[styles.scrollContainer, styles.marginTopMore]}>
                <ListItem isSearchBar={false} isDemo listType={3}></ListItem>
                <View style={styles.rightContainer}>
                    <View style={styles.sameLine}>
                        <Text>Candidatos</Text>
                        <TextInput value="5"></TextInput>
                    </View>
                    <View style={styles.sameLine}>
                        <Text>Total</Text>
                        <TextInput value="7.50Є"></TextInput>
                    </View>
                </View>
                <View style={styles.btnContainerThree}>
                    <TouchableOpacity style={styles.btnCrear} onPress={() => navigation.navigate('WayToPay')}>
                        <Text style={styles.textCrear}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}