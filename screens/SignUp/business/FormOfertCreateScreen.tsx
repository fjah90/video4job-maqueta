import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Dimensions, Text, View } from 'react-native';
import Dialog from "react-native-dialog";

import styles, { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../assets/styles/styles';
import { arrowBlackLeft } from '../../../assets/icons/icon';


import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import { data } from '../../../assets/data/dropdown';

import MultiSlider from '@ptomasroos/react-native-multi-slider'

export default function OfertCreateScreen({ navigation }) {
    const slideWidth = Dimensions.get('window').width - (Dimensions.get('window').width * 0.15);

    const [visible, setVisible] = React.useState(false);

    const [multiSliderDistanceValue, setMultiSliderDistanceValue] = React.useState([1]);
    const [multiSliderAgeValue, setMultiSliderAgeValue] = React.useState([18, 25]);

    const [valueSec, setValueSec] = React.useState('');
    const [valueCat, setValueCat] = React.useState('');

    const multiSliderDistanceValuesChange = (values: any) => setMultiSliderDistanceValue(values);
    const multiSliderAgeValuesChange = (values: any) => setMultiSliderAgeValue(values);

    const onChangeSec = (value: string) => { setValueSec(value); }
    const onChangeCat = (value: string) => { setValueCat(value); }

    const showDialog = () => { setVisible(true); };

    const handleCancel = () => { setVisible(false); };

    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => navigation.goBack(null)}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftTwo]}> ¿Qué Necesito? </Text>
                <TouchableOpacity style={[styles.btnArrowRight, styles.btnHechoRight]} onPress={() => navigation.navigate('FlashCards')}>
                    <Text style={[styles.btnFont, styles.hechoText]}>Hecho</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollViewTwo}>
                    <View style={[styles.inputContent, styles.first]}>
                        <Text style={[styles.labelInput, styles.NoMgBt]}>Sector</Text>
                        <LinearGradient
                            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
                            start={[0.1, 0.2]}
                            end={[0.7, 0.3]}
                            locations={[0.3, 1]}
                            style={styles.label}>
                            <Text style={styles.labelText}>{data.length}</Text>
                        </LinearGradient>
                        <Dropdown
                            label="Todos los sectores"
                            data={data}
                            enableSearch
                            underlineColor={"transparent"}
                            value={valueSec}
                            onChange={onChangeSec}
                            mainContainerStyle={[styles.select, styles.NoMgTp]}
                            textInputStyle={[styles.selectText]}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={[styles.labelInput, styles.noMarginVertical]}>Categoria</Text>
                        <LinearGradient
                            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
                            start={[0.1, 0.2]}
                            end={[0.7, 0.3]}
                            locations={[0.3, 1]}
                            style={styles.label}>
                            <Text style={styles.labelText}>{data.length}</Text>
                        </LinearGradient>
                        <Dropdown
                            label="Todos los sectores"
                            data={data}
                            enableSearch
                            underlineColor={"transparent"}
                            value={valueCat}
                            onChange={onChangeCat}
                            mainContainerStyle={[styles.select]}
                            textInputStyle={[styles.selectText, styles.noMarginVertical]}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={[styles.labelInput]}>Localización</Text>
                        <TextInput
                            textContentType={"location"}
                            style={styles.Input}
                            autoCapitalize="words"
                            placeholder="Ubicación Actual"
                            onSubmitEditing={() => navigation.navigate('FlashCards')}
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <View style={[styles.slideLabelContent]}>
                            <Text style={[styles.labelInput, styles.noMarginVertical]}>Distancia</Text>
                            <Text style={[styles.labelRigthInput]}>{multiSliderDistanceValue[0]} Km</Text>
                        </View>
                        <Text style={[styles.slideContent]}>
                            <MultiSlider
                                markerStyle={styles.markerStyle}
                                pressedMarkerStyle={styles.pressedMarkerStyle}
                                selectedStyle={styles.selectedStyle}
                                trackStyle={styles.trackStyle}
                                touchDimensions={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 20,
                                    slipDisplacement: 40
                                }}
                                values={[multiSliderDistanceValue[0]]}
                                sliderLength={slideWidth}
                                onValuesChange={multiSliderDistanceValuesChange}
                                min={5}
                                max={50}
                                allowOverlap={false}
                                minMarkerOverlapDistance={10}
                            />
                        </Text>
                    </View>
                    <View style={styles.inputContent}>
                        <View style={[styles.slideLabelContent]}>
                            <Text style={[styles.labelInput, styles.noMarginVertical]}>Edad</Text>
                            <Text style={[styles.labelRigthInput]}>{multiSliderAgeValue[0]} - {multiSliderAgeValue[1]}</Text>
                        </View>
                        <MultiSlider
                            markerStyle={styles.markerStyle}
                            pressedMarkerStyle={styles.pressedMarkerStyle}
                            selectedStyle={styles.selectedStyle}
                            trackStyle={styles.trackStyle}
                            touchDimensions={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                slipDisplacement: 40
                            }}
                            values={[multiSliderAgeValue[0], multiSliderAgeValue[1]]}
                            sliderLength={slideWidth}
                            onValuesChange={multiSliderAgeValuesChange}
                            min={18}
                            max={65}
                            allowOverlap={true}
                            minMarkerOverlapDistance={10}
                        />
                    </View>
                    <View style={styles.btnContainerThree}>
                        <TouchableOpacity style={styles.btnCrear} onPress={showDialog}>
                            <Text style={styles.textCrear}>Crear Puesto</Text>
                        </TouchableOpacity>
                        <Dialog.Container visible={visible}>
                            <Dialog.Title style={styles.title}>Crear Puesto</Dialog.Title>
                            <Dialog.Input style={styles.Input} />
                            <Dialog.Button label="Hecho" style={styles.hechoTextPromt} onPress={handleCancel} />
                        </Dialog.Container>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}