import React from 'react';
import {Alert, Animated, Modal, SafeAreaView, Text} from 'react-native';
import modalUserStyles from './modal-user.styles';

export function ModalUser({isOpen, handleIsOpen}) {
  return (
    <Modal transparent visible={isOpen}>
      <Animated.View
        style={modalUserStyles.wrapper}
        onTouchStart={() => handleIsOpen(false)}>
        <Text>Dados Cadastrais</Text>
        <Text>Segurança</Text>
        <Text>Avalie o app</Text>
        <Text>Regras de conduta e atuação</Text>
      </Animated.View>
    </Modal>
  );
}
