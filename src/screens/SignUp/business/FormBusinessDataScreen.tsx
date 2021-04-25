import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Text, View } from 'react-native';

import styles from '../../../assets/styles/styles';
import { arrowBlackLeft, arrowBlackRight } from '../../../assets/icons/icon';


export default function BusinessDataScreen({ navigation }) {
    const [organizationName, onChangeTextON] = React.useState('');
    const [streetAddressLine1, onChangeTextSA] = React.useState('');

    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.goBack(null)}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftOne]}> Empresa </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => navigation.navigate('OfertCreate')}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollViewTwo}>
                    <View style={[styles.inputContent, styles.first]}>
                        <Text style={styles.labelInput}>Nombre Fiscal</Text>
                        <TextInput
                            textContentType={"organizationName"}
                            style={styles.Input}
                            autoCapitalize="words"
                            placeholder="Restaurante I"
                            autoFocus={true}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            onChangeText={onChangeTextON}
                            value={organizationName}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={styles.labelInput}>Domicilio</Text>
                        <TextInput
                            textContentType={"streetAddressLine1"}
                            dataDetectorTypes="address"
                            style={styles.Input}
                            autoCapitalize="words"
                            placeholder="Avenue Street"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            onChangeText={onChangeTextSA}
                            value={streetAddressLine1}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={styles.labelInput}>Teléfono</Text>
                        <TextInput
                            textContentType={"telephoneNumber"}
                            dataDetectorTypes="phoneNumber"
                            keyboardType="phone-pad"
                            style={styles.Input}
                            placeholder="+376 555 555 555"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={styles.labelInput}>NIF / CIF</Text>
                        <TextInput
                            textContentType={"none"}
                            style={styles.Input}
                            autoCapitalize="words"
                            placeholder="B123456789"
                            returnKeyType="next"
                            blurOnSubmit={false} />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={styles.labelInput}>Correo Electrónico</Text>
                        <TextInput
                            textContentType={"emailAddress"}
                            keyboardType="email-address"
                            style={styles.Input}
                            placeholder="Restaurante1@gmail.com"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={[styles.labelInput, styles.last]}>Localización</Text>
                        <TextInput
                            textContentType={"location"}
                            style={[styles.Input, styles.last]}
                            autoCapitalize="words"
                            placeholder="Ubicación Actual"
                            onSubmitEditing={() => navigation.navigate('OfertCreate')}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}