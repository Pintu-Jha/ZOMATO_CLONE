import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Utils from '../utility';
import {Images} from '../utility/imagePaths';
import HomeScreen from '../Components/screens/Home/Index';
import WalletScreen from '../Components/screens/Wallet/Index';
import DiningScreen from '../Components/screens/Dining/Index';
import {spacing} from '../Styles/spacing';
import colors from '../utility/colors';
import {textScale} from '../Styles/responsiveStyles';
import {fontNames} from '../Styles/typography';
import RegularText from '../Components/common/RegularText';

const Tab = createBottomTabNavigator();
const tabBarColor = colors.white;

const tabData = [
  {
    name: Utils.Constants.SCREEN_HOME,
    label: 'Delivery',
    icon: Images.IMG_SCOOTER,
    component: HomeScreen,
  },
  {
    name: Utils.Constants.SCREEN_Dining,
    label: 'Dining',
    icon: Images.IMG_DINING,
    component: DiningScreen,
  },
  {
    name: Utils.Constants.SCREEN_WALLET,
    label: 'Money',
    icon: Images.IMG_WALLET,
    component: WalletScreen,
  },
];

function BottomTabNavigator() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: tabBarColor,
            paddingBottom: 0,
            height: spacing.HEIGHT_48,
          },
          tabBarLabelStyle: {alignSelf: 'center'},
          tabBarAllowFontScaling: true,
          headerShown: false,
        }}>
        {tabData.map((item, index) => {
          return (
            <Tab.Screen
              key={`BottomTabMain_${index.toString()}`}
              name={item.name}
              component={item.component}
               options={{
                tabBarLabel: item.label,
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: 'center'}}>
                      <Image
                        source={item.icon}
                        style={[
                          Styles.iconStyle,
                          focused && {tintColor: colors.theme},
                          item.name == Utils.Constants.SCREEN_HOME && {
                            width: spacing.WIDTH_30,
                          },
                          item.name == Utils.Constants.SCREEN_Dining && {
                            width: spacing.WIDTH_24,
                            height:spacing.HEIGHT_24,
                          },
                        ]}
                        resizeMode="contain"
                      />
                      <RegularText
                        style={[
                          Styles.lable,
                          !focused && {color: colors.grey600},
                          item.name == Utils.Constants.SCREEN_Dining && {
                            marginTop:0,
                            paddingBottom:5
                          }
                        ]}>
                        {item.label}
                      </RegularText>
                    </View>
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

const Styles = StyleSheet.create({
  iconStyle: {
    height: spacing.HEIGHT_16,
    width: spacing.WIDTH_16,
    tintColor: colors.grey600,
  },
  lable: {
    fontSize: textScale(6),
    fontFamily: fontNames.PRIMARY_FONT_FAMILY_BOLD,
    marginTop: spacing.MARGIN_4,
  },
});
export default BottomTabNavigator;
