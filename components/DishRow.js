import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItemsWithId } from '../features/basketSlice'

const DishRow = ({id, title, description, imgUrl, price}) => {
    const [amount, setAmount] = useState(0)
    const items = useSelector(state => selectBasketItemsWithId(state, id))
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({id, title, description, imgUrl, price}))
    }

  return (
    <View className="flex-row w-full mt-4 relative">
        {imgUrl ? <Image
        className="w-24 h-24 rounded-md"
        source={{
            uri: urlFor(imgUrl).url(),
        }}/> : <View className="w-24 h-24 rounded-md bg-gray-400"></View>}
        
        <View className="p-2 w-64">
            <Text className="font-bold ">{title}</Text>
            <Text className="text-xs text-gray-500 mt-1">{description}</Text>
            <View className="absolute bottom-0 right-0 flex-row items-center">
                <TouchableOpacity onPress={()=> {addItemToBasket}}>
                    <PlusCircleIcon color="#f25f4c" />
                </TouchableOpacity>
                
                <Text>{items.length}</Text>
                <PlusCircleIcon color="#f25f4c" onPress={()=> setAmount(amount+1)}/>
            </View>
            <Text className="absolute top-2 right-0">{price} kr</Text>
            
        </View>
      
    </View>
  )
}

export default DishRow