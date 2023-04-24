import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import { auth } from "../../../Firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "../../component/AuthContext/AuthContext";

const WhatsYourGoal = () => {
  const [user, setUser] = useState(auth);
  const navigation = useNavigation();
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedWeight, setSelectedWeight] = useState(50);
  const [selectedMuscle, setSelectedMuscle] = useState("chest");
  const { setUserGoal, setGetUser } = useAuthContext();
  const userCollectionRef = collection(db, "userGoal");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setGetUser(currentUser.email);
    });
    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    if (!selectedGoal || !selectedWeight || !selectedMuscle) {
      ToastAndroid.show(
        "Please choose a information correctly",
        ToastAndroid.SHORT
      );
      return;
    }

    setUserGoal(selectedGoal);

    ToastAndroid.show(
      "User Information added successfully",
      ToastAndroid.SHORT
    );
    navigation.navigate("Work");
  };

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
  };
  console.log(user);

  // const addUser = () => {
  //   navigation.navigate("Start");
  // };

  const goalButton = (title) => (
    <View style={tw`py-3 w-[310px]`}>
      <TouchableOpacity
        style={[
          tw`border-[2px] p-3 rounded-[32px]`,
          selectedGoal === title ? tw`bg-[#FAA0A0]` : tw`border-black`,
        ]}
        onPress={() => handleSelectGoal(title)}
      >
        <Text
          style={[
            tw`text-center text-[16px] font-semibold`,
            selectedGoal === title ? tw`text-[#ffffff]` : tw`text-black`,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
      {title === "Lose Weight" && selectedGoal === title && (
        <Picker
          selectedValue={selectedWeight}
          onValueChange={(itemValue) => setSelectedWeight(itemValue)}
          style={tw`w-[310px]`}
        >
          {[...Array(451)].map((_, i) => (
            <Picker.Item key={i} label={`${i + 50} kg`} value={i + 50} />
          ))}
        </Picker>
      )}
      {title === "Gain Muscle" && selectedGoal === title && (
        <Picker
          selectedValue={selectedMuscle}
          onValueChange={(itemValue) => setSelectedMuscle(itemValue)}
          style={tw`w-[310px]`}
        >
          {["Chest", "Bicep", "Back", "Triceps", "Shoulder"].map((muscle) => (
            <Picker.Item key={muscle} label={muscle} value={muscle} />
          ))}
        </Picker>
      )}
    </View>
  );

  return (
    <View style={tw`bg-[#FAA0A0] flex-1`}>
      <View style={tw`px-4 py-4 `}>
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center  px-3`}>
          <View>
            <Image source={require("../../../assets/Image2.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-black text-[22px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#ffffff] text-[22px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-black text-[13px]`}>BE MORE FIT</Text>
          </View>
        </View>
      </View>

      <View
        style={tw`h-[659px] bg-[#ffffff] absolute bottom-0 left-0 right-0 p-3 flex items-center rounded-t-[32px]`}
      >
        {/* About */}
        <View style={tw`py-10`}>
          <Text style={tw`py-1 text-[26px] text-center font-bold`}>
            What's your goal
          </Text>
        </View>
        {/* Goals */}
        <View>
          {goalButton("Lose Weight")}
          {goalButton("Be more active")}
          {goalButton("Gain Muscle")}
          {goalButton("Stay toned")}
          {goalButton("Reduce stress")}
          {goalButton("Get Healthier")}
        </View>
        {/* Button */}
        <TouchableOpacity
          onPress={addUser}
          style={tw`bg-[#FAA0A0] w-[350px] py-3 px-3 rounded-[30px] absolute bottom-6`}
        >
          <Text
            style={tw`text-center text-[#ffffff] text-[16px] font-semibold`}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsYourGoal;
