import React, {useState} from 'react';

import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../../styles/global.styles';

import Header from '../../components/header/header';
import CardContainer from '../../components/card-container/card-container';
import SearchInput from '../../components/search-input/search-input';

export function Home() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <View style={globalStyles.container}>
        <Header userName={'Matheus Rocha'} />
        <SearchInput handleSetSearchValue={setSearchValue} />
        <CardContainer sortCards={searchValue} />
      </View>
    </>
  );
}
