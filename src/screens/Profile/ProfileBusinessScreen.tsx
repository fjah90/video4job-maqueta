import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';

import styles from '../../assets/styles/styles';
import { arrowBlackLeft, arrowBlackRight } from '../../assets/icons/icon';

export default function ProfileBusinessScreen({ navigation }) {

    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.goBack(null)}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOne]}> Empresa </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => navigation.navigate('FlashCards')}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollViewTwo}>
                    <Text>Pefil Empresa</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
