import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const screenHeight = Dimensions.get('window').height;
export const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// Add dashes on phone text
export const addDashesInPhone = (text, phoneCode, setPhoneInput) => {
  // 0 = '+ 374'
  if (phoneCode === 0 && text.length <= 11) {
    const withoutDashText = text.replace(
      /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
      '$1$2-$3$4-$5$6-$7$8',
    );
    setPhoneInput(withoutDashText);
  } else if (phoneCode === 0 && text.length <= 8) {
    const withoutDashText = text.replace(
      /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
      '$1$2-$3$4-$5$6-$7$8',
    );
    setPhoneInput(withoutDashText);
  }

  // 1 = '+7'
  if (phoneCode === 1 && text.length <= 13) {
    const withoutDashText = text.replace(
      /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
      '$1$2$3-$4$5$6-$7$8-$9$10',
    );
    setPhoneInput(withoutDashText);
  } else if (phoneCode === 0 && text.length <= 11) {
    const withoutDashText = text.replace(
      /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
      '$1$2-$3$4-$5$6-$7$8',
    );
    setPhoneInput(withoutDashText);
  }
};
