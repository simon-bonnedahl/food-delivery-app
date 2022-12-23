import { View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { urlFor } from '../sanity'
import { TouchableOpacity } from 'react-native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import Basket from '../components/Basket'
import { selectBasketItems } from '../features/basketSlice'
import { setRestaurant } from '../features/restaurantSlice'
import { useDispatch } from 'react-redux'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

     useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const { params:{id, title, imgUrl, rating, description, genre, dishes, address, latitude, longitude}} = useRoute()
   
    useEffect(()=>{
        dispatch(setRestaurant({id, title, imgUrl, rating, description, genre, dishes, address, latitude, longitude}))
    }, [])

    return (
        <>  
            <Basket/>
            <ScrollView>
                <View className="relative">
                    <Image
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    className="w-full h-56 bg-gray-300 p-4"/>
                    <TouchableOpacity className="absolute top-14 left-5 p-2 bg-light rounded-full" onPress={navigation.goBack}>
                        <ArrowLeftIcon size={20} color="#f25f4c"></ArrowLeftIcon>
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon size={20} color="#f25f4c"/>
                                <Text className="text-xs text-lightgray">
                                    <Text className="text-primary">{rating} </Text>
                                    • {genre}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon size={20}  color="gray"/>
                                <Text className="text-xs text-lightgray">{address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-xs text-lightgray mt-2 pb-4">
                            {description}
                        </Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-y border">
                        <QuestionMarkCircleIcon color="gray" size={20} opacity={0.7}></QuestionMarkCircleIcon>
                        <Text className="pl-2 flex-1 text-md font-bold">Har du några allergier?</Text>
                        <ChevronRightIcon color="#f25f4c" size={20}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Meny
                    </Text>
                    {/*Dish rows*/}
                    <View className="px-4 pb-36">
                        {dishes?.map(item=>(
                        <DishRow key={item._id} id={item._id} title={item.name} description={item.short_description} imgUrl={item.image} price={item.price}/>
                    ))}
                    </View>
                    

                </View>
            
            </ScrollView>
        </>
  )
}

export default RestaurantScreen