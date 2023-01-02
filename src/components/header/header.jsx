import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './header.styles';

const Header = ({userName}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconsWrapper}>
        <Text>
          <Icon name="menu" style={styles.icon} />
        </Text>
        <Text>
          <FontAwesome name="user-circle" style={styles.icon} />
        </Text>
      </View>
      <View style={styles.welcomeMessage}>
        <Text style={styles.textWelcome}>Hello!</Text>
        <Text style={styles.textWelcome}>{userName}</Text>
        <Text style={styles.subTitle}>Let's manage your cloud storage</Text>
      </View>
    </View>
  );
};

export default Header;
