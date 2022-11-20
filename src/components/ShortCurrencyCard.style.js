import {Dimensions, StyleSheet} from 'react-native';

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    borderRadius: w / 30,
    margin: 7,
    alignItems: 'center',
    width: w / 2.25,
    justifyContent: 'flex-start',
  },
  currency_name: {
    color: 'black',
    fontFamily: 'OpenSans-Bold',
    fontSize: w / 23,
    paddingLeft: 8,
  },
  howMuchIs_data: {
    fontSize: w / 25,
    fontFamily: 'OpenSans-Medium',
    color: '#4f4f4f',
  },
  howMuchIs_dataType: {
    fontFamily: 'OpenSans-Bold',
    color: '#4f4f4f',
  },
  currencyName_container: {
    backgroundColor: 'white',
    width: w / 6,
    height: h / 19,
    borderTopLeftRadius: w / 30,
    borderBottomLeftRadius: w / 30,
    justifyContent: 'center',
  },
  data_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 5,
  },
});
