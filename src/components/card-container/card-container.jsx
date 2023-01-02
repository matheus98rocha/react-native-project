import React from 'react';
import {View} from 'react-native';
import Card from './card/card';
import styles from './card-container.styles';

const CardContainer = () => {
  return (
    <View style={styles.wrapper}>
      <Card
        itemName={'Photos'}
        qtdItens={'2,451'}
        lastUpdate={'24 hours ago'}
        cardColor={'#002db3'}
      />
      <Card
        itemName={'Songs'}
        qtdItens={'245'}
        lastUpdate={'12 hours ago'}
        cardColor={'#e28743'}
      />
      <Card
        itemName={'Videos'}
        qtdItens={'54'}
        lastUpdate={'2 days ago'}
        cardColor={'#34a1eb'}
      />
      <Card
        itemName={'Documents'}
        qtdItens={'841'}
        lastUpdate={'1 day ago'}
        cardColor={'#f53666'}
      />
    </View>
  );
};

export default CardContainer;
