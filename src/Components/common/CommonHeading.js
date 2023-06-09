import { View, Text } from 'react-native'
import React from 'react'
import RegularText from './RegularText'
import { textScale } from '../../Styles/responsiveStyles'
import { fontNames } from '../../Styles/typography'
import { spacing } from '../../Styles/spacing'

const CommonHeading = ({heading,style }) => {
  return (
    <RegularText style={[{fontSize:textScale(16), fontFamily:fontNames.PRIMARY_FONT_FAMILY_BOLD, marginBottom:spacing.MARGIN_10},style]}>{heading}</RegularText>
  )
}

export default CommonHeading