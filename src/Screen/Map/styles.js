import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
    elevation: 6,
  },
  Button_Conatiner: {
    width: wp(100),
    height: hp(7),
    marginTop: 50,
    // marginBottom: 22,
    // backgroundColor: 'red',
    // justifyContent:'center',
    // alignSelf: 'center',
  },
  linearGradient: {
    width: wp(45),
    height: hp(7),
    // marginHorizontal: hp(3.5),
    alignSelf: 'center',
    backgroundColor: '#293C74',
    // padding: 17,
    marginLeft: 200,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    marginTop: hp(2.1),
    // backgroundColor: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  Map_container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    marginHorizontal: 10,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 140,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default styles;
