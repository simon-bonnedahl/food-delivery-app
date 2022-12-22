import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
 } from 'react-native-heroicons/solid'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([])
    const [featured, setFeatured] = useState([])
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() =>{
        {/*Fetch featured */}
        sanityClient.fetch(`
        *[_type == "featured"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->
        }}`).then(data => {
            setFeatured(data)
        })

       
        
    }, [])
    
  return (
    <SafeAreaView className="bg-white pt-5">

        {/*Header*/}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
                source={{
                    uri: 'https://links.papareact.com/wru',
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Deliver Now!
                </Text>
                <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/*Search*/}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 bg-gray-300 p-3 space-x-2">
                <MagnifyingGlassIcon
                color="gray"
                size={20}/>
                <TextInput placeholder='Search for restaurants or cousines'/>
            </View>
            <AdjustmentsVerticalIcon  color="#00CCBB"/>
        </View>
    
        {/*Body*/}
        <ScrollView className="bg-gray-100">
            {/*Categories*/}
            <Categories/>
        
            {/*Featured*/}
            {featured?.map(item =>(
                <FeaturedRow
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    description={item.short_description}
                    />
            ))}
        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen