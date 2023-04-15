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
            name="Subscription"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.SUBSCRIPTION}
          />
          <Stack.Screen
            name="Splash"
            component={SCREENS.SPLASHSCREEN}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fitness"
            component={SCREENS.BOTTOM_TAB}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Create"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.CREATEACCOUNT}
          />
          <Stack.Screen
            name="Start"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.GETSTARTED}
          />
          <Stack.Screen
            name="ForgotPassword"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.FORGOTPASSWORD}
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
            name="BeginnerPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.BEGINNERPLAN}
          />
          <Stack.Screen
            name="Breakfast"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.BREAKFAST}
          />
          <Stack.Screen
            name="Lunch"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.LUNCH}
          />
          <Stack.Screen
            name="Dinner"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.DINNER}
          />
          <Stack.Screen
            name="MainCourse"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.MAINCOURSE}
          />
          <Stack.Screen
            name="Drinks"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.DRINKS}
          />
          <Stack.Screen
            name="Salad"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.SALAD}
          />
          <Stack.Screen
            name="Video"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.VIDEO}
          />
          <Stack.Screen
            name="Timer"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.TIMER}
          />
          <Stack.Screen
            name="Upload"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.UPLOAD}
          />
          <Stack.Screen
            name="About"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.ABOUT}
          />
          <Stack.Screen
            name="IntermidiatePlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.INTERMIDIATEPLAN}
          />
          <Stack.Screen
            name="AdvancedPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.ADVANCEDPLAN}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
