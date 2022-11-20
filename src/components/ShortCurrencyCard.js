import {Text, View} from 'react-native';
import React from 'react';
import styles from './ShortCurrencyCard.style';

const ShortCurrencyCard = ({
  currency_name,
  howMuchIs_data,
  howMuchIs_dataType,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.currencyName_container}>
        <Text style={styles.currency_name}>{currency_name}</Text>
      </View>
      <View style={styles.data_container}>
        <Text style={styles.howMuchIs_data}>{howMuchIs_data}</Text>
        <Text style={styles.howMuchIs_dataType}>{howMuchIs_dataType}</Text>
      </View>
    </View>
  );
};

export default ShortCurrencyCard;
