import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../../components/CardItem';
import Filters from '../../components/Filters';
import { demo } from '../../assets/data/cards';
import styles from '../../assets/styles/styles';
import { bgGradiant } from '../../assets/images/image';

export default function FlashCardsScreen(this: any, props: any) {


    return (
        <View style={styles.container}>
            <ImageBackground source={bgGradiant} style={styles.bgImage}>
                <View style={styles.cardContainer}>
                    <View style={styles.top}>
                        <Text style={[styles.topText, styles.whiteFont]}>FLash Candidatura</Text>
                        <Filters route="FlashFilter" props={props} />
                    </View>
                    <CardStack
                        loop={true}
                        verticalSwipe={false}
                        renderNoMoreCards={() => null}
                        ref={swiper => (this.swiper = swiper) || null}
                    >
                        {demo.map((item, index) => (
                            <Card key={index}>
                                <CardItem
                                    name={item.name}
                                    age={item.age}
                                    distance={item.distance}
                                    profession={item.profession}
                                    url={item.url}
                                    index={index}
                                    actions
                                    onPressLeft={() => this.swiper.swipeLeft()}
                                    onPressRight={() => this.swiper.swipeRight()}
                                    route={["FlashCandidateProfile", "ListOffers"]}
                                    props={props}
                                    isCard
                                />
                            </Card>
                        ))}
                    </CardStack>
                </View>
            </ImageBackground>
        </View>
    );
}