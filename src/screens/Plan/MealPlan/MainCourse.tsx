import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";

import { db } from "../../../../Firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";

const MainCourse = ({ navigation }: any) => {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    const getMealPlanRef = collection(db, "meal-plan");
    const getRef = query(getMealPlanRef);
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const { fetchPlan }: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMealPlan(fetchPlan);
    });
  }, []);

  return (
    <View style={tw`flex-1 bg-[#ffffff]`}>
      <View style={tw`p-4 bg-[#ffffff] shadow-xl shadow-black`}>
        <Text style={tw`text-[18px] font-bold`}>Main Course</Text>
      </View>
      <View style={tw`py-5 flex items-center`}>
        {mealPlan
          .filter(({ meal_time }) => meal_time === "MainCourse")
          .map(({ description, meal_plan, meal_time, i }) => (
            <View key={i} style={tw`h-[180px] w-[370px] bg-white `}>
              <View
                style={tw`shadow-xl shadow-black rounded-[20px] bg-[#ffffff] flex flex-row `}
              >
                <View style={tw`p-3`}>
                  <Image source={require("../../../../assets/image4.png")} />
                </View>
                <View style={tw`flex flex-col items-start justify-center`}>
                  <Text style={tw`text-[#FF1D38] text-[18px] font-bold`}>
                    {meal_time}
                  </Text>
                  <Text style={tw`text-black text-[16px] font-semibold`}>
                    {meal_plan}
                  </Text>
                </View>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
};

export default MainCourse;
