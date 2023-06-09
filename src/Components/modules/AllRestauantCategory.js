import {View, Text, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import AllRestauantCategoryRow from '../rows/AllRestauantCategoryRow';
import { spacing } from '../../Styles/spacing';
import CommonHeading from '../common/CommonHeading';
import colors from '../../utility/colors';
import { fontNames } from '../../Styles/typography';
import { textScale } from '../../Styles/responsiveStyles';
import RegularText from '../common/RegularText';

const AllRestauantCategory = () => (
  <View style={Styles.mainContainer}>
    <CommonHeading heading={'All Restaurants'} style={{marginHorizontal:spacing.MARGIN_4}}/>
    <FlatList
      data={[1, 1, 1, 1, 1]}
      renderItem={({ item, index }) => {
        return (
          <AllRestauantCategoryRow
            key={'AllRestaurantComponentRow' + index}
            item={item}
            index={index} />
        );
      } }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)} 
      />
      <TouchableOpacity style={Styles.buttonContainer} >
                <RegularText style={Styles.buttonText}  >See all restaurants around you</RegularText>
            </TouchableOpacity>
  </View>
);

export default AllRestauantCategory;

const Styles = StyleSheet.create({
    mainContainer:{
        marginHorizontal:spacing.PADDING_12
    },
    buttonContainer:{
      alignItems: 'center',
      paddingVertical: spacing.PADDING_12,
      backgroundColor: colors.red400,
      borderRadius: spacing.RADIUS_8,
      // marginBottom:spacing.MARGIN_8,
      marginVertical:spacing.MARGIN_12
    },
    buttonText:{
      fontFamily: fontNames.SECONDARY_FONT_FAMILY_SEMI_BOLD,
      fontSize: textScale(12),
      color: colors.white
    }
})