import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Images} from '../../utility/imagePaths';
import {spacing} from '../../Styles/spacing';
import commonStyle from '../../Styles/commonStyle';
import colors from '../../utility/colors';
import RegularText from './RegularText';
import {textScale} from '../../Styles/responsiveStyles';
import {fontNames} from '../../Styles/typography';

const HomeHeader = ({titleTextColor,addressText}) => {
  return (
    <View style={Styles.mainContainer}>
      <Image
        source={Images.IMG_LOCATION}
        resizeMode={'contain'}
        style={[Styles.locationPinImage, {tintColor: titleTextColor ||colors.theme}]}
      />
      <View style={Styles.addressContainer}>
        <View style={commonStyle.flexRow}>
          <RegularText
            style={[Styles.kookasText, {color:addressText || colors.black}]}>
            KOOKAS
          </RegularText>
          <Image
            source={Images.IMG_ARROW}
            resizeMode={'contain'}
            style={[
              Styles.downArrowStyle,
              {tintColor : titleTextColor || colors.black},
            ]}
          />
        </View>
        <RegularText
          style={[Styles.addressText,{color:addressText || colors.black}]}>
          India
        </RegularText>
      </View>
      <View style={Styles.userContainer}>
        <View
          style={{
            borderRadius: 10,
            padding: spacing.PADDING_5,
            backgroundColor: colors.white,
            elevation: 7,
          }}>
          <Image
            source={Images.IMG_LANGUAGE}
            resizeMode={'contain'}
            style={Styles.languageSign}
          />
        </View>
        <Image
          source={Images.IMG_USER}
          resizeMode={'contain'}
          style={Styles.userIconStyle}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const Styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: spacing.PADDING_12,
    paddingVertical: spacing.PADDING_12,
    ...commonStyle.flexRow,
  },
  locationPinImage: {
    width: spacing.WIDTH_24,
    height: spacing.WIDTH_24,
    tintColor: colors.theme,
  },
  addressContainer: {
    flex: 1,
    marginHorizontal: spacing.MARGIN_6,
  },
  kookasText: {
    fontSize: textScale(12),
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_BOLD,
    fontWeight: 'bold',
  },
  downArrowStyle: {
    width: spacing.WIDTH_12,
    height: spacing.WIDTH_12,
    tintColor: colors.black,
    transform: [{rotate: '90deg'}],
    marginLeft: spacing.MARGIN_4,
  },
  addressText: {
    fontSize: textScale(10),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_MEDIUM,
    color: colors.grey800,
  },
  userContainer: {
    paddingHorizontal: spacing.PADDING_3,
    paddingVertical: spacing.PADDING_6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageSign: {
    width: spacing.WIDTH_20,
    height: spacing.WIDTH_20,
    tintColor: colors.grey800,
  },
  userIconStyle: {
    width: spacing.WIDTH_36,
    height: spacing.WIDTH_36,
    tintColor: colors.blueGrey500,
    marginLeft: spacing.MARGIN_10,
  },
});
