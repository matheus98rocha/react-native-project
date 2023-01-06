import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ModalUser} from '../modal-user/modal-user';

import styles from './header.styles';

const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

const Header = ({userName}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalUser isOpen={isOpen} handleIsOpen={setIsOpen} />
      <View style={styles.wrapper}>
        <View style={styles.iconsWrapper}>
          <Icon
            name="menu"
            style={styles.icon}
            onPress={() => showAlert()}
          />
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

export default Header;
