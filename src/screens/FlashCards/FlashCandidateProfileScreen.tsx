import * as React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '../../assets/styles/styles';
import { arrowBlackLeft, arrowBlackRight } from '../../assets/icons/icon';
import CardItem from '../../components/CardItem';

export default function FlashCandidateProfileScreen(this: any, props:any, { navigation }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [shouldShow, setShouldShow] = React.useState(true);
    return (
        <View style={[styles.container, styles.bgWhite]}>
            <View style={styles.navContainerTwo}>
                <TouchableOpacity style={styles.btnArrowLeft} onPress={() => props.navigation.navigate('FlashCards')}>
                    <Image source={arrowBlackLeft} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
                <Text style={[styles.navText, styles.blackFont, styles.navTextLeftTwoM]}> Alex Main, 23 </Text>
                <TouchableOpacity style={styles.btnArrowRight} onPress={() => props.navigation.goBack(null)}>
                    <Image source={arrowBlackRight} style={[styles.btnFont]}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollViewTwo}>
                    <CardItem
                        name={"item.name"}
                        age={1}
                        distance={2}
                        profession={"item.profession"}
                        url={"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
                        index={1}
                        actions
                        onPressLeft={() => this.swiper.swipeLeft()}
                        onPressRight={() => this.swiper.swipeRight()}
                        route={false}
                        props={props}
                        isCard={false}
                    />
                    <View>
                        <View>
                            <Text>Alex Main </Text>
                            <Text>
                                6km - Barcelona - Cocinero
                            </Text>
                        </View>
                        <View>
                            <Text>Sobre mi</Text>
                        </View>
                        <Text>My name is Mary Burgess and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading, and the knowledge ...</Text>
                        <View>
                            <Text>Experiencia</Text>

                            <Text>Empresa:</Text>
                            <Text>Restaurante</Text>
                            <Text>Ciudad:</Text>
                            <Text>Barcelona</Text>
                            <Text>Categoria:</Text>
                            <Text>Cocinero</Text>
                            <Text>Fecha:</Text>
                            <Text>25-Dic-2013 a 23-Dic-2014</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
