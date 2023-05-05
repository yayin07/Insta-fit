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
        name="Fitness"
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.FITNESS}
      />
    </Stack.Navigator>
  );
};

const MealPlanStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Meal"
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.MEAL}
      />
    </Stack.Navigator>
  );
};

const UserProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfile"
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.USERPROFILE}
      />
    </Stack.Navigator>
  );
};

const SocialStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newsfeed"
        options={{ headerShown: false, gestureEnabled: false }}
        component={SCREENS.NEWSFEED}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Workout Plan"
        component={FitnessPlanStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("../../../assets/Group1.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Meal Plan"
        component={MealPlanStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("../../../assets/Vector7.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="News feed"
        component={SocialStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("../../../assets/Vector9.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="User Profile"
        component={UserProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("../../../assets/Vector10.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
