import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE_NAME } from "../constants/constants";
import { SCREENS } from "../constants/routeComponents";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.LOGIN}
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.LOGIN}
      />
      <Stack.Screen
        name={ROUTE_NAME.CREATEACCOUNT}
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.CREATEACCOUNT}
      />
    </Stack.Navigator>
  );
};

const FitPlanNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.FITNESSPLAN}
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.FITNESSPLAN}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Fitstack"
        component={FitPlanNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
