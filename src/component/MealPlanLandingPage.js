import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import PlanHeader from "./PlanHeader";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";

const MealPlanLandingPage = () => {
  const route = useRoute();
  const { data } = route.params;
  return (
    <View style={tw`flex-1 relative`}>
      <View>
        <PlanHeader />
      </View>
      <View style={tw`w-full `}>
        <View>
          <Image
            source={{
              uri:
                data.image_url === "null"
                  ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1680882744~exp=1680883344~hmac=2ed4ad6558839e918a981b5e7fe157d7924703160281e5024981f21cab21b535"
                  : data.image_url,
            }}
            style={tw`w-full h-220px opacity-90 `}
            resizeMode="contain"
          />
        </View>

        <View style={tw`absolute top-38 w-full`}>
          <View style={tw` `}>
            <View style={tw`bg-gray-600 opacity-0`}>
              <Text style={tw`text-[34px] font-bold `}>{data.meal_plan}</Text>
              <View>
                <Text style={tw`font-bold px-1`}>
                  {data.calories_count} Calories
                </Text>
              </View>
            </View>

            <ScrollView>
              <View style={tw`py-10 flex items-center`}>
                <View style={tw`flex items-center`}>
                  <Image
                    source={require("../../assets/Line2.png")}
                    style={tw`w-full`}
                  />
                </View>
                <View style={tw`px-2 py-2`}>
                  <Text style={tw`text-16px font-bold`}>Description</Text>
                  <Text style={tw`py-2 text-14px`}>{data.description}</Text>
                </View>
                {/* <View style={tw`px-2 py-2`}>
                <Text style={tw`text-16px font-bold`}>Description</Text>
                <Text style={tw`py-2 text-14px`}>{data.description}</Text>
              </View> */}
              </View>
            </ScrollView>
          </View>
        </View>
        {/*  */}
      </View>
    </View>
  );
};

export default MealPlanLandingPage;
