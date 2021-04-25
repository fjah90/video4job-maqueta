import React from 'react';
import styles from '../assets/styles/styles';

import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { like, dislike, superlike, arrowRewinds, play } from '../assets/icons/icon';

const CardItem = ({
  actions,
  name,
  age,
  distance,
  profession,
  url,
  onPressLeft,
  onPressRight,
  index,
  route,
  props,
  isCard
}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [shouldShow, setShouldShow] = React.useState(true);
  return (
    <View style={isCard ? [styles.containerCardItem] : [styles.videoCardItem, styles.videoCardItemMod]}>
      {/* VIDEO */}
      <View style={isCard ? [styles.videoCardItem] : [styles.videoCardItem, styles.videoCardItemMod]}>
        <Video
          ref={video}
          style={isCard ? [styles.videoStyle] : [styles.videoStyle, styles.videoCardItemMod]}
          source={{ uri: url }}
          useNativeControls={false}
          // useNativeControls
          resizeMode="cover"
          isLooping={false}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        {shouldShow ? (
          <View style={isCard ? [styles.btnPlayAbsolute] : [styles.btnPlayAbsolute, styles.videoCardItemMod]}>
            <TouchableOpacity
              style={isCard ? [styles.buttonTin, styles.btnPlayAbsolute] : [styles.buttonTin, styles.btnPlayAbsolute, styles.videoCardItemMod]}
              onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() && setShouldShow(!shouldShow)
              }>
              <Image source={play} />

            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {/* ACTIONS AND DATA*/}
      {actions && isCard && distance && profession && route &&(
        <>
          <View style={[styles.actionsCardItem, styles.lessTopCardItem]}>
            <TouchableOpacity style={styles.miniButton}>
              <Image source={arrowRewinds} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTin} onPress={() => onPressLeft()}>
              <Image source={dislike} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTin} onPress={() => onPressRight()}>
              <Image source={like} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.miniButton} onPress={() => props.navigation.navigate(route[1])}>
              <Image source={superlike} />
            </TouchableOpacity>
          </View>

          <View style={[styles.infoCardItem, styles.lessTopCardItem]}>
            <TouchableOpacity onPress={() => props.navigation.navigate(route[0])}>
              <Text style={styles.nameStyle}>{name}, {age}</Text>
              <Text style={styles.descriptionCardItem}>{distance}Km - {profession}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CardItem;
