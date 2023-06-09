import { StyleSheet,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import HomeHeader from '../../common/HomeHeader';
import colors from '../../../utility/colors';
import CommonSearchBar from '../../common/CommonSearchBar';
import RestaurantFilterComponente from '../../modules/RestaurantFilterComponente';
import MealComponent from '../../modules/MealComponent';
import ResturantByCategoryComponent from '../../modules/ResturantByCategoryComponent';
import VirtualizedView from '../../common/VirtualizedView';
import AllRestauantCategory from '../../modules/AllRestauantCategory';



const HomeScreen = ({navigation}) => {
  return (
   <VirtualizedView style={Styles.mainContainer}>  
   <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} /> 
     <HomeHeader/>
     <TouchableOpacity
          onPress={() => navigation.navigate('CommonSearch')}
          style={{flex: 1}}>
     <CommonSearchBar/>
     </TouchableOpacity>
     <RestaurantFilterComponente/>
     <MealComponent/>
     <ResturantByCategoryComponent/> 
     <AllRestauantCategory/>
    </VirtualizedView>

  )
}

export default HomeScreen;
const Styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.white
  }
})