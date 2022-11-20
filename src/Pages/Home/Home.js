import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Home.style';

import ShortCurrencyCard from '../../components/ShortCurrencyCard';

const Home = ({navigation}) => {
  const [dolar, setDolar] = useState('Dolar');
  const [dolarBuy, setDolarBuy] = useState(15.5172);
  const [dolarSell, setDolarSell] = useState(14.5173);
  const [dolarUpDown, setDolarUpDown] = useState(0.52);

  const [euro, setEuro] = useState('Euro');
  const [euroBuy, setEuroBuy] = useState(15.5174);
  const [euroSell, setEuroSell] = useState(14.5174);
  const [euroUpDown, setEuroUpDown] = useState(0.52);

  const [altin, setAltin] = useState('Altın');
  const [altinBuy, setAltinBuy] = useState(15.5174);
  const [altinSell, setAltinSell] = useState(14.5174);
  const [altinUpDown, setAltinUpDown] = useState(0.52);

  const [sterlin, setSterlin] = useState('Sterlin');
  const [sterlinBuy, setSterlinBuy] = useState(15.5174);
  const [sterlinSell, setSterlinSell] = useState(14.5174);
  const [sterlinUpDown, setSterlinUpDown] = useState(0.52);

  const [btc, setBtc] = useState('BTC');
  const [btcBuy, setBtcBuy] = useState(15.5174);
  const [btcSell, setBtcSell] = useState(14.5174);
  const [btcUpDown, setBtcUpDown] = useState(0.52);

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
        {renderButton(
          currency_name,
          currency_upDown,
          currency_sell,
          currency_buy,
        )}
      </View>
    );
  };

  const renderButton = (
    currency_name,
    currency_upDown,
    currency_sell,
    currency_buy,
  ) => {
    if (navigation == undefined) {
      console.log('yok');
    } else {
      if (currency_name == 'Dolar') {
        return (
          <TouchableOpacity
            style={styles.card_rightArrow_container}
            onPress={() => {
              navigation.navigate('ExchangePage', {
                currency_name,
                currency_upDown,
                currency_sell,
                currency_buy,
              });
            }}>
            <Image
              source={require('../../../assets/rightArrow.png')}
              style={styles.card_rightArrow_icon}
            />
          </TouchableOpacity>
        );
      }
      if (currency_name == 'Euro') {
        return (
          <TouchableOpacity
            style={styles.card_rightArrow_container}
            onPress={() => {
              navigation.navigate('ExchangePage', {
                currency_name,
                currency_upDown,
                currency_sell,
                currency_buy,
              });
            }}>
            <Image
              source={require('../../../assets/rightArrow.png')}
              style={styles.card_rightArrow_icon}
            />
          </TouchableOpacity>
        );
      }
      if (currency_name == 'Altın') {
        return (
          <TouchableOpacity
            style={styles.card_rightArrow_container}
            onPress={() => {
              navigation.navigate('ExchangePage', {
                currency_name,
                currency_upDown,
                currency_sell,
                currency_buy,
              });
            }}>
            <Image
              source={require('../../../assets/rightArrow.png')}
              style={styles.card_rightArrow_icon}
            />
          </TouchableOpacity>
        );
      }
      if (currency_name == 'Sterlin') {
        return (
          <TouchableOpacity
            style={styles.card_rightArrow_container}
            onPress={() => {
              navigation.navigate('ExchangePage', {
                currency_name,
                currency_upDown,
                currency_sell,
                currency_buy,
              });
            }}>
            <Image
              source={require('../../../assets/rightArrow.png')}
              style={styles.card_rightArrow_icon}
            />
          </TouchableOpacity>
        );
      }
      if (currency_name == 'BTC') {
        return (
          <TouchableOpacity
            style={styles.card_rightArrow_container}
            onPress={() => {
              navigation.navigate('ExchangePage', {
                currency_name,
                currency_upDown,
                currency_sell,
                currency_buy,
              });
            }}>
            <Image
              source={require('../../../assets/rightArrow.png')}
              style={styles.card_rightArrow_icon}
            />
          </TouchableOpacity>
        );
      }
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/bg.jpg')}
        style={styles.bg}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container}>
          <View style={styles.currency_container_parent}>
            <View style={styles.currency_container}>
              <View style={styles.buySellHeader}>
                <Text style={styles.buySellText}>Alış</Text>
                <Text style={styles.buySellText}>Satış</Text>
              </View>
              <CurrencyCard
                currency_name={dolar}
                currency_buy={dolarBuy}
                currency_sell={dolarSell}
                currency_upDown={dolarUpDown}
              />
              <CurrencyCard
                currency_name={euro}
                currency_buy={euroBuy}
                currency_sell={euroSell}
                currency_upDown={euroUpDown}
              />
              <CurrencyCard
                currency_name={altin}
                currency_buy={altinBuy}
                currency_sell={altinSell}
                currency_upDown={altinUpDown}
              />
              <CurrencyCard
                currency_name={sterlin}
                currency_buy={sterlinBuy}
                currency_sell={sterlinSell}
                currency_upDown={sterlinUpDown}
              />
              <CurrencyCard
                currency_name={btc}
                currency_buy={btcBuy}
                currency_sell={btcSell}
                currency_upDown={btcUpDown}
              />
            </View>
          </View>
          <View style={styles.howMuchIs_container_parent}>
            <View style={styles.howMuchIs_container}>
              <Text style={styles.howMuchIs_text}>1000 TL KAÇ STERLİN ?</Text>
              <View style={styles.howMuchIs_alt}>
                <View>
                  <ShortCurrencyCard
                    currency_name={'Dolar'}
                    howMuchIs_data={'1.1254'}
                    howMuchIs_dataType={'USD'}
                  />
                  <ShortCurrencyCard
                    currency_name={'Euro'}
                    howMuchIs_data={'16.8978'}
                    howMuchIs_dataType={'EUR'}
                  />
                </View>
                <View>
                  <ShortCurrencyCard
                    currency_name={'Altın'}
                    howMuchIs_data={'1.89'}
                    howMuchIs_dataType={'ALTIN'}
                  />
                  <ShortCurrencyCard
                    currency_name={'Sterlin'}
                    howMuchIs_data={'11.8978'}
                    howMuchIs_dataType={'GBP'}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
