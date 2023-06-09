import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {spacing} from '../../Styles/spacing';
import {Images} from '../../utility/imagePaths';
import RegularText from '../common/RegularText';
import colors from '../../utility/colors';
import commonStyle from '../../Styles/commonStyle';
import {fontNames} from '../../Styles/typography';
import {textScale} from '../../Styles/responsiveStyles';

const restaurantThumbnailWidth = spacing.FULL_WIDTH / 2.5;
const restaurantThumbnailHeight = spacing.FULL_WIDTH / 3.2;
const ResturantByCategoryComponentRow = ({item, index, lastIndex}) => {
  return (
    <View
      style={[
        Styles.mainContainer,
        index == 0 && {marginLeft: spacing.PADDING_12},
      ]}>
      <View>
        <Image
          source={Images.IMG_FRENCH_FRIES}
          resizeMode={'cover'}
          style={Styles.restaurantThumbmaiIcon}
        />
        <View style={Styles.restaurantTypeContainer}>
          <Image
            source={Images.IMG_LEAF}
            resizeMode={'cover'}
            style={Styles.leafIcon}
          />
          <RegularText style={Styles.restaurantType}>Pure Veg</RegularText>
        </View>
        <TouchableOpacity style={Styles.favoriteButtonContainer}>
          <Image
            source={Images.IMG_HEART}
            resizeMode={'cover'}
            style={Styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.detailsContainer}>
        <View style={Styles.restaurantNameAndRatingContainer}>
          <RegularText style={Styles.restaurantName}>
            Saffron The Family Restarurant
          </RegularText>
          <View style={Styles.ratingContainer}>
            <RegularText style={Styles.ratingText}>4.8</RegularText>
            <Image
              source={Images.IMG_STAR}
              resizeMode={'cover'}
              style={Styles.StarIcon}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: spacing.PADDING_6}}>
          <View style={Styles.deliveryTimeAndDistanceContainer}>
            <Image
              source={Images.IMG_STOPWATCH}
              resizeMode={'cover'}
              style={Styles.stopWatchIcons}
            />
            <RegularText style={Styles.deliveryAndPriceDetailText}>
              30min
            </RegularText>
            <View style={Styles.dot} />
            <RegularText style={Styles.deliveryAndPriceDetailText}>
              5km
            </RegularText>
          </View>
          <View style={Styles.deliveryTimeAndDistanceContainer}>
            <View style={Styles.rupeeIConContainer}>
              <Image
                source={Images.IMG_RUPEE}
                resizeMode={'cover'}
                style={Styles.rupeeIcon}
              />
            </View>
            <RegularText style={Styles.deliveryAndPriceDetailText}>
              300 for one
            </RegularText>
          </View>
          </View>
          <View style={Styles.offerContainer}>
            <Image
              source={Images.IMG_DISCOUNT}
              resizeMode={'cover'}
              style={Styles.discountIcon}
            />
            <RegularText style={Styles.offerText}>50% off upto ₹50</RegularText>
          </View>
      </View>
    </View>
  );
};

export default ResturantByCategoryComponentRow;

const Styles = StyleSheet.create({
  mainContainer: {
    width: restaurantThumbnailWidth,
    marginRight: spacing.MARGIN_14,
    borderRadius: spacing.RADIUS_16,
    marginBottom: spacing.MARGIN_30,
  },
  restaurantThumbmaiIcon: {
    width: restaurantThumbnailWidth,
    height: restaurantThumbnailHeight,
    borderTopRightRadius: spacing.RADIUS_16,
    borderTopLeftRadius: spacing.RADIUS_16,
  },
  restaurantTypeContainer: {
    backgroundColor: colors.lightwhite02,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: spacing.PADDING_8,
    ...commonStyle.flexRow,
  },
  leafIcon: {
    width: spacing.WIDTH_28,
    height: spacing.WIDTH_28,
    marginRight: spacing.MARGIN_4,
    tintColor: '#4a9157',
  },
  restaurantType: {
    color: '#4a9157',
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_BOLD,
    fontSize: textScale(10),
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: spacing.MARGIN_6,
    right: spacing.MARGIN_6,
    width: spacing.WIDTH_30,
    height: spacing.WIDTH_30,
    backgroundColor: colors.white,
    borderRadius: spacing.RADIUS_90,
    ...commonStyle.justifyALignCenter,
  },
  heartIcon: {
    width: spacing.WIDTH_18,
    height: spacing.WIDTH_18,
  },
  detailsContainer: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: spacing.RADIUS_16,
    borderBottomRightRadius: spacing.RADIUS_16,
    elevation: 3,
  },
  restaurantNameAndRatingContainer: {
    flexDirection: 'row',
    padding: spacing.PADDING_6,
  },
  restaurantName: {
    flex: 2,
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
    fontSize: textScale(8),
  },
  ratingContainer: {
    backgroundColor: colors.green,
    borderRadius: spacing.RADIUS_4,
    paddingHorizontal: spacing.PADDING_4,
    ...commonStyle.flexRow,
    textAlign: 'flex-end',
    height: spacing.HEIGHT_20,
  },
  ratingText: {
    color: colors.white,
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
    fontSize: textScale(10),
    marginRight: spacing.MARGIN_4,
  },
  StarIcon: {
    width: spacing.WIDTH_8,
    height: spacing.WIDTH_8,
    tintColor: colors.white,
  },
  deliveryTimeAndDistanceContainer: {
    ...commonStyle.flexRow,
  },
  stopWatchIcons: {
    width: spacing.WIDTH_10,
    height: spacing.WIDTH_10,
  },
  deliveryAndPriceDetailText: {
    marginLeft: spacing.MARGIN_4,
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_SEMI_BOLD,
    fontSize: textScale(10),
  },
  dot: {
    width: spacing.WIDTH_5,
    height: spacing.WIDTH_5,
    backgroundColor: colors.black,
    marginLeft: spacing.MARGIN_4,
    borderRadius: spacing.RADIUS_6,
  },
  rupeeIConContainer: {
    width: spacing.WIDTH_10,
    height: spacing.WIDTH_10,
    backgroundColor: colors.red300,
    borderRadius: spacing.RADIUS_40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeIcon: {
    width: spacing.WIDTH_10,
    height: spacing.WIDTH_10,
    tintColor: colors.white,
  },
  offerContainer: {
    ...commonStyle.flexRow,
    marginTop: spacing.MARGIN_26,
    backgroundColor: '#eff3ff',
    borderBottomRightRadius: spacing.RADIUS_16,
    borderBottomLeftRadius: spacing.RADIUS_16,
    padding: spacing.PADDING_6,
  },
  discountIcon: { 
    width: spacing.WIDTH_10,
    height: spacing.WIDTH_10,
  },
  offerText: {
    fontSize: textScale(10),
    color: '#206def',
    marginLeft: spacing.MARGIN_4,
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
  },
});
