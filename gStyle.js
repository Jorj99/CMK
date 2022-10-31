import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '@constants';
import {heightPercentageToDP} from '@utils';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
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
    fontSize: FONTS.H1,
    color: COLORS.BLACK,
    fontWeight: '500',
    margin: 0,
    padding: 0,
  },
});

export default styles;
