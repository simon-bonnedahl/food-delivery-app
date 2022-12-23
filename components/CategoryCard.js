import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { urlFor } from '../sanity'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-20 w-20 rounded-lg"/>
      <Text className="absolute left-1 bottom-1 font-bold text-light">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard