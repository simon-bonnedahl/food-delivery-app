import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    Bars3Icon,
    AdjustmentsHorizontalIcon,
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
    <SafeAreaView className="pt-5 bg-primary">

        {/*Header*/}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Bars3Icon className='p-4' color="white" size={30}/>
            <View className="flex-1">
                <Text className="font-bold text-light text-xs">
                    Leverera nu!
                </Text>
                <Text className="font-bold text-dark text-xl">
                Nuvarande position
                <ChevronDownIcon size={20} color="#fff"/>
                </Text>
            </View>
            <UserIcon size={35} color="#f25f4c"/>
        </View>

        {/*Search*/}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 bg-light p-3 space-x-2 rounded-md">
                <MagnifyingGlassIcon
                color="gray"
                size={20}/>
                <TextInput placeholder='Sök på restauranger och kategorier'/>
            </View>
            <AdjustmentsHorizontalIcon  color="#fff"/>
        </View>
    
        {/*Body*/}
        <ScrollView className="bg-light">
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