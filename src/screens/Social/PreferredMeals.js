import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import PlanHeader from "../../component/PlanHeader";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import { useAuthContext } from "../../component/AuthContext/AuthContext";

const PreferredMeals = ({ navigation, route }) => {
  const { data } = route.params;
  const requestCollectionRef = collection(db, "request_plan");
  const [selectedItem, setSelectedItem] = useState("");
  const { getUser } = useAuthContext();

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleSubmit = async () => {
    if (selectedItem !== "") {
      await addDoc(requestCollectionRef, {
        request_status: data.request_status,
        request_target_body: data.request_target_body,
        request_target_weight: data.request_target_weight,
        request_workout_type: data.request_workout_type,
        request_meal: selectedItem,
        request_user: getUser.email,
      });
    }
    navigation.navigate("BottomTab");
  };
  return (
    <View style={tw`flex-1`}>
      <View>
        <PlanHeader />
      </View>

      <View style={tw`p-6`}>
        <View>
          <Text style={tw`text-[24px] text-center px-5 font-bold`}>
            What are your preferred meals when working out?
          </Text>
        </View>
        <View style={tw`flex items-center py-5 gap-5`}>
          <TouchableOpacity
            style={[
              tw`border-[1px] w-full rounded-full p-3`,
              selectedItem === "Light Meals" &&
                tw`bg-[#FAA0A0] border-pink-500`,
            ]}
            onPress={() => handleSelect("Light Meals")}
          >
            <Text style={tw`text-20px text-center`}>Light Meals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`border-[1px] w-full rounded-full p-3`,
              selectedItem === "Heavy Meals" &&
                tw`bg-[#FAA0A0] border-pink-500`,
            ]}
            onPress={() => handleSelect("Heavy Meals")}
          >
            <Text style={tw`text-20px text-center`}>Heavy Meals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`border-[1px] w-full rounded-full p-3`,
              selectedItem === "Vegetable Dish" &&
                tw`bg-[#FAA0A0] border-pink-500`,
            ]}
            onPress={() => handleSelect("Vegetable Dish")}
          >
            <Text style={tw`text-20px text-center`}>Vegetable Dish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`border-[1px] w-full rounded-full p-3`,
              selectedItem === "Salad" && tw`bg-[#FAA0A0] border-pink-500`,
            ]}
            onPress={() => handleSelect("Salad")}
          >
            <Text style={tw`text-20px text-center`}>Salad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`border-[1px] w-full rounded-full p-3`,
              selectedItem === "Half Meat & Half Veg" &&
                tw`bg-[#FAA0A0] border-pink-500`,
            ]}
            onPress={() => handleSelect("Half Meat & Half Veg")}
          >
            <Text style={tw`text-20px text-center`}>
              Half Meat & Half Vegetable
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`absolute bottom-3 w-full px-6`}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={tw`bg-[#FAA0A0] px-4 py-2 rounded-full`}
        >
          <Text style={tw`text-center text-[#ffffff] text-18px font-bold`}>
            Submit Plan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferredMeals;
