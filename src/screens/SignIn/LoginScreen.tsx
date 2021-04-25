import * as React from 'react';
import { ImageBackground, TouchableOpacity, Image, View, Text } from 'react-native';

import styles from '../../../assets/styles/styles';
import { bgGradiant, logoWhite } from '../../../assets/styles/styles';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={bgGradiant} style={styles.bgImage}>
                <Image source={logoWhite} style={styles.logo} />
                <View style={styles.btnContainerLogin}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FlashCards')}
                        style={[styles.button, styles.btFb]}>
                        <FontAwesome name="facebook" style={styles.icon}>
                            <Text style={styles.buttonText}> Iniciar sesión con Facebook</Text>
                        </FontAwesome>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ShoppingCard')}
                        style={[styles.button, styles.btGg]}>
                        <FontAwesome name="google" style={styles.icon}>
                            <Text style={styles.buttonText}> Iniciar sesión con Google</Text>
                        </FontAwesome>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EmailLogin')}
                        style={[styles.button, styles.btEm]}>
                        <FontAwesome name="envelope" style={[styles.icon, styles.greyText]}>
                            <Text style={[styles.buttonText, styles.greyText]}> Iniciar sesión con Email</Text>
                        </FontAwesome>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}