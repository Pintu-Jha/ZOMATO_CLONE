import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../utility/colors';
import VirtualizedView from '../../common/VirtualizedView';
import HomeHeader from '../../common/HomeHeader';
import CommonSearchBar from '../../common/CommonSearchBar';
import {spacing} from '../../../Styles/spacing';
import RegularText from '../../common/RegularText';
import {Images} from '../../../utility/imagePaths';
import {useNavigation} from '@react-navigation/native';
import RestaurantFilterComponenteDinnig from '../../../DinningComponents/modules/RestaurantFilterComponentDinnig';
const DiningScreen = (
) => {
  const navigation = useNavigation();
  return (
    <VirtualizedView styles={Styles.mainontainer}>
      <View style={Styles.forBackground}>
        <HomeHeader titleTextColor={'#fff'} addressText={'#fff'} />
        <TouchableOpacity
          onPress={() => navigation.navigate('CommonSearch')}
          style={{flex: 1}}>
          <CommonSearchBar
            backGroundColor={'#333333'}
            textInput={'#fff'}
            BorderColor={'#333333'}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: spacing.MARGIN_18,
          }}>
          <View
            style={{
              width: '45%',
              height: 120,
              borderWidth: 1,
              borderColor: '#4d4d4d',
              borderRadius: spacing.RADIUS_16,
              paddingLeft: spacing.PADDING_10,
              paddingTop: spacing.PADDING_18,
              backgroundColor: '#1a1600',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <RegularText
                  style={{
                    color: colors.white,
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}>
                  Gold offers
                </RegularText>
                <RegularText style={{color: colors.white, fontWeight: 500}}>
                  up to 40% OFF
                </RegularText>
              </View>
              <View>
                <Image
                  source={Images.IMG_DISCOUNT}
                  resizeMode={'cover'}
                  style={{
                    width: spacing.WIDTH_30,
                    height: spacing.WIDTH_30,
                    tintColor: colors.white,
                    marginVertical: spacing.MARGIN_12,
                    marginHorizontal: spacing.MARGIN_12,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: spacing.PADDING_4,
                width: spacing.WIDTH_16,
                borderRadius: spacing.RADIUS_4,
              }}>
              <Image
                source={Images.IMG_ARROW}
                resizeMode={'cover'}
                style={{
                  width: spacing.WIDTH_10,
                  height: spacing.HEIGHT_10,
                  tintColor: '#000',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '45%',
              height: 120,
              borderWidth: 1,
              borderColor: '#4d4d4d',
              borderRadius: spacing.RADIUS_16,
              paddingLeft: spacing.PADDING_8,
              paddingTop: spacing.PADDING_18,
              backgroundColor: '#1a1600',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <RegularText
                  style={{
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Book table
                </RegularText>
                <RegularText style={{color: colors.white, fontWeight: 600}}>
                  right away
                </RegularText>
              </View>
              <View>
                <Image
                  source={Images.IMG_TABLE}
                  resizeMode={'cover'}
                  style={{
                    width: spacing.WIDTH_30,
                    height: spacing.WIDTH_30,
                    tintColor: colors.white,
                    marginVertical: spacing.MARGIN_12,
                    marginHorizontal: spacing.MARGIN_12,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: spacing.PADDING_4,
                width: spacing.WIDTH_16,
                borderRadius: spacing.RADIUS_4,
              }}>
              <Image
                source={Images.IMG_ARROW}
                resizeMode={'cover'}
                style={{
                  width: spacing.WIDTH_10,
                  height: spacing.HEIGHT_10,
                  tintColor: '#000',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <RestaurantFilterComponenteDinnig/>
    </VirtualizedView>
  );
};

export default DiningScreen;

const Styles = StyleSheet.create({
  mainontainer: {
    flex: 1,
  },
  forBackground: {
    backgroundColor: '#262626',
    borderBottomLeftRadius: spacing.RADIUS_10,
    borderBottomRightRadius: spacing.RADIUS_10,
  },
  textColor: {},
});
