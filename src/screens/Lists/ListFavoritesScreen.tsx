import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from '../../assets/styles/styles';
import { arrowBlackLeft, arrowBlackRight } from '../../assets/icons/icon';

import ListItem from '../../components/ListItem';

export default function ListFavoritesScreen({ navigation }) {
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.navigate('ListOffers')}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOneM]}> Favoritos </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => navigation.navigate('ListCandidate')}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={[styles.scrollContainer, styles.marginTopMore]}>
                <ListItem isSearchBar={true} isDemo listType={2}></ListItem>
            </SafeAreaView>
        </View>
    );
}
