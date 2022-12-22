import { View, Text, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
const RestaurantCard = ({id, title, imgUrl, rating, genre, description, dishes, address, latitude, longitude}) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity className="w-64 h-60 mr-4"
        onPress={()=>{navigation.navigate("Restaurant", {id, title, imgUrl, rating, genre, description, dishes, address, latitude, longitude})}}>
        <Image
        className="w-64 h-36 rounded-sm"
        source={{
            uri: urlFor(imgUrl).url(),
        }}/>
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1 ">
                <StarIcon color="#f25f4c" size={22}/>
                <Text className="text-xs text-gray-500">
                    <Text className="text-primary">{rating}</Text> • {genre}
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" size={22}/>
                <Text className="text-xs text-gray-500">{address}</Text>
            </View>
        </View>
     
      
    </TouchableOpacity>
  )
}

export default RestaurantCard