import {View, Text, StyleSheet, Image, TextInput, Alert,TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../utility/imagePaths';
import colors from '../../utility/colors';
import commonStyle from '../../Styles/commonStyle';
import {spacing} from '../../Styles/spacing';
import {textScale} from '../../Styles/responsiveStyles';
import {fontNames} from '../../Styles/typography';
import {Colors} from '../../utility';

const CommonSearchBar = ({navigation}) => {
  return (
    <View>
      <View
        style={[
          Styles.mainContainer]}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
          source={Images.IMG_ARROW}
          resizeMode={'contain'}
          style={Styles.searchIcon}
        />
        </TouchableOpacity>
          <TextInput
        placeholder='Restaurent name or dish ...'
        placeholderTextColor={colors.grey700}
        style={Styles.textInputStyle}
      />
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
    elevation: 5,
    marginVertical:spacing.MARGIN_10
  },
  searchIcon: {
    width: spacing.WIDTH_18,
    height: spacing.WIDTH_18,
    transform:[{rotate:'180deg'}],
    tintColor: colors.theme,
  },
  textInputStyle: {
    flex:1,
    fontSize: textScale(10),
    paddingVertical: spacing.PADDING_5,
    marginHorizontal:spacing.MARGIN_8,
    fontFamily: fontNames.SECONDARY_FONT_FAMILY_MEDIUM,
    color: '#000',
  },
  micIcon: {
    width: spacing.WIDTH_18,
    height: spacing.WIDTH_18,
    tintColor: colors.theme,
  },
});
