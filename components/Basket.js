import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from "react-currency-formatter"

const Basket = () => {
    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const total = useSelector(selectBasketTotal)

    
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="bg-primary mx-5 p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-light font-extrabold text-lg">{items.length}</Text>
        <Text className="text-light font-extrabold text-lg flex-1 text-center">Se beställning</Text>
        <Text className="text-lg text-light font-extrabold">
            <Currency quantity={total} currency="SEK"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Basket