import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, Text, View  } from 'react-native';

import styles from '../../assets/styles/styles';
import { arrowBlackLeft, arrowBlackRight} from '../../assets/icons/icon';

import ListItem from '../../components/ListItem';

export default function ListCandidateScreen({ navigation }) {
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.navigate('ListFavorites')}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOneM]}> Candidatos </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => navigation.navigate('ProfileBusiness')}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={[styles.scrollContainer, styles.marginTopMore]}>
                <ListItem isSearchBar={true} isDemo listType={0}></ListItem>
            </SafeAreaView>
        </View>
    );
}
