import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Card from './card/card';
import styles from './card-container.styles';

const CardContainer = ({sortCards}) => {
  const [selectedCard, setSelectedCard] = useState('');

  let cardItens = [
    {
      cardName: 'Photos',
      qtdItens: '2,451',
      lastUpdate: '24 hours ago',
      cardColor: '#002db3',
      handleSelectCard: () => memorizedSelectedCardName('Photos'),
    },
    {
      cardName: 'Songs',
      qtdItens: '245',
      lastUpdate: '12 hours ago',
      cardColor: '#e28743',
      handleSelectCard: () => memorizedSelectedCardName('Photos'),
    },
    {
      cardName: 'Videos',
      qtdItens: '54',
      lastUpdate: '2 days ago',
      cardColor: '#34a1eb',
      handleSelectCard: () => memorizedSelectedCardName('Photos'),
    },
    {
      cardName: 'Documents',
      qtdItens: '841',
      lastUpdate: '1 day ago',
      cardColor: '#f53666',
      handleSelectCard: () => memorizedSelectedCardName('Photos'),
    },
  ];

  const memorizedSelectedCardName = useCallback(
    name => {
      setSelectedCard(name);
    },
    [selectedCard],
  );

  const handleSortCard = useMemo(() => {
    const sortedArray = sortCards
      ? [
          ...cardItens.filter(item => item.cardName === sortCards),
          ...cardItens.filter(item => item.cardName !== sortCards),
          ,
        ]
      : cardItens;

    return sortedArray;
  }, [sortCards]);

  useEffect(() => {}, [sortCards]);

  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      numColumns={2}
      data={handleSortCard}
      renderItem={({item}) => (
        <Card
          itemName={item.cardName}
          cardColor={item.cardColor}
          lastUpdate={item.lastUpdate}
          qtdItens={item.qtdItens}
          handleSelectCard={item.handleSelectCard}
        />
      )}
      keyExtractor={item => item.cardName}
    />
  );
};

export default CardContainer;
