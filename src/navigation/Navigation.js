import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "./constants/routeComponents";

const Stack = createStackNavigator();

const Navigation = () => {
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
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.CREATEACCOUNT}
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
            name="BeginnerLandingPage"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.BEGINNERLANDINGPAGE}
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
          <Stack.Screen
            name="Newsfeed"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.NEWSFEED}
          />
          <Stack.Screen
            name="SuggestPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.SUGGESTPLAN}
          />
          <Stack.Screen
            name="IntermediateLandingPage"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.INTERMEDIATELANDINGPAGE}
          />
          <Stack.Screen
            name="AdvancedLandingPage"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.ADVANCEDLANDINGPAGE}
          />
          <Stack.Screen
            name="MakeYourPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.MAKEYOURPLAN}
          />
          <Stack.Screen
            name="PreferredMeals"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.PREFERREDMEALS}
          />
          <Stack.Screen
            name="MyFitnessPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.MYFITNESSPLAN}
          />
          <Stack.Screen
            name="MealPlanLandingPage"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.MEALPLANLANDINGPAGE}
          />
          <Stack.Screen
            name="Pay"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.PAY}
          />
          <Stack.Screen
            name="TransactionComplete"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.TRANSACTIONCOMPLETE}
          />
          <Stack.Screen
            name="EverydayMealPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.EVERYDAYMEALPLAN}
          />

          <Stack.Screen
            name="UserProfile"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.USERPROFILE}
          />
          <Stack.Screen
            name="MyPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.MYPLAN}
          />
          <Stack.Screen
            name="EverydayFitnessPlan"
            options={{ headerShown: false, gestureEnabled: false }}
            component={SCREENS.EVERYDAYFITNESSPLAN}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
