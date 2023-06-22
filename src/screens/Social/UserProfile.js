import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import PlanHeader from "../../component/PlanHeader";
import tw from "twrnc";
import { db } from "../../../Firebase.config";
// import { auth } from "../../../Firebase.config";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../component/AuthContext/AuthContext";
import Logout from "../../component/Logout";
import { getAuth } from "firebase/auth";
import Download from "../../component/Download";

const UserProfile = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const [userInfo, setUserInfo] = useState([]);
  const userInfoCollection = collection(db, "users");
  const [getRespond, setGetRespond] = useState([]);
  const [getRequest, setGetRequest] = useState([]);
  const [getUserInfo, setGetUserInfo] = useState([]);

  const handleSuggestPlan = () => {
    navigation.navigate("MakeYourPlan");
  };

  const handleFitnessPlan = () => {
    navigation.navigate("MyPlan");
  };

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userInfoCollection, "email");
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setGetUserInfo(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getUserList();
  }, []);

  useEffect(() => {
    const postRef = collection(db, "users");
    const getRef = query(postRef);
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchPost = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserInfo(fetchPost);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  useEffect(() => {
    const requestRef = collection(db, "request_plan");
    const getRef = query(requestRef);
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchRequest = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGetRequest(fetchRequest);
    });
  }, []);

  useEffect(() => {
    const respondRef = collection(db, "respond_plan");
    const getRef = query(respondRef);
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchRespond = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGetRespond(fetchRespond);
    });
  }, []);

  const checkRequestPending = getRequest.some(
    (dat) =>
      dat.request_user === user.email && dat.request_status === "Not Processed"
  );
  const checkRequestListProcessed = getRequest.some(
    (dat) =>
      dat.request_user === user.email && dat.request_status === "Processed"
  );

  const getSuggestOutput = () => {
    if (checkRequestPending) {
      return <View></View>;
    } else if (checkRequestListProcessed) {
      return <View></View>;
    } else {
      return (
        <View style={tw`px-5 py-1 flex items-center`}>
          <TouchableOpacity onPress={handleSuggestPlan}>
            <Image
              source={require("../../../assets/Group4.png")}
              style={tw``}
            />
          </TouchableOpacity>
          <Text style={tw`py-2`}>Suggest Plan</Text>
        </View>
      );
    }
  };
  return (
    <View style={tw`flex-1 `}>
      <View>
        <PlanHeader />
      </View>
      <View style={tw`p-5 bg-[#FAA0A0] h-181px`}>
        <View style={tw`flex items-center`}>
          <View style={tw`flex items-center`}>
            {getUserInfo.length > 0 &&
              getUserInfo.map((getGenderDetails, data) => {
                if (getGenderDetails.email === user.email) {
                  return (
                    <View
                      key={data}
                      style={tw`flex flex-row justify-center bg-white items-center rounded-full shadow-md `}
                    >
                      {getGenderDetails.user_gender === "Male" ? (
                        <Image
                          source={require("../../../assets/Frame27.png")}
                        />
                      ) : (
                        <Image
                          source={require("../../../assets/Frame28.png")}
                        />
                      )}
                    </View>
                  );
                }
              })}
          </View>

          <View style={tw`flex flex-row items-center py-1`}>
            <Text style={tw`text-[15px] px-2 font-bold`}>
              {userInfo.length > 0 &&
                userInfo.map((getUserInfo, data) => {
                  if (getUserInfo.email === user.email) {
                    return (
                      <View key={data} style={tw`flex flex-row w-full`}>
                        <View>
                          <Text style={tw`text-20px`}>
                            {getUserInfo.hasOwnProperty("first_name")
                              ? getUserInfo.first_name
                              : "No username"}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
            </Text>
            {/* <Image source={require("../../../assets/PRO2.png")} /> */}
          </View>
          <View style={tw`py-2`}>
            <Download />
          </View>
        </View>
        {/*  */}
        <View style={tw`flex items-center `}>
          <View style={tw`flex flex-row `}>
            {getSuggestOutput()}
            <View style={tw`px-5 py-1  flex items-center`}>
              <TouchableOpacity onPress={handleFitnessPlan}>
                <Image
                  source={require("../../../assets/Group5.png")}
                  style={tw``}
                />
              </TouchableOpacity>

              <Text style={tw`py-4`}>Fitness Plan</Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={tw`px-6 flex items-center `}>
          {getUserInfo.length > 0 &&
            getUserInfo.map((getUserDetails, data) => {
              if (getUserDetails.email === user.email) {
                return (
                  <View key={data} style={tw`gap-3`}>
                    <View style={tw`gap-3 `}>
                      <Text style={tw`px-1 py-1 text-17px text-left font-bold`}>
                        About Me
                      </Text>
                      <View
                        style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                      >
                        <Text>Gender:</Text>
                        <Text>
                          {getUserDetails.hasOwnProperty("user_gender")
                            ? getUserDetails.user_gender
                            : "No Gender data"}
                        </Text>
                      </View>
                      <View
                        style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                      >
                        <Text>Height:</Text>
                        <Text>
                          {getUserDetails.hasOwnProperty("user_height")
                            ? getUserDetails.user_height
                            : "No Height data"}
                        </Text>
                      </View>
                      <View
                        style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                      >
                        <Text>Weight:</Text>
                        <Text>
                          {getUserDetails.hasOwnProperty("user_weight")
                            ? getUserDetails.user_weight
                            : "No Weight data"}
                        </Text>
                      </View>

                      {/* <View
                        style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                      >
                        <Text>Birthday:</Text>
                        <Text>
                          {getUserDetails.hasOwnProperty("date")
                            ? moment(getUserDetails.date, "YYYY-MM-DD").format(
                                "MMMM Do, YYYY"
                              )
                            : "No Birthday data"}
                        </Text>
                      </View> */}
                    </View>
                    <View>
                      <Text style={tw`px-1 py-1 text-17px font-bold`}>
                        My Goal
                      </Text>
                    </View>
                    <View>
                      <View
                        style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                      >
                        {/* <Text>Target Lose Weight:</Text> */}
                        <Text>
                          {getUserDetails.hasOwnProperty("user_goal")
                            ? getUserDetails.user_goal
                            : "No Goal data"}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }
            })}
        </View>
        <View style={tw`flex items-center w-full`}>
          <Logout />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
