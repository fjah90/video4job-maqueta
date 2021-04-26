import * as React from 'react';
import { ImageBackground, TouchableOpacity, Image, TextInput, View, Text } from 'react-native';

import styles from '../../assets/styles/styles';
import { bgGradiant, logoWhite } from '../../assets/images/image';


export default function EmailLoginScreen({ navigation }) {
    const [password] = React.useState('');
    return (
        <View style={styles.container}>
            <ImageBackground source={bgGradiant} style={styles.bgImage}>
                <Image source={logoWhite} style={styles.logo}></Image>
                <View style={styles.btnContainerLogin}>
                    <View style={styles.inputContentLogin}>
                        <TextInput
                            textContentType={"emailAddress"}
                            keyboardType="email-address"
                            style={styles.Input}
                            placeholder="Correo Electrónico"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.inputContentLogin}>
                        <TextInput
                            secureTextEntry
                            textContentType={"password"}
                            autoCompleteType={"password"}
                            keyboardType="email-address"
                            style={styles.Input}
                            placeholder="Contraseña"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={[styles.button, styles.btEm, styles.moreMarginTopBtn]}>
                        <Text style={[styles.buttonText, styles.greyText, styles.newBtnTextS]}> Iniciar sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={[styles.btnRegister, styles.lessMarginTopBtn]}>
                        <Text style={[styles.buttonText, styles.whiteFont, styles.newBtnTextS]}> Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
