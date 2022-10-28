import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';
import {heightPercentageToDP, widthPercentageToDP} from '@utils';

const styles = StyleSheet.create({
  title: {
    fontSize: heightPercentageToDP(4),
    color: COLORS.TEXT_COLOR,
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
    borderColor: COLORS.GRAY,
    color: COLORS.TEXT_COLOR,
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
    borderColor: COLORS.GRAY,
    color: COLORS.TEXT_COLOR,
  },
  emailInputView: {
    marginTop: heightPercentageToDP(5),
  },
  InputText: {
    margin: 0,
    padding: 0,
    marginTop: heightPercentageToDP(5),
    color: COLORS.DARK_GRAY,
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
    backgroundColor: COLORS.GRAY,
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
    color: COLORS.DARK_GRAY,
  },

  // LOGIN

  LoginBtn: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
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
    color: COLORS.DARK_GRAY,
  },
  createAccount: {
    color: COLORS.BLUE,
    fontWeight: 'bold',
  },
});

export default styles;
