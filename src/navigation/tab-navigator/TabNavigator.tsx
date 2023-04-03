import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE_NAME } from "../constants/constants";
import { SCREENS } from "../constants/routeComponents";
import { Image } from "react-native";

const Stack = createStackNavigator();

const FitnessPlanStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.PLAN}
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.PLAN}
      />
    </Stack.Navigator>
  );
};

const MealPlanStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.MEAL}
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.MEAL}
      />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_NAME.LOGIN}
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.LOGIN}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTE_NAME.PLAN_STACK}
        component={FitnessPlanStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("../../../assets/Group1.png")} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.MEAL_STACK}
        component={MealPlanStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("../../../assets/Vector7.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
