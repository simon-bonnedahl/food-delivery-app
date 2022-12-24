import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-light text-lg">Hjälp</Text>
        </View>
        <View className="bg-light mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <Text className="text-lg text-lightgray ">Beräknad Leveranstid</Text>
          <Text className="text-3xl font-bold text-dark">30 - 45 minuter</Text>
          <Progress.Bar
            className="mt-3"
            color="#f25f4c"
            size={40}
            indeterminate={true}
          />
          <Text className="text-lightgray text-xs mt-3">
            Din beställning hos{" "}
            <Text className="font-bold">{restaurant.title}</Text> förbereds
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#f25f4c"
        />
      </MapView>
      <SafeAreaView className="flex-row bg-light items-center space-x-5 h-24">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-dark p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Simon Bonnedahl</Text>
          <Text className="text-lightgray">Leverantör</Text>
        </View>
        <Text className="text-primary text-lg mr-5 font-bold">Ring</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
