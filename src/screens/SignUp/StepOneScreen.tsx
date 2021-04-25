import * as React from 'react';
import { Image, TouchableOpacity, ImageBackground, Text, View } from 'react-native';

import styles from '../../assets/styles/styles';
import { bgGradiant } from '../../assets/images/image';
import { arrowWhiteLeft, candidatura, checkOrange, empleo } from '../../assets/icons/icon';

export default function RegisterScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={bgGradiant} style={styles.bgImage}>
                <View style={styles.navContainer}>
                    <TouchableOpacity style={styles.btnArrow} onPress={() => navigation.goBack(null)}>
                        <Image source={arrowWhiteLeft}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.navText, styles.navTextTopOne, styles.navTextLeftThree]}> ¿Qué desea hacer? </Text>
                    <TouchableOpacity style={styles.btnCheck}>
                        <Image source={checkOrange} style={styles.btnCheckIcon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ borderRadius: 10, padding: 10, height: "40%", marginTop: 80, backgroundColor: "transparent" }}>
                    <TouchableOpacity style={styles.btnBody}>
                        <View style={styles.imageContainer}>
                            <Image source={candidatura}></Image>
                        </View>
                        <Text style={styles.textBody}> Candidatura </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderRadius: 10, padding: 10, height: "40%", marginTop: 20, backgroundColor: "transparent" }}>
                    <TouchableOpacity style={styles.btnBody}
                        onPress={() => navigation.navigate('Location')}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={empleo}></Image>
                        </View>
                        <Text style={styles.textBody}> Publicar Empleo </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
