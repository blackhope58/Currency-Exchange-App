import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Exchange.style';

const Exchange = ({route}) => {
  const CurrencyCard = ({
    currency_name,
    currency_upDown,
    currency_sell,
    currency_buy,
  }) => {
    return (
      <View style={styles.card_container}>
        <View style={styles.card_currencyName_contianer}>
          <Text style={styles.card_currencyName_Text}>{currency_name}</Text>
          <View style={styles.card_upDownArrow_container}>
            <Image
              source={require('../../../assets/greenArrow.png')}
              style={styles.card_greenArrow_icon}
            />
            <Text style={styles.card_upDown_text}>{currency_upDown}</Text>
          </View>
        </View>
        <View style={styles.card_currencyData_container}>
          <Text style={styles.card_currencyData_text}>{currency_buy}</Text>
          <Text style={styles.card_currencyData_text}>{currency_sell}</Text>
        </View>
      </View>
    );
  };

  const [currencyData, setCurrenyData] = useState('1');
  const [turkishLira, setTurkishLira] = useState(
    route.params.currency_sell + '',
  );

  function exchangeCurrency() {
    setTurkishLira(currencyData * route.params.currency_sell + '');
  }

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/bg.jpg')}
        style={styles.bg}>
        <View style={styles.container}>
          <View style={styles.currency_container_parent}>
            <View style={styles.currency_container}>
              <View style={styles.buySellHeader}>
                <Text style={styles.buySellText}>Alış</Text>
                <Text style={[styles.buySellText, {paddingLeft: 40}]}>
                  Satış
                </Text>
              </View>
              <CurrencyCard
                currency_name={route.params.currency_name}
                currency_buy={route.params.currency_buy}
                currency_sell={route.params.currency_sell}
                currency_upDown={route.params.currency_upDown}
              />
            </View>
          </View>
          <View style={styles.exchange_container}>
            <View style={styles.exchange_container_parent}>
              <View style={styles.exchange_currency_container}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Image
                    source={require('../../../assets/pen.png')}
                    style={styles.pen}
                  />
                  <TextInput
                    style={styles.exchange_textInput}
                    keyboardType={'numeric'}
                    textAlign={'center'}
                    value={currencyData}
                    onChangeText={setCurrenyData}
                  />
                </View>
                <View style={styles.currencyType_container}>
                  <Text style={styles.currencyType}>USD</Text>
                </View>
              </View>
              <TouchableOpacity onPress={exchangeCurrency}>
                <Image
                  source={require('../../../assets/exchange.png')}
                  style={styles.exchange_ımage}
                />
              </TouchableOpacity>
              <View style={styles.exchange_currency_container}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Image
                    source={require('../../../assets/pen.png')}
                    style={styles.pen}
                  />
                  <TextInput
                    style={styles.exchange_textInput}
                    keyboardType={'numeric'}
                    textAlign={'center'}
                    value={turkishLira}
                    onChangeText={setTurkishLira}
                  />
                </View>
                <View style={styles.currencyType_container}>
                  <Text style={styles.currencyType}>TRY</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Exchange;
