import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const Basket = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);

  if (!items.length) return;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-primary mx-5 p-3 rounded-lg flex-row items-center space-x-1"
        onPress={() => navigation.navigate("Basket")}
      >
        <View className="border border-light rounded-full w-8 h-8 items-center justify-center">
          <Text className="text-light font-extrabold text-md">
            {items.length}
          </Text>
        </View>
        <Text className="text-light font-extrabold text-md flex-1 text-center">
          Se order
        </Text>
        <Text className="text-md text-light font-extrabold">{total} kr</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
