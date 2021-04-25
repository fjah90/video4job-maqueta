import React from 'react';
import styles from '../assets/styles/styles';

import { TouchableOpacity, Image } from 'react-native';
import { filterLines } from '../assets/icons/icon';


const Filters = ({
  route,
  props
}) => {
  return (
    <TouchableOpacity style={styles.filters} onPress={() => props.navigation.navigate(route)}>
        <Image source={filterLines} style={styles.filtersImg}/>
    </TouchableOpacity>
  );
};

export default Filters;
