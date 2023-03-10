import React, {memo, useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GoToButton} from '../go-button/go-button';
import {ModalUser} from '../modal-user/modal-user';

import styles from './header.styles';

const Header = ({userName}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalUser
        isOpen={isOpen}
        handleIsOpen={() => setIsOpen(true)}
        handleClickOverlay={() => setIsOpen(false)}
      />
      <View style={styles.wrapper}>
        <View style={styles.iconsWrapper}>
          <FontAwesome
            name="user-circle"
            style={styles.icon}
            onPress={() => setIsOpen(true)}
          />
        </View>
        <View style={styles.welcomeMessage}>
          <Text style={styles.textWelcome}>Hello!</Text>
          <Text style={styles.textWelcome}>{userName}</Text>
          <Text style={styles.subTitle}>Let's manage your cloud storage</Text>
        </View>
      </View>
    </>
  );
};

export default memo(Header);
