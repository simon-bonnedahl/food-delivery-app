import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({id, title, description}) => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() =>{
        {/*Fetch featured restuarants  */}
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                     name
                }
            },
        }[0]`, {id}).then(data => {
            setRestaurants(data.restaurants)
        })
       
        
    }, [id])

  return (
    <View className="px-4 mt-4">
        <View className="flex-row justify-between">
            <Text className="font-bold text-xl">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-sm text-gray-500">{description}</Text>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:0,
            paddingTop:15
        }}>
            {restaurants?.map(item =>(
                <RestaurantCard
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    imgUrl={item.image}
                    rating={item.rating}
                    genre={item.type?.name}
                    address={item.address}
                    latitude={item.latitude}
                    longitude={item.longitude}/>
            ))}
            
        </ScrollView>
        
    </View>
  )
}

export default FeaturedRow