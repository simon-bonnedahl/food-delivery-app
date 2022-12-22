import { View, Text, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const DishRow = ({id, title, description, imgUrl}) => {
  return (
    <View className="flex-row mt-4">
        {imgUrl ? <Image
        className="w-24 h-24 rounded-md"
        source={{
            uri: urlFor(imgUrl).url(),
        }}/> : <View className="w-24 h-24 rounded-md bg-gray-400"></View>}
        
        <View className="ml-4">
            <Text className="font-bold ">{title}</Text>
            <Text className="text-xs text-gray-500 mt-2 mr-20">{description}</Text>
        </View>
      
    </View>
  )
}

export default DishRow