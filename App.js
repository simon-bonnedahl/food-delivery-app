import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";
import { Provider } from "react-redux";
import DrawerNavigator from "./navigation/DrawerNavigator";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <DrawerNavigator />
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
