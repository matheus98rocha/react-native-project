import React from 'react';
import {Text, View} from 'react-native';

import styles from './menu.styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.menuWrapper}>
        <FontAwesome name="home" style={styles.activeIcon} />
        <Text style={styles.textMenu}>Home</Text>
      </View>

      <View style={styles.wrapperMenu}>
        <FontAwesome name="folder" style={styles.icon} />
        <Text style={styles.textMenu}>My Files</Text>
      </View>

      <View style={styles.wrapperMenu}>
        <AntDesign name="pluscircle" style={styles.icon} />
        <Text style={styles.textMenu}>Upload</Text>
      </View>

      <View style={styles.wrapperMenu}>
        <Ionicons name="notifications" style={styles.icon} />
        <Text style={styles.textMenu}>Notifications</Text>
      </View>

      <View style={styles.wrapperMenu}>
        <Ionicons name="person" style={styles.icon} />
        <Text style={styles.textMenu}>Profile</Text>
      </View>
    </View>
  );
};

export default Menu;
