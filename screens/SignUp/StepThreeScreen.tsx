import * as React from 'react';
import { Image, TouchableOpacity, ScrollView, SafeAreaView, Text, View  } from 'react-native';

import styles, { PRIMARY_COLOR, SECONDARY_COLOR } from '../../assets/styles/styles';
import { logoGrey } from '../../assets/images/image';
import { LinearGradient } from 'expo-linear-gradient';

export default function TermsScreen({ navigation }) {

    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={[styles.imageContainerTwo, styles.lessMarginTop]}>
                <Image source={logoGrey} width={300}></Image>
            </View>
            <View style={styles.textContainerH2}>
                <Text style={styles.textH2}>Te damos la bienvenida a Video<Text style={styles.textBlue}>4</Text>Job.</Text>
            </View>
            <SafeAreaView style={styles.textContainer}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.textScroll}>
                        {/* text de terminos y condiciones */}
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnPermitirTwo} onPress={() => navigation.navigate('BusinessData')}>
                    <LinearGradient
                        colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
                        start={[0.1, 0.2]}
                        end={[0.7, 0.3]}
                        locations={[0.3, 1]}
                        style={styles.btnPermitirTwo}>
                        <Text style={[styles.textPermitir, styles.whiteFont]}>Acepto</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}