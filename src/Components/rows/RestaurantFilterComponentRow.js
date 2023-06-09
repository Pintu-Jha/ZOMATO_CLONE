import { View,StyleSheet,Image, Text } from 'react-native'
import React from 'react'
import {textScale} from '../../Styles/responsiveStyles';
import {fontNames} from '../../Styles/typography';
import commonStyle from '../../Styles/commonStyle';
import colors from '../../utility/colors';
import RegularText from '../common/RegularText';
import { spacing } from '../../Styles/spacing';
import { Images } from '../../utility/imagePaths';

const RestaurantFilterComponentRow = ({index,item,lastIndex }) => {
  return (
    <View
    style={[
      Styles.flatlistItemContainer,
      index == 0 && {marginLeft:spacing.PADDING_10},
      index ==  lastIndex && {marginRight:spacing.PADDING_12},
    ]}>
    
      {
        index == 0 ? (
        <Image
          source={Images.IMG_FILTER}
          resizeMode={'contain'}
          style={Styles.fliterIconStyle}
        />
      ) : null
      }

      <RegularText style={Styles.filterTitle}>{item.filter_name}</RegularText>

      {
        item.has_sub_list ? (
        <Image
          source={Images.IMG_DOWN_TRIANGLE_ARROW}
          resizeMode={'contain'}
          style={Styles.downArrow}
        />
      ) : null
      }
      
  </View>
  );
}

const Styles = StyleSheet.create({
    flatlistItemContainer: {
      ...commonStyle.flexRow,
      borderWidth: spacing.WIDTH_1,
      borderRadius: spacing.RADIUS_6,
      padding: spacing.PADDING_8,
      borderColor: colors.grey300,    
      marginRight: spacing.MARGIN_6,
      backgroundColor:colors.grey50
    },
    fliterIconStyle: {
      width: spacing.WIDTH_10,
      height: spacing.WIDTH_10,
    },
    filterTitle: {
      fontSize: textScale(10),
      textTransform: 'capitalize',
      fontFamily: fontNames.SECONDARY_FONT_FAMILY_SEMI_BOLD,
      marginHorizontal: spacing.MARGIN_4,
      fontWeight:"bold",
      // marginLeft:spacing.MARGIN_10
    },
    downArrow: {
      width: spacing.WIDTH_10,
      height: spacing.WIDTH_10,
    },
  });

export default RestaurantFilterComponentRow;

