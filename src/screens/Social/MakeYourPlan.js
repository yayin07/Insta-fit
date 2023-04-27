import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import tw from "twrnc";
import PlanHeader from "../../component/PlanHeader";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../../Firebase.config";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../component/AuthContext/AuthContext";

const MakeYourPlan = () => {
  const navigation = useNavigation();
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedBodyArea, setSelectedBodyArea] = useState(null);
  const [selectedWorkoutType, setSelectedWorkoutType] = useState(null);
  const [showWeightDropdown, setShowWeightDropdown] = useState(false);
  const [showBodyAreaDropdown, setShowBodyAreaDropdown] = useState(false);
  const [showWorkoutTypeDropdown, setShowWorkoutTypeDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const [requestPlan, setRequestPlan] = useState([]);
  const { getUser } = useAuthContext();
  // const makeYourPlanRef = doc(db, "user");

  useEffect(() => {
    const suggestRef = collection(db, "request_plan");
    const getRef = query(suggestRef);
    const unsubscribe = onSnapshot(getRef, (snaphot) => {
      const fetchRequestPlan = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequestPlan(fetchRequestPlan);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("requestPlan", requestPlan);

  const bodyAreas = ["Biceps", "Triceps", "Chest", "Abs"];
  const workoutTypes = [
    "Yoga",
    "Cardiovascular workouts",
    "Strength training workouts",
    "High-intensity interval training",
    "Pilates",
    "CrossFit",
    "Boxing",
    "Dance-based workouts",
    "Circuit training",
    "Outdoor workouts",
  ];

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const toggleBodyAreaDropdown = () => {
    setShowBodyAreaDropdown((prevState) => !prevState);
  };

  const toggleWorkoutTypeDropdown = () => {
    setShowWorkoutTypeDropdown((prevState) => !prevState);
  };

  const handleNext = () => {
    const planData = {
      request_target_weight: selectedWeight,
      request_target_body: selectedBodyArea,
      request_workout_type: selectedWorkoutType,
      request_status: "Not Processed",
    };
    navigation.navigate("PreferredMeals", { data: planData });
  };

  const getRequestEmail = requestPlan.map((userEmail) => {
    return userEmail.request_user;
  });

  console.log("getRequestEmail", getRequestEmail);

  return (
    <View style={tw`flex-1 `}>
      <View>
        <PlanHeader />
      </View>

      {getRequestEmail[0] === getUser.email ? (
        <View style={styles.container}>
          <Text>You already submitted your plan</Text>
        </View>
      ) : (
        <View>
          <View>
            <View
              style={tw`p-3 flex items-center py-10 ${
                screenWidth >= 640 ? "justify-between" : "flex-wrap"
              }`}
            >
              <Text
                style={tw`text-[24px] font-bold ${
                  screenWidth >= 640 ? "mb-0" : "mb-4"
                }`}
              >
                Make Your Plan
              </Text>
              <View style={tw`flex items-center gap-5`}>
                <TouchableOpacity
                  onPress={toggleDropdown}
                  style={tw`ml-4 p-2 border border-gray-400 rounded-full w-340px`}
                >
                  <Text style={tw`text-lg font-semibold text-center`}>
                    {selectedWeight ? `${selectedWeight} kg` : "Lose Weight"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={toggleBodyAreaDropdown}
                  style={tw`ml-4 p-2 border border-gray-400 rounded-full w-340px`}
                >
                  <Text style={tw`text-lg font-semibold text-center`}>
                    {selectedBodyArea ? selectedBodyArea : "Target Body Area"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={toggleWorkoutTypeDropdown}
                  style={tw`ml-4 p-2 border border-gray-400 rounded-full w-340px`}
                >
                  <Text style={tw`text-lg font-semibold text-center`}>
                    {selectedWorkoutType
                      ? selectedWorkoutType
                      : "Workout Types"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={showDropdown}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={tw`text-lg font-semibold mb-4`}>
                    Target Lose Weight:
                  </Text>
                  <Picker
                    selectedValue={selectedWeight}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedWeight(itemValue);
                      toggleDropdown();
                    }}
                    style={tw`w-32`}
                  >
                    {Array.from({ length: 461 }, (_, i) => i + 40).map((kg) => (
                      <Picker.Item
                        key={kg}
                        label={`${kg} kg`}
                        value={`${kg}`}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={showBodyAreaDropdown}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={tw`text-lg font-semibold mb-4`}>
                    Target Body Area:
                  </Text>
                  <Picker
                    selectedValue={selectedBodyArea}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedBodyArea(itemValue);
                      toggleBodyAreaDropdown();
                    }}
                    style={tw`w-32`}
                  >
                    {bodyAreas.map((bodyArea) => (
                      <Picker.Item
                        key={bodyArea}
                        label={bodyArea}
                        value={bodyArea}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={showWorkoutTypeDropdown}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={tw`text-lg font-semibold mb-4`}>
                    Workout Types:
                  </Text>
                  <Picker
                    selectedValue={selectedWorkoutType}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedWorkoutType(itemValue);
                      toggleWorkoutTypeDropdown();
                    }}
                    style={tw`w-32`}
                  >
                    {workoutTypes.map((workoutType) => (
                      <Picker.Item
                        key={workoutType}
                        label={workoutType}
                        value={workoutType}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </Modal>
          </View>
          <View style={tw` w-full h-full px-6 `}>
            <TouchableOpacity
              onPress={handleNext}
              style={tw`bg-[#FAA0A0] px-4 py-2 rounded-full  `}
            >
              <Text style={tw`text-center text-[#ffffff] text-18px font-bold`}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
});

export default MakeYourPlan;
