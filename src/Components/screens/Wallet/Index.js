import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { fontNames } from '../../../Styles/typography'
import colors from '../../../utility/colors'
import { textScale } from '../../../Styles/responsiveStyles'

const WalletScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:colors.white}}>
      <Text style={styles.text}>COMMING SOON...</Text>
    </View>
  )
}

export default WalletScreen;

const styles = StyleSheet.create({
text:{
  color:colors.black,
  fontSize:textScale(22),
  fontFamily:fontNames.PRIMARY_FONT_FAMILY_BLACK,
  fontWeight:'bold'
}
})