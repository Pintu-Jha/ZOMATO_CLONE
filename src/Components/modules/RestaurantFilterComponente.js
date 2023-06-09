import {View, FlatList,StyleSheet} from 'react-native';
import React from 'react';
import {spacing} from '../../Styles/spacing';
import RestaurantFilterComponentRow from '../rows/RestaurantFilterComponentRow';

const dummyFilterData = [
  {
    filter_name: 'sort',
    has_sub_list: true,
  },
  {
    filter_name: 'pure veg',
    has_sub_list: false,
  },
  {
    filter_name: 'fast delivery',
    has_sub_list: false,
  },
  {
    filter_name: 'great offers',
    has_sub_list: true,
  },
  {
    filter_name: 'rating 4.0+',
    has_sub_list: false,
  },
  {
    filter_name: 'new arrivals',
    has_sub_list: false,
  },
  {
    filter_name: 'cuisines',
    has_sub_list: true,
  },
  {
    filter_name: 'more',
    has_sub_list: true,
  },
];

const RestaurantFilterComponente = () => {
  return (
    <View style={Styles.mainContainer} key={'RestaurantFilterComponent'}>
      <FlatList
        data={dummyFilterData}
        horizontal
        renderItem={({item, index}) => {
          return (
            <RestaurantFilterComponentRow
              key={'RestaurantFilterRow' + index}
              index={index}
              item={item}
              lastIndex={dummyFilterData.length-1}
            />
          );
        }}
        listKey="RestaurantFilterComponent_flatlist"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default RestaurantFilterComponente;
const Styles = StyleSheet.create({
  mainContainer:{
    marginVertical:spacing.MARGIN_10
  }
})