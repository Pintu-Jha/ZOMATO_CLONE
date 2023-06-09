import {View, FlatList, Text, StyleSheet} from 'react-native';
import React from 'react';
import MealComponentRow from '../rows/MealComponentRow';
import CommonHeading from '../common/CommonHeading';
import colors from '../../utility/colors';
import {spacing} from '../../Styles/spacing';
import {textScale} from '../../Styles/responsiveStyles';
import commonStyle from '../../Styles/commonStyle';
import {fontNames} from '../../Styles/typography';
import RegularText from '../common/RegularText';

const MealComponent = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: spacing.MARGIN_6,
        }}>
        <View
          style={{
            flexGrow: 1,
            height: spacing.WIDTH_1,
            backgroundColor: colors.grey400,
            marginLeft: spacing.MARGIN_6,
          }}
        />
        <View>
          <Text
            style={{
              width: spacing.WIDTH_90,
              textAlign: 'center',
              color: colors.grey700,
              fontSize: textScale(12),
              flexGrow: 1,
            }}>
            {'EXPLOER'}
          </Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            height: spacing.WIDTH_1,
            backgroundColor: colors.grey400,
            marginRight: spacing.MARGIN_6,
          }}
        />
      </View>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1, 1]}
        horizontal
        style={Styles.listStyle}
        renderItem={({item, index}) => {
          return (
            <MealComponentRow
              key={'MealComponentRow' + index}
              item={item}
              index={index}
            />
          );
        }}
        listKey="MealComponent_flatlist"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
      <View style={Styles.SeeMoreContainer}>
        <RegularText style={Styles.seeMoreText}>see more</RegularText>
        {/* <Image
                    source={Images.IMG_ARROW}
                    resizeMode={'cover'}
                    style={Styles.downArrowIcon}
                /> */}
      </View>
    </View>
  );
};

export default MealComponent;

const Styles = StyleSheet.create({
  listStyle: {
    marginTop: spacing.MARGIN_10,
  },
  SeeMoreContainer: {
    borderWidth: 1,
    borderColor: colors.grey300,
    borderRadius: spacing.RADIUS_8,
    marginVertical: spacing.MARGIN_20,
    marginHorizontal: spacing.MARGIN_14,
    paddingVertical: spacing.PADDING_6,
    ...commonStyle.flexRow,
    ...commonStyle.justifyALignCenter,
  },
  seeMoreText: {
    fontSize: textScale(10),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
  },
});
