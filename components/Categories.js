import { View, Text, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';

const Categories = () => {

  const [categories, setCategories] = useState([])

    useEffect(() =>{
       {/*Fetch categories */}
        sanityClient.fetch(`*[_type == "category"]`).then(data => {setCategories(data)})
       
        
    }, [])
   
  return (
    <View className="px-4">
    <Text className="font-bold text-md pb-2 pt-4">Vad är du sugen på?</Text>
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}>

      {/* Category Card */}
      {categories?.map(item=>(
        <CategoryCard key={item._id} imgUrl={item.image} title={item.name}/>      
      ))}
    </ScrollView>
    </View>
  );
};

export default Categories;