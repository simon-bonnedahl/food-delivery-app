import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectBasketItems } from '../features/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

const BasketScreen = () => {
    const items = useSelector(selectBasketItems)
    const restaurant = useSelector(selectRestaurant)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useMemo(() =>{
        const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item)
        return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])

  return (
    <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 bg-background">
            {/*Header*/}
            <View className="p-5 border-b border-primary bg-light">
                <View>
                    <Text className="text-lg font-bold text-dark text-center">
                        Order
                    </Text>
                    <Text className="text-center text-dark text-xs">
                        {restaurant.title}
                    </Text>
                </View>
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-3 right-3">
                    <XCircleIcon color="#f25f4c" size={50}/>
                </TouchableOpacity>
            </View>
            {/*Body*/}
            {/*Estimated time*/}

            <View className="flex-row justify-between items-center space-x-4 px-4 py-3 bg-light my-5">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7"/>
                <Text className="flex-1">30-45 min</Text>
                <TouchableOpacity>
                    <Text className="text-primary">
                        Change
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView className="divide-y divide-lightgray">
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key} className="flex-row items-center px-4 py-2 space-x-2 bg-light">
                        <Text className="text-primary">{items.length} x</Text>
                         <Image
                            source={{ uri: urlFor(items[0]?.imgUrl).url() }}
                            className="h-12 w-12 rounded-full"/>
                        <Text className="flex-1 text-xs">{items[0]?.title}</Text>
                        <TouchableOpacity>
                            <Text className="text-primary">Remove</Text>
                        </TouchableOpacity>
                    </View>   
                ))}
            </ScrollView>
            <View>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen