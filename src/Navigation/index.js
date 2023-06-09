import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Utils from '../utility'
import BottomTabNavigator from './BottomTabNavigation';
import CommonSearch from '../Components/common/CommonSearch';



const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
   <View style={{flex:1}}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name={Utils.Constants.KEY_BOTTOM_TAB_NAVIGATION} component={BottomTabNavigator}/>
            <Stack.Screen name='CommonSearch' component={CommonSearch} />
        </Stack.Navigator>
    </NavigationContainer>
   </View>
  )
}

export default Appstack;