import {Dimensions, StyleSheet} from 'react-native';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

export default StyleSheet.create({
  bg: {
    width: w,
    height: h,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currency_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: w / 1.05,
    height: h / 2.25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currency_container_parent: {
    borderWidth: 0.8,
    borderColor: 'white',
    borderRadius: 20,
  },
  buySellHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: w / 2.5,
    marginLeft: w / 4.6,
  },
  buySellText: {
    color: '#D1D1D1',
    fontFamily: 'OpenSans-Bold',
    fontSize: w / 13,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  howMuchIs_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: w / 1.05,
    height: h / 4.8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  howMuchIs_container_parent: {
    borderWidth: 0.8,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 20,
  },
  howMuchIs_text: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: w / 14,

    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  howMuchIs_alt: {
    flexDirection: 'row',
  },
  card_container: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    width: w / 1.1,
    height: h / 16,
    alignItems: 'center',
    borderRadius: w / 20,
    marginBottom: 10,
  },
  card_currencyName_contianer: {
    backgroundColor: 'white',
    height: h / 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: w / 20,
    borderTopLeftRadius: w / 20,
    flexDirection: 'row',
    width: w / 3,
  },
  card_currencyName_Text: {
    color: '#474747',
    fontSize: w / 15,
    fontFamily: 'OpenSans-Bold',
    padding: 10,
  },
  card_currencyData_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 10,
  },
  card_currencyData_text: {
    fontSize: w / 21,
    color: '#4f4f4f',
    fontFamily: 'OpenSans-Medium',
  },
  card_rightArrow_icon: {
    width: w / 15,
    height: h / 25,
  },
  card_rightArrow_container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: h / 16,
    width: w / 8,
    borderTopRightRadius: w / 20,
    borderBottomRightRadius: w / 20,
  },
  card_greenArrow_icon: {
    width: 11,
    height: 16,
  },
  card_upDownArrow_container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
  },
  card_upDown_text: {
    color: 'green',
    fontSize: 11,
    fontFamily: 'OpenSans-Bold',
  },
});
