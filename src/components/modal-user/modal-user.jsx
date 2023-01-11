import React from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import modalUserStyles from './modal-user.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const showAlert = () =>
  Alert.alert('Exit?', 'Are you sure you want to exit?', [
    {
      text: 'Close',
      onPress: () => BackHandler.exitApp(),
      style: 'default',
    },
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);

export function ModalUser({isOpen, handleIsOpen, handleClickOverlay}) {
  const itens = [
    {
      label: 'Exit',
      icon: (
        <MaterialCommunityIcons
          name="exit-to-app"
          style={modalUserStyles.menuItenLabel}
        />
      ),
      function: showAlert,
    },
  ];

  return (
    <Modal
      transparent
      visible={isOpen}
      onTouchStart={handleIsOpen}
      animationType={'fade'}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleClickOverlay}
        style={modalUserStyles.modalOverlay}>
        <Animated.View style={modalUserStyles.wrapper}>
          <FlatList
            data={itens}
            renderItem={({item}) => (
              <TouchableOpacity
                style={modalUserStyles.menuIten}
                onPress={item.function}>
                <Text style={modalUserStyles.menuItenLabel}>{item.label}</Text>
                <Text> {item.icon} </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.label}
          />
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}
