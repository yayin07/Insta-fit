import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE_NAME } from "./constants/constants";
import { SCREENS } from "./constants/routeComponents";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>
          <Stack.Screen
            name="Login"
            component={SCREENS.LOGIN}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fitness"
            component={SCREENS.BOTTOM_TAB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.CREATEACCOUNT}
          />
          <Stack.Screen
            name="Goal"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.GOAL}
          />
          <Stack.Screen
            name="Work"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.WORKOUTTIME}
          />
          <Stack.Screen
            name="Start"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.GETSTARTED}
          />
          <Stack.Screen
            name="BeginnerPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.BEGINNERPLAN}
          />
          <Stack.Screen
            name="Breakfast"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.BREAKFAST}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
