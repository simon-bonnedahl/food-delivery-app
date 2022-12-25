import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  BillingStackNavigator,
  MainStackNavigator,
  OrdersStackNavigator,
  ProfileStackNavigator,
  SettingsStackNavigator,
} from "./StackNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
      <Drawer.Screen name="Orders" component={OrdersStackNavigator} />
      <Drawer.Screen name="Billing" component={BillingStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
