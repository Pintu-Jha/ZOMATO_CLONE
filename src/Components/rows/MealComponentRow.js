import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '../../utility/imagePaths';
import {spacing} from '../../Styles/spacing';
import RegularText from '../common/RegularText';
import {textScale} from '../../Styles/responsiveStyles';
import { fontNames } from '../../Styles/typography';
import colors from '../../utility/colors';

const mealImageSize =
  spacing.FULL_WIDTH / 3.5 - spacing.PADDING_12 * 2 + spacing.WIDTH_5;
const MealComponentRow = ({item,index}) => {
  return (
    <View
      style={[
        Styles.mainContainer,
        // (index + 0) % 2 == 0 && {marginLeft: spacing.MARGIN_14},
        (index - 1) % 2 == 0 && {marginHorizontal: spacing.MARGIN_18},
        // index >= 2 && {marginTop: spacing.MARGIN_12},
        index == 0 && { marginLeft: spacing.MARGIN_10 },
      ]}>
      <Image
        source={Images.IMG_CIRCAL_THALI_MEAL}
        resizeMode={'contain'}
        style={Styles.circleMealStyle}
      />
      <RegularText style={Styles.mealName}>Thali</RegularText>
      <Image
        source={Images.IMG_CIRCAL_THALI_MEAL}
        resizeMode={'contain'}
        style={Styles.circleMealStyle}
      />
      <RegularText style={Styles.mealName}>Thali</RegularText>
    </View>
  );
};

export default MealComponentRow;

const Styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  circleMealStyle: {
    width: mealImageSize,
    height: mealImageSize,
  },
  mealName: {
    fontSize: textScale(10),
    fontFamily:fontNames.SECONDARY_FONT_FAMILY_BOLD,
    color:colors.grey800,
    marginTop:spacing.MARGIN_4
  },
});
