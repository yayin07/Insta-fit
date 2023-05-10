import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import PlanHeader from "./PlanHeader";
import { useRoute, useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const MealPlanLandingPage = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { data, nav } = route.params;
  const goBack =() => {
    navigation.navigate(nav)
  }
  return (
    <View style={tw`flex-1 `}>
      <View>
        <PlanHeader />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-around" }}
      >
        <View style={tw`h-330px`} key={data.id}>
          <Image
            source={{
              uri:
                data.image_url === "null"
                  ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1680882744~exp=1680883344~hmac=2ed4ad6558839e918a981b5e7fe157d7924703160281e5024981f21cab21b535"
                  : data.image_url,
            }}
            style={tw`w-full h-320px opacity-80 `}
            resizeMode="stretch"
          />
        </View>

        <View style={tw``}>
          <View style={tw`opacity-90 px-3`}>
            <Text style={tw`text-[34px] font-bold `}>{data.meal_plan}</Text>
            <View>
              <Text style={tw`font-bold px-1`}>
                {data.calories_count} Calories
              </Text>
            </View>
          </View>

          <View>
            <View style={tw`py-10 flex `}>
              <View style={tw`flex items-center`}>
                <Image
                  source={require("../../assets/Line2.png")}
                  style={tw`w-full`}
                />
              </View>
              <View style={tw`px-3 py-2 flex `}>
                <View>
                  <Text style={tw`text-16px font-bold`}>Description</Text>
                  <Text style={tw`py-2 px-3 text-14px`}>
                    {data.description}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={tw`pb-10 flex justify-center items-center`}>
            <TouchableOpacity onPress={() => goBack()}>
              <View
                style={tw`border-[#FAA0A0] border-[2px] w-[150px] p-2 rounded-[20px]`}
              >
                <Text style={tw`text-center`}>Go back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
      </ScrollView>
    </View>
  );
};

export default MealPlanLandingPage;
