import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "twrnc";
// import { useRoute } from "@react-navigation/native";
import { db } from "../../../Firebase.config";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../../component/AuthContext/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

const EverydayMealPlan = ({ id }) => {
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const [userPlanInfo, setUserPlanInfo] = useState([]);
  const [getUserPlanInfo, setGetUserPlanInfo] = useState([]);
  const respondPlanRef = collection(db, "respond_plans");
  const [getUserInfo, setGetUserInfo] = useState([]);

  useEffect(() => {
    const getRespondPlanList = async () => {
      try {
        const data = await getDocs(respondPlanRef, "user");
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserPlanInfo(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getRespondPlanList();
  }, []);

  const handleBack = () => {
    navigation.navigate("MyPlan");
  };

  return (
    <ScrollView style={tw`flex-1 flex flex-col bg-[#ffffff]`}>
      {userPlanInfo.length > 0 &&
        userPlanInfo.map((getUserPlanInfo) => {
          if (getUserPlanInfo.user === user.email) {
            return (
              <View key={getUserPlanInfo.id}>
                <View>
                  <Image
                    source={require("../../../assets/Meal.jpg")}
                    style={tw`w-full h-200px opacity-70 bg-black `}
                  />
                </View>
                <View>
                  {/* <View style={tw`flex items-center py-5`}>
                  <Text style={tw`font-bold text-30px`}>UserPlan</Text>
                </View> */}
                  {/*  */}
                  <View style={tw`p-10`}>
                    <View style={tw`border-b-[2px] py-10`}>
                      <View>
                        <Text style={tw`text-[34px] font-bold`}>
                          Breakfst Meal
                        </Text>
                        <Text style={tw`text-[34px] text-[#FAA0A0]`}>
                          {getUserPlanInfo.hasOwnProperty("breakfast_name")
                            ? getUserPlanInfo.breakfast_name
                            : "No Breakfast Plan"}
                        </Text>
                      </View>
                      <View>
                        <Text style={tw`text-[14px] font-bold py-5`}>
                          Description
                        </Text>
                        <Text style={tw`text-[14px] `}>
                          {getUserPlanInfo.hasOwnProperty("breakfast_procedure")
                            ? getUserPlanInfo.breakfast_procedure
                            : "No Breakfast Plan"}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/*  */}
                  <View style={tw`p-10 `}>
                    <View style={tw`border-b-[2px] py-10`}>
                      <View>
                        <Text style={tw`text-[34px] font-bold`}>
                          Lunch Meal
                        </Text>
                        <Text style={tw`text-[34px] text-[#FAA0A0]`}>
                          {getUserPlanInfo.hasOwnProperty("lunch_name")
                            ? getUserPlanInfo.lunch_name
                            : "No Dinner Plan"}
                        </Text>
                      </View>
                      <View>
                        <Text style={tw`text-[14px] font-bold py-5`}>
                          Description
                        </Text>
                        <Text style={tw`text-[14px] `}>
                          {getUserPlanInfo.hasOwnProperty("dinner_procedure")
                            ? getUserPlanInfo.dinner_procedure
                            : "No Breakfast Plan"}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/*  */}
                  <View style={tw`p-10 `}>
                    <View style={tw`border-b-[2px] py-10`}>
                      <View>
                        <Text style={tw`text-[34px] font-bold`}>
                          Dinner Meal
                        </Text>
                        <Text style={tw`text-[34px] text-[#FAA0A0]`}>
                          {getUserPlanInfo.hasOwnProperty("dinner_name")
                            ? getUserPlanInfo.dinner_name
                            : "No Dinner Plan"}
                        </Text>
                      </View>
                      <View>
                        <Text style={tw`text-[14px] font-bold py-5`}>
                          Description
                        </Text>
                        <Text style={tw`text-[14px] `}>
                          {getUserPlanInfo.hasOwnProperty("dinner_procedure")
                            ? getUserPlanInfo.dinner_procedure
                            : "No Breakfast Plan"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          } else {
            <Text>Still on pending</Text>;
          }
        })}
      <TouchableOpacity style={tw`absolute top-5 left-5`} onPress={handleBack}>
        <Image source={require("../../../assets/Vector12.png")} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EverydayMealPlan;
