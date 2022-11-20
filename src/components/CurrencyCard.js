import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './CurrencyCard.style';

const CurrencyCard = ({
  currency_name,
  currency_buy,
  currency_sell,
  currency_upDown,
  navigation,
}) => {
  const renderButton = () => {
    if (navigation == undefined) {
      console.log('yok');
    } else {
      return (
        <TouchableOpacity
          style={styles.card_rightArrow_container}
          onPress={navigation}>
          <Image
            source={require('../../assets/rightArrow.png')}
            style={styles.card_rightArrow_icon}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.card_container}>
      <View style={styles.card_currencyName_contianer}>
        <Text style={styles.card_currencyName_Text}>{currency_name}</Text>
        <View style={styles.card_upDownArrow_container}>
          <Image
            source={require('../../assets/greenArrow.png')}
            style={styles.card_greenArrow_icon}
          />
          <Text style={styles.card_upDown_text}>{currency_upDown}</Text>
        </View>
      </View>
      <View style={styles.card_currencyData_container}>
        <Text style={styles.card_currencyData_text}>{currency_buy}</Text>
        <Text style={styles.card_currencyData_text}>{currency_sell}</Text>
      </View>
      {renderButton()}
    </View>
  );
};

export default CurrencyCard;
