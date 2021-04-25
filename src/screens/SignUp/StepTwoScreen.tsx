import * as React from 'react';
import { Image, TouchableOpacity, ImageBackground, Text, View } from 'react-native';

import styles from '../../assets/styles/styles';
import { bgGradiant, geoMap } from '../../assets/images/image';
import { arrowWhiteLeft, checkGreen } from '../../assets/icons/icon';

export default function LocationScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={bgGradiant} style={styles.bgImage}>
                <View style={styles.navContainer}>
                    <TouchableOpacity style={styles.btnArrow}
                        onPress={() => navigation.goBack(null)}
                    >
                        <Image source={arrowWhiteLeft}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.navText, styles.navTextLeftThree, styles.navTextTopOne]}> Habilitar Ubicación </Text>
                    <TouchableOpacity style={styles.btnCheck}>
                        <Image source={checkGreen} style={[styles.btnCheckIcon]}></Image>
                    </TouchableOpacity>
                </View>
                <View style={[styles.imageContainerTwo, styles.extraMarginTop]}>
                    <Image source={geoMap}></Image>
                </View>
                <View style={styles.btnContainerTwo}>
                    <TouchableOpacity style={styles.btnPermitir} onPress={() => navigation.navigate('Terms')}>
                        <Text style={[styles.textPermitir, styles.redFont]}>Permitir Locación</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}