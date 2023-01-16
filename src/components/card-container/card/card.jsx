import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './card.styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Card = ({
  itemName,
  qtdItens,
  lastUpdate,
  cardColor,
  handleSelectCard,
}) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: cardColor}]}
      onPress={handleSelectCard}
      >
      <View style={styles.headerCard}>
        <Entypo name="folder" style={styles.icon} />
        <Entypo name="dots-three-vertical" style={styles.iconDots} />
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.qtdItens}>{qtdItens}</Text>
      </View>
      <Text style={styles.footerCard}>Last update {lastUpdate}</Text>
    </TouchableOpacity>
  );
};

export default Card;
