import React, { useState, useEffect } from "react"
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore"
// import app from "./firebaseConfig";
import PlanHeader from "../../component/PlanHeader"
import tw from "twrnc"
import { db } from "../../../Firebase.config"
import { auth } from "../../../Firebase.config"
import { useNavigation } from "@react-navigation/native"
import { useAuthContext } from "../../component/AuthContext/AuthContext"

const UserProfile = ({ id }) => {
  const navigation = useNavigation()
  const { getUser } = useAuthContext()
  const [userInfo, setUserInfo] = useState([])
  const userInfoCollection = collection(db, "users")
  const [getUserInfo, setGetUserInfo] = useState([])

  const handleSuggestPlan = () => {
    navigation.navigate("MakeYourPlan")
  }

  const handleFitnessPlan = () => {
    navigation.navigate("Subscription")
  }

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userInfoCollection)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setGetUserInfo(filteredData)
      } catch (err) {
        console.error(err)
      }
    }
    getUserList()
  }, [])

  console.log("getUser", getUser)
  console.log("getUserInfo", getUserInfo)

  return (
    <View style={tw`flex-1 `}>
      <View>
        <PlanHeader />
      </View>
      <View style={tw`p-5 bg-[#FAA0A0] h-181px`}>
        <View style={tw`flex items-center`}>
          <View style={tw`flex items-center`}>
            <Image
              source={require("../../../assets/Frame27.png")}
              style={tw`bg-white rounded-full`}
            />
          </View>

          <View style={tw`flex flex-row items-center py-1`}>
            <Text style={tw`text-19px font-bold`}>User</Text>
            <Image source={require("../../../assets/PRO2.png")} />
          </View>
        </View>
        {/*  */}
        <View style={tw`flex items-center py-3`}>
          <View style={tw`flex flex-row  `}>
            <View style={tw`px-5 py-3 flex items-center`}>
              <TouchableOpacity onPress={handleSuggestPlan}>
                <Image
                  source={require("../../../assets/Group4.png")}
                  style={tw``}
                />
              </TouchableOpacity>

              <Text style={tw`py-2`}>Suggest Plan</Text>
            </View>
            <View style={tw`px-5 py-3  flex items-center`}>
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
        <View style={tw`flex items-center`}>
          <Image source={require("../../../assets/Button.png")} />
        </View>
        {/*  */}
        <View style={tw`px-6  flex items-center`}>
          <Text style={tw`px-1 py-2 text-17px font-bold`}>About Me</Text>

          {getUserInfo.length > 0 &&
            getUserInfo.map((getUserDetails) => {
              if (getUserDetails.email === getUser?.email) {
                return (
                  <View style={tw`gap-3`}>
                    <View
                      style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                    >
                      <Text>Gender:</Text>
                      <Text>{getUserDetails.hasOwnProperty('gender') ? getUserDetails.gender : "No Gender data"}</Text>
                    </View>
                    <View
                      style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                    >
                      <Text>Height:</Text>
                      <Text>{getUserDetails.hasOwnProperty('height') ? getUserDetails.height : "No Height data"}</Text>
                    </View>
                    <View
                      style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                    >
                      <Text>Weight:</Text>
                      <Text>{getUserDetails.hasOwnProperty('weight') ? getUserDetails.weight : "No Weight data"}</Text>
                    </View>
                    <View
                      style={tw`flex flex-row justify-between items-center px-4 bg-[#ffffff] shadow-md p-2 w-330px`}
                    >
                      <Text>Birthday:</Text>
                      <Text>{getUserDetails.hasOwnProperty('birthday') ? getUserDetails.height : "No Birthday data"}</Text>
                    </View>
                  </View>
                )
              }
            })}
        </View>
        {/*  */}
      </View>
    </View>
  )
}

export default UserProfile
