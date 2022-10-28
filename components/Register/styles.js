import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';
import {widthPercentageToDP, heightPercentageToDP} from '@utils';

const styles = StyleSheet.create({
  phoneInputsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  InputText: {
    margin: 0,
    padding: 0,
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(2),
    color: COLORS.DARK_GRAY,
    alignSelf: 'flex-start',
  },
  //  INPUTS
  select: {
    width: 100,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 10,
    color: COLORS.GRAY,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  select_active: {
    width: 100,
    borderWidth: 1,
    borderColor: COLORS.BLUE,
    borderRadius: 10,
    color: COLORS.GRAY,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  selectDropdown: {
    width: 100,
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 10,
    color: COLORS.GRAY,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  selectTextColor: {
    color: COLORS.DARK_GRAY,
  },
  selectIcon: {width: 15, height: 15},

  inputPhone: {
    fontSize: 18,
    margin: 0,
    marginLeft: 20,
    padding: 0,
    paddingLeft: 10,
    width: widthPercentageToDP(50),
    borderWidth: 1,
    color: COLORS.DARK_GRAY,
    borderColor: COLORS.GRAY,
    borderRadius: 10,
  },

  inputName: {
    fontSize: 22,
    margin: 0,
    padding: 0,
    paddingLeft: 5,
    width: widthPercentageToDP(80),
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY,
    color: COLORS.TEXT_COLOR,
  },

  inputPassword: {
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
});

export default styles;
