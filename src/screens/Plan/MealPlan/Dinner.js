import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import { db } from "../../../../Firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";

const Dinner = () => {
  const navigation = useNavigation();
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    const getMealPlanRef = collection(db, "meal-plan");
    const getRef = query(getMealPlanRef);
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchPlan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMealPlan(fetchPlan);
    });
  }, []);

  const handleMeal = (details) => {
    navigation.navigate("MealPlanLandingPage", { data: details });
  };

  return (
    <View style={tw`flex-1 bg-[#ffffff]`}>
      <View style={tw`p-4 bg-[#ffffff] shadow-xl shadow-black`}>
        <Text style={tw`text-[18px] font-bold`}>Dinner</Text>
      </View>
      <View style={tw`py-5 flex items-center`}>
        {mealPlan
          .filter(({ meal_time }) => meal_time === "dinner")
          .map((data) => {
            return (
              <TouchableOpacity
                onPress={() => handleMeal(data)}
                style={tw`h-[180px] w-[370px] bg-white px-3 `}
              >
                <View
                  style={tw`shadow-xl shadow-black rounded-[20px] bg-[#ffffff] flex flex-row `}
                >
                  <View style={tw`p-3`}>
                    <Image
                      source={{
                        uri:
                          data.image_url === "null"
                            ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1680882744~exp=1680883344~hmac=2ed4ad6558839e918a981b5e7fe157d7924703160281e5024981f21cab21b535"
                            : data.image_url,
                      }}
                      style={tw`w-140px h-140px`}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={tw`flex flex-col items-start justify-center`}>
                    <Text style={tw`text-[#FF1D38] text-[18px] font-bold`}>
                      {data.meal_plan}
                    </Text>

                    {/* <Text style={tw`text-black text-[16px] w-40 font-semibold`}>
                      {calories_count}
                    </Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default Dinner;
