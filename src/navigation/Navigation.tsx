import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE_NAME } from "./constants/constants";
import { SCREENS } from "./constants/routeComponents";

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
            name="Create"
            component={SCREENS.CREATEACCOUNT}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={SCREENS.FORGOTPASSWORD}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Email"
            component={SCREENS.EMAILVERIFICATION}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={SCREENS.ABOUTYOU}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Goal"
            component={SCREENS.WHATSYOURGOAL}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Work"
            component={SCREENS.WORKOUTTIME}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Start"
            component={SCREENS.GETSTARTED}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fitness"
            component={SCREENS.FITNESSPLAN}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BeginnerPlan"
            component={SCREENS.BEGINNERPLAN}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTE_NAME.BOTTOM_TAB}
            component={SCREENS.BOTTOM_TAB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Video"
            component={SCREENS.VIDEOLINK}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Timer"
            component={SCREENS.PLANTIMER}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Subscription"
            component={SCREENS.SUBSCRIPTION}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Breakfast"
            component={SCREENS.BREAKFAST}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
