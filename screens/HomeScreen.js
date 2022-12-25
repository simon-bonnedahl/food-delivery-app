import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  AdjustmentsHorizontalIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featured, setFeatured] = useState([]);
  const items = useSelector(selectBasketItems);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    {
      /*Fetch featured */
    }
    sanityClient
      .fetch(
        `
        *[_type == "featured"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->
        }}`
      )
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  return (
    <SafeAreaView className="pt-5 bg-primary">
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Bars3Icon className="p-4" color="white" size={30} />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="font-bold text-light text-xs">Leverera nu!</Text>
          <Text className="font-bold text-dark text-xl">
            Nuvarande position
            <ChevronDownIcon size={20} color="#fff" />
          </Text>
        </View>
        <View className="flex-row">
          {items.length > 0 && (
            <View className="border border-light rounded-full w-4 h-4 items-center justify-center">
              <Text className="text-light text-xs">{items.length}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Basket");
            }}
            disabled={!items.length}
          >
            <ShoppingBagIcon size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 bg-light p-3 space-x-2 rounded-md">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Sök på restauranger och kategorier" />
        </View>
        <AdjustmentsHorizontalIcon color="#fff" />
      </View>

      {/*Body*/}
      <ScrollView className="bg-background">
        {/*Categories*/}
        <Categories />

        {/*Featured*/}
        <View className="pb-36">
          {featured?.map((item) => (
            <FeaturedRow
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.short_description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
