import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, ScrollView, Text, View } from 'react-native';

import styles from '../../assets/styles/styles';
import { arrowBlackLeft, arrowBlackRight } from '../../assets/icons/icon';

export default function MyShopListScreen({ navigation: { navigate } }) {

    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigate.goBack(null)}
                >
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOne]}> Empresa </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => navigate.goBack(null)}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollViewTwo}>
                    <Text>LIsta de Compras de Empresa</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
