import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import React from 'react';
import {Images} from '../../utility/imagePaths';
import colors from '../../utility/colors';
import commonStyle from '../../Styles/commonStyle';
import {spacing} from '../../Styles/spacing';
import {textScale} from '../../Styles/responsiveStyles';
import {fontNames} from '../../Styles/typography';
import {Colors} from '../../utility';

const CommonSearchBar = ({
  backGroundColor,
  textInput,
  BorderColor
}) => {
  return (
    <View>
      <View
        style={[
          Styles.mainContainer,
          {
            backgroundColor: backGroundColor || colors.white , borderColor: BorderColor || colors.grey300
          },
        ]}>
        <Image
          source={Images.IMG_SEARCH_ICON}
          resizeMode={'contain'}
          style={Styles.searchIcon}
        />
        <View style={{flex: 1,marginLeft:spacing.MARGIN_6}}>
          <Text style={[Styles.textInputStyle, {color: textInput || colors.black}]}>
            Restaurent name or dish ....
          </Text>
        </View>
        <View style={Styles.speretor} />
        <Image
          source={Images.IMG_MIC}
          resizeMode={'contain'}
          style={Styles.micIcon}
        />
      </View>
    </View>
  );
};

export default CommonSearchBar;

const Styles = StyleSheet.create({
  mainContainer: {
    ...commonStyle.flexRow,
    borderRadius: spacing.RADIUS_12,
    marginHorizontal: spacing.MARGIN_10,
    padding: spacing.PADDING_5,
    backgroundColor: colors.white,
    borderWidth:1,
    borderColor:colors.grey300
    // elevation: 10,
  },
  searchIcon: {
    width: spacing.WIDTH_28,
    height: spacing.WIDTH_28,
    tintColor: colors.theme,
  },
  textInputStyle: {
    fontSize: textScale(10),
    paddingVertical: spacing.PADDING_5,
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_MEDIUM,
    // color: '#000',
  },
  speretor: {
    width: spacing.WIDTH_1,
    height: '100%',
    backgroundColor: colors.grey500,
    marginHorizontal: spacing.MARGIN_8,
  },
  micIcon: {
    width: spacing.WIDTH_18,
    height: spacing.WIDTH_18,
    tintColor: colors.theme,
  },
});
