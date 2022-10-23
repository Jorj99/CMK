import {StyleSheet} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../../utils';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flexGrow: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: heightPercentageToDP(5),
    paddingRight: heightPercentageToDP(5),
  },
  logo: {
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(8),
    width: heightPercentageToDP(10),
    height: heightPercentageToDP(10),
  },
  title: {
    fontSize: heightPercentageToDP(4),
    color: 'black',
    fontWeight: '500',
    margin: 0,
    padding: 0,
  },

  //  INPUTS

  inputFieldEmail: {
    fontSize: 22,
    margin: 0,
    padding: 0,
    paddingLeft: 5,
    width: widthPercentageToDP(80),
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
    color: 'black',
  },
  inputFieldPassword: {
    fontSize: 22,
    margin: 0,
    paddingRight: 30,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    width: widthPercentageToDP(80),
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
    color: 'black',
  },
  emailInputView: {
    marginTop: heightPercentageToDP(5),
  },
  InputText: {
    margin: 0,
    padding: 0,
    marginTop: heightPercentageToDP(5),
    color: '#b4b2c1',
  },
  eyePassword: {
    width: 13,
    height: 13,
  },
  eyeBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    backgroundColor: '#f3f3f3',
    borderRadius: 22,
    position: 'absolute',
    right: 1,
    top: 3,
    zIndex: 5,
  },

  // FORGOT

  forgotPassword: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#b4b2c1',
  },

  // LOGIN

  LoginBtn: {
    width: '100%',
    height: 60,
    backgroundColor: '#3f8cff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: heightPercentageToDP(4),
  },
  LoginBtnText: {
    fontSize: 18,
    color: 'white',
  },

  // REGISTER

  register: {
    marginTop: heightPercentageToDP(4),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newUser: {
    color: '#b4b2c1',
  },
  createAccount: {
    color: '#3f8cff',
    fontWeight: 'bold',
  },
});

export default styles;
