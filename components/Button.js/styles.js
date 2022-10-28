import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';
import {heightPercentageToDP} from '@utils';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: heightPercentageToDP(4),
    marginBottom: heightPercentageToDP(4),
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
});

export default styles;
