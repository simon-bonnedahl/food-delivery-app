import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-primary flex-1 justify-center items-center">
      <Text className="font-bold text-light text-lg py-4">
        Väntar på bekräftelse
      </Text>
      <Progress.CircleSnail
        size={60}
        indeterminate={true}
        color="white"
      ></Progress.CircleSnail>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
