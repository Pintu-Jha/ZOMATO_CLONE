import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../utility/imagePaths';
import {spacing} from '../../Styles/spacing';
import RegularText from '../common/RegularText';
import {textScale} from '../../Styles/responsiveStyles';
import colors from '../../utility/colors';
import {fontNames} from '../../Styles/typography';
import commonStyle from '../../Styles/commonStyle';
import {Colors} from '../../utility';

const AllRestauantCategoryRow = () => {
  return (
    <View style={Styles.mainContainer}>
      <View>
        <Image
          source={Images.IMG_FRENCH_FRIES}
          resizeMode={'cover'}
          style={Styles.restaurantThambnail}
        />
        <View style={Styles.restaurantTypeContainer}>
          <RegularText style={Styles.areaName}>
            Pink City Restaurant
          </RegularText>
          <View
            style={{...commonStyle.flexRow, marginBottom: spacing.MARGIN_16}}>
            <Image
              source={Images.IMG_LEAF}
              resizeMode={'cover'}
              style={Styles.leaficon}
            />
            <RegularText style={Styles.restaurantType}>Pure Veg</RegularText>
            <View style={Styles.dot} />
            <RegularText style={Styles.foodType}>Fast Food</RegularText>
          </View>
        </View>
        <View style={Styles.ratingContainer}>
          <RegularText style={Styles.ratingText}>4.0</RegularText>
          <Image
            source={Images.IMG_STAR}
            resizeMode={'cover'}
            style={Styles.starIcon}
          />
        </View>
        <TouchableOpacity style={Styles.favoriteButtonContainer}>
          <Image
            source={Images.IMG_HEART}
            resizeMode={'cover'}
            style={Styles.heartIcon}
          />
        </TouchableOpacity>
        <View style={Styles.foodAndPriceContainer}>
          <RegularText style={Styles.foodType}>French Fries</RegularText>
          <RegularText style={Styles.price}>₹100</RegularText>
        </View>
      </View>

      <View>
        <View style={Styles.detailsContainer}>
          <View style={Styles.timeAndDistanceContainer}>
            <Image
              source={Images.IMG_STOPWATCH}
              resizeMode={'cover'}
              style={Styles.watchIcon}
            />
            <RegularText style={Styles.time}>15-20 min</RegularText>
            <View style={Styles.dotblack} />
            <RegularText style={Styles.distance}>2 km</RegularText>
          </View>
        </View>
        {/* <View style={Styles.PositionContainer}> */}
        <View style={Styles.discountContainer}>
          <Image
            source={Images.IMG_DISCOUNT}
            resizeMode={'cover'}
            style={Styles.discountIcon}
          />
          <RegularText style={Styles.discountText}>
            50% OFF up to 100
          </RegularText>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
};

export default AllRestauantCategoryRow;

const Styles = StyleSheet.create({
  mainContainer: {
    // borderRadius: spacing.RADIUS_20,
    // marginBottom: spacing.MARGIN_24,
  },
  restaurantThambnail: {
    width: spacing.FULL_WIDTH - spacing.PADDING_12 * 2,
    height: spacing.FULL_WIDTH / 1.5,
    borderTopLeftRadius: spacing.RADIUS_16,
    borderTopRightRadius: spacing.RADIUS_16,
  },
  restaurantTypeContainer: {
    position: 'absolute',
    bottom: 15,
    width: '70%',
    marginLeft: spacing.MARGIN_8,
  },
  areaName: {
    fontSize: textScale(18),
    color: colors.white,
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
    fontWeight: 'bold',
  },
  leaficon: {
    width: spacing.WIDTH_12,
    height: spacing.WIDTH_12,
    tintColor: colors.white,
    marginRight: spacing.MARGIN_4,
  },
  restaurantType: {
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_BOLD,
    fontSize: textScale(10),
    color: colors.white,
    marginRight: spacing.MARGIN_2,
    fontWeight: 'bold',
  },
  foodType: {
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_BOLD,
    fontSize: textScale(10),
    color: colors.white,
    fontWeight: 'bold',
  },
  dot: {
    width: spacing.WIDTH_5,
    height: spacing.WIDTH_5,
    backgroundColor: colors.white,
    marginLeft: spacing.MARGIN_4,
    borderRadius: spacing.RADIUS_6,
    marginRight: spacing.MARGIN_4,
    fontWeight: 'bold',
  },
  ratingContainer: {
    ...commonStyle.flexRow,
    position: 'absolute',
    right: 0,
    bottom: 15,
    marginBottom: spacing.MARGIN_16,
    backgroundColor: '#4a9157',
    marginRight: spacing.MARGIN_18,
    padding: spacing.PADDING_4,
    borderRadius: spacing.RADIUS_8,
  },
  ratingText: {
    fontSize: textScale(12),
    color: colors.white,
    marginRight: spacing.MARGIN_4,
  },
  starIcon: {
    width: spacing.WIDTH_12,
    height: spacing.HEIGHT_12,
    tintColor: colors.white,
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: spacing.MARGIN_6,
    right: spacing.MARGIN_6,
    marginTop: spacing.MARGIN_16,
    marginRight: spacing.MARGIN_10,
    backgroundColor: colors.grey200,
    width: spacing.WIDTH_30,
    height: spacing.WIDTH_30,
    borderRadius: spacing.RADIUS_90,
    ...commonStyle.justifyALignCenter,
  },
  heartIcon: {
    width: spacing.WIDTH_22,
    height: spacing.WIDTH_22,
  },
  foodAndPriceContainer: {
    ...commonStyle.flexRow,
    ...commonStyle.justifyALignCenter,
    position: 'absolute',
    top: spacing.MARGIN_6,
    left: spacing.MARGIN_6,
    marginTop: spacing.MARGIN_16,
    marginLeft: spacing.MARGIN_10,
    width: spacing.WIDTH_105,
    height: spacing.WIDTH_30,
    backgroundColor: '#4d4d4d',
    padding: spacing.PADDING_6,
    borderRadius: spacing.RADIUS_8,
  },
  foodType: {
    color: colors.white,
    textAlign: 'center',
    marginRight: spacing.MARGIN_4,
    fontSize: textScale(8),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
    fontWeight: 'bold',
  },
  price: {
    color: colors.white,
    fontSize: textScale(8),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: spacing.RADIUS_16,
    borderBottomRightRadius: spacing.RADIUS_16,
    elevation: 1,
    height: spacing.HEIGHT_56,
  },
  timeAndDistanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.WIDTH_4,
    top: 30,
  },
  watchIcon: {
    width: spacing.WIDTH_18,
    height: spacing.WIDTH_18,
    tintColor: colors.blue300,
  },
  time: {
    fontSize: textScale(11),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_MEDIUM,
    marginLeft: spacing.WIDTH_4,
  },
  dotblack: {
    width: spacing.WIDTH_4,
    height: spacing.WIDTH_4,
    backgroundColor: colors.black,
    borderRadius: spacing.RADIUS_6,
    marginHorizontal: spacing.MARGIN_4,
  },
  distance: {
    fontSize: textScale(11),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_MEDIUM,
  },
  discountContainer: {
    width: '95%',
    height: spacing.WIDTH_36,
    backgroundColor: colors.blue600,
    borderRadius: spacing.RADIUS_16,
    bottom: '20%',
    alignSelf: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },

  discountIcon: {
    width: spacing.WIDTH_20,
    height: spacing.WIDTH_20,
    tintColor: colors.white,
    alignSelf: 'center',
    marginHorizontal: spacing.MARGIN_8,
  },
  discountText: {
    fontSize: textScale(13),
    color: colors.white,
    alignSelf: 'center',
  },
});
