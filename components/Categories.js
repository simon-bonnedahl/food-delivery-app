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
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>

      {/* Category Card */}
      {categories?.map(item=>(
        <CategoryCard key={item._id} imgUrl={item.image} title={item.name}/>      
      ))}
    </ScrollView>
  );
};

export default Categories;