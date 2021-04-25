import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, Text, View  } from 'react-native';
import { arrowBlackLeft, arrowBlackRight } from '../../assets/icons/icon';
import styles from '../../assets/styles/styles';
import ListItem from '../../components/ListItem';

export default function ListOffersScreen({ navigation }) {
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.navigate('FlashCards')}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftTwoM]}> Ofertas Generadas </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => navigation.navigate('ListFavorites')}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={[styles.scrollContainer, styles.marginTopMore]}>
                <ListItem isSearchBar={false} isDemo listType={1}></ListItem>
            </SafeAreaView>
        </View>
    );
}