import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import CommonHeading from '../common/CommonHeading';
import ResturantByCategoryComponentRow from '../rows/ResturantByCategoryComponentRow';
import {spacing} from '../../Styles/spacing';
import VirtualizedView from '../common/VirtualizedView';

const dummyFilterData = [
  'recommended for you',
  'featured restaurants',
];

const ResturantByCategoryComponent = () => {
  return (
    <VirtualizedView
      style={Style.mainContainer}
      key={'RestaurantsByCategoryComponent'}>
      <FlatList
        data={dummyFilterData}
        renderItem={({item, index}) => {
          return (
            <View
              style={{flex: 1}}
              key={'RestaurantsByCategoryComponent_flatlist' + index}>
              <CommonHeading heading={item} style={Style.heading}/>
              <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                renderItem={({item, index}) => {
                  return (
                    <ResturantByCategoryComponentRow
                      key={'RecommendedRestaurantComponentRow' + index}
                      item={item}
                      index={index}
                      lastIndex={dummyFilterData.length - 1}
                    />
                  );
                }}
                horizontal
                listKey="RestaurantsByCategoryComponent_flatlist"
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => String(index)}
              />
            </View>
          );
        }}
        listKey="RestaurantsByCategoryComponent_flatlist"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
    </VirtualizedView>
  );
};

export default ResturantByCategoryComponent;

const Style = StyleSheet.create({
  mainContainer: {
    marginBottom: spacing.MARGIN_12,
  },
  heading: {
    paddingHorizontal: spacing.PADDING_12,
    textTransform: 'capitalize',
    marginLeft:spacing.MARGIN_4
  },
});
